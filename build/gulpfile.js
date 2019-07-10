'use strict';
const path = require('path');
const gulp = require('gulp');
const webpack = require('webpack');
const ts = require('gulp-typescript');
const merge2 = require('merge2');
const babel = require('gulp-babel');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const rimraf = require('rimraf');
const tsConfig = require('../tsconfig');
const postcssConfig = require('./postcss.config');
const { get: getBabelConfig } = require('./babel.config');
const webpackConfig = require('./webpack.config');

// build
const esmLib = path.join(process.cwd(), 'esm');
const cjsLib = path.join(process.cwd(), 'cjs');
const distLib = path.join(process.cwd(), 'dist');

function compileTs(output) {
  const modules = output === esmLib ? false : undefined;
  const babelConfig = getBabelConfig(modules);

  const { js, dts } = gulp
    .src([
      'components/**/*.tsx',
      'components/**/*.ts',
      'typings/**/*.d.ts',
    ])
    .pipe(ts(tsConfig.compilerOptions));

  return merge2([
    js.pipe(babel(babelConfig)).pipe(gulp.dest(output)),
    dts.pipe(gulp.dest(output)),
  ]);
}

function compileLess(output) {
  return gulp
    .src(['components/**/index.less'])
    .pipe(less())
    .pipe(postcss(postcssConfig.plugins))
    .pipe(gulp.dest(output));
}

function clean(...paths) {
  Array.from(paths).forEach((path) => {
    rimraf.sync(path);
  });
}

gulp.task('compile:esm', gulp.series(
  (done) => {
    clean(esmLib);
    done();
  },
  gulp.parallel(
    (done) => compileTs(esmLib).on('finish', done),
    () => compileLess(esmLib),
  ),
));

gulp.task('compile:cjs', gulp.series(
  (done) => {
    clean(cjsLib);
    done();
  },
  gulp.parallel(
    (done) => compileTs(cjsLib).on('finish', done),
    () => compileLess(cjsLib),
  ),
));

gulp.task('compile', gulp.parallel('compile:esm', 'compile:cjs'));

gulp.task('dist', gulp.series(
  (done) => {
    clean(distLib);
    done();
  },
  (done) => {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }
        return;
      }

      const info = stats.toJson();

      if (stats.hasErrors()) {
        console.error(info.errors);
      }

      if (stats.hasWarnings()) {
        console.warn(info.warnings);
      }

      const buildInfo = stats.toString({
        colors: true,
        children: true,
        chunks: false,
        modules: false,
        chunkModules: false,
        hash: false,
        version: false,
      });
      console.log(buildInfo);

      done();
    });
  },
));

gulp.task('clean', (done) => {
  clean(esmLib, cjsLib, distLib, '_site');
  done();
});
