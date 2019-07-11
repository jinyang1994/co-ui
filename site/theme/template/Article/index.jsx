import React from 'react';
import collect from 'bisheng/collect';
import Title from '@theme/template/components/Title';
import Markdown from '@theme/template/components/Markdown';
import { getLocale } from '@theme/template/utils';

function Main({ utils, introduce }) {
  const { meta, description, content } = introduce;

  return (
    <>
      <Title meta={meta} />
      <Markdown>
        {!!description && utils.toReactComponent(description)}
        {!!content && utils.toReactComponent(content)}
      </Markdown>
    </>
  );
}

export default collect(async ({ pageData, location }) => {
  const locale = getLocale(location.query);
  if (!pageData) throw 404;

  return {
    introduce: await pageData[locale](),
  };
})(Main);
