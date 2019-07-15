import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import styles from './styles.module.less';

function Table({ data, className }) {
  return (
    <div className={className}>
      <div className={styles.grid}>
        {
          data.map((row, i) => (
            <div key={`row-${i}`} className={styles.row}>
              {
                row.map((col, j) => (
                  <div key={`col-${j}`} className={styles.column}>
                    <i className={classNames(`mdi mdi-${col.icon}`, styles.icon)} />
                    <FormattedMessage id={col.text}>
                      {text => <span className={styles.text}>{text}</span>}
                    </FormattedMessage>
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Table;
