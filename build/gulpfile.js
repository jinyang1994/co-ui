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
const siteDir = path.join(process.cwd(), '_site');

function compileTs(output) {
  const task = (done) => {
    const modules = output === esmLib ? false : undefined;
    const babelConfig = getBabelConfig(modules);
    const { js, dts } = gulp
      .src([
        'components/**/*.tsx',
        'components/**/*.ts',
        '!components/**/*.test.ts',
        '!components/**/*.test.tsx',
        'typings/**/*.d.ts',
      ])
      .pipe(ts(tsConfig.compilerOptions));

    return merge2([
      js.pipe(babel(babelConfig)).pipe(gulp.dest(output)),
      dts.pipe(gulp.dest(output)),
    ]).on('finish', done);
  };

  task.displayName = `Compile Typescript to ${output === esmLib ? 'ES Module' : 'CommonJS'}`;

  return task;
}

function compileLess(output) {
  const task = () => {
    return gulp
      .src(['components/**/index.less'])
      .pipe(less())
      .pipe(postcss(postcssConfig.plugins))
      .pipe(gulp.dest(output));
  };

  task.displayName = `Compile mode ${output === esmLib ? 'ES Module' : 'CommonJS'}'s Less to CSS`;

  return task;
}

function clean(...paths) {
  const task = (done) => {
    Array.from(paths).forEach((item) => {
      rimraf.sync(item);
    });
    done();
  };

  task.displayName = `Clean ${paths.toString()}`;

  return task;
}

function dist() {
  const task = (done) => {
    webpack(webpackConfig, (err, stats) => {
      /* eslint-disable no-console */
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
  };

  task.displayName = 'Use webpack build UMD product';

  return task;
}

gulp.task('compile:esm', gulp.series(
  clean(esmLib),
  gulp.parallel(
    compileTs(esmLib),
    compileLess(esmLib),
  ),
));

gulp.task('compile:cjs', gulp.series(
  clean(cjsLib),
  gulp.parallel(
    compileTs(cjsLib),
    compileLess(cjsLib),
  ),
));

gulp.task('compile', gulp.parallel('compile:esm', 'compile:cjs'));

gulp.task('dist', gulp.series(
  clean(distLib),
  dist(),
));

gulp.task('clean', clean(esmLib, cjsLib, distLib, siteDir));
