import React from 'react';
import collect from 'bisheng/collect';
import Title from '@theme/template/components/Title';
import Markdown from '@theme/template/components/Markdown';
import { getLocale } from '@theme/template/utils';
import Demo from './Demo';
import styles from './styles.module.less';

function Main({ demos, utils, introduce }) {
  const { meta, content } = introduce;

  return (
    <>
      <Title meta={meta} />
      {
        !!content && (
          <Markdown>
            {utils.toReactComponent(content)}
          </Markdown>
        )
      }
      {
        demos.filter(demo => demo.preview).map((demoData) => (
          <Demo
            {...demoData}
            key={demoData.meta.filename}
            utils={utils}
          />
        ))
      }
      {
        !!introduce.api && (
          <Markdown className={styles.api}>
            {utils.toReactComponent(introduce.api)}
          </Markdown>
        )
      }
    </>
  );
}

export default collect(async ({ pageData, location }) => {
  const locale = getLocale(location.query);
  if (!pageData) throw 404; // eslint-disable-line no-throw-literal
  const [introduce, demos] = await Promise.all([
    pageData.index[locale](),
    pageData.demo(),
  ]);

  return {
    introduce,
    demos: Object.values(demos).map((demoData) => {
      const { meta, content, ...other } = demoData;

      return {
        ...other,
        content: content[locale],
        meta: {
          ...meta,
          title: meta.title[locale],
        },
      };
    }),
  };
})(Main);
