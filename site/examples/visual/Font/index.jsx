import React from 'react';
import styles from './styles.module.less';

function Font() {
  const fontSizes = [32, 24, 18, 16, 14, 12];
  const rows = [
    { name: 'Black', fontWeight: 900 },
    { name: 'Extra Bold', fontWeight: 800 },
    { name: 'Bold', fontWeight: 700 },
    { name: 'Semi Bold', fontWeight: 600 },
    { name: 'Medium', fontWeight: 500 },
    { name: 'Regular', fontWeight: 400 },
    { name: 'Light', fontWeight: 300 },
    { name: 'Extra Light', fontWeight: 200 },
    { name: 'Thin', fontWeight: 100 },
  ];

  return (
    <div className={styles.font}>
      <table>
        <thead>
          <tr>
            <td />
            {
              fontSizes.map((fontSize, i) => (
                <td key={i}>
                  <div className={styles.header}>
                    <h5 className={styles.num}>
                      #{i + 1}
                    </h5>
                    <p className={styles.size}>
                      Size: {fontSize}px
                    </p>
                  </div>
                </td>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            rows.map((row, i) => (
              <tr key={i} style={{ fontWeight: row.fontWeight }}>
                <td className={styles.name}>
                  {row.name}
                </td>
                {
                  fontSizes.map((fontSize, j) => (
                    <td
                      key={j}
                      className={styles.font}
                      style={{ fontSize }}
                    >
                      Aa
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Font;
