import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.less';

function Demo({ meta, content, preview, highlightedCode, highlightedStyle, style, utils }) {
  return (
    <div className={styles.demo}>
      <h3>{meta.title}</h3>
      {!!style && <style dangerouslySetInnerHTML={{ __html: style }} />}
      <div>
        {utils.toReactComponent(['div', ...content])}
      </div>
      <div>{preview(React, ReactDOM)}</div>
      <h4>JavaScript</h4>
      {utils.toReactComponent(highlightedCode)}
      {
        !!highlightedStyle && (
          <>
            <h4>CSS</h4>
            <div>
              <pre className="language-css">
                <code dangerouslySetInnerHTML={{ __html: highlightedStyle }} />
              </pre>
            </div>
          </>
        )
      }
    </div>
  );
}

export default Demo;
