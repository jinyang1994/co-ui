import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.less';

function Colors() {
  const colors = [
    {
      header: 'Fill colors',
      className: styles.fill,
      items: [
        { name: 'Primary', style: styles.primary },
        { name: 'Success', style: styles.success },
        { name: 'Info', style: styles.info },
        { name: 'Danger', style: styles.danger },
        { name: 'Warning', style: styles.warning },
      ],
    },
    {
      header: 'Pastel colors',
      className: styles.pastel,
      items: [
        { name: 'Primary', style: styles.primary },
        { name: 'Success', style: styles.success },
        { name: 'Info', style: styles.info },
        { name: 'Danger', style: styles.danger },
        { name: 'Warning', style: styles.warning },
      ],
    },
    {
      header: 'Borders colors',
      className: styles.border,
      items: [
        { name: 'Default', style: styles.default },
        { name: 'Primary', style: styles.primary },
        { name: 'Success', style: styles.success },
        { name: 'Info', style: styles.info },
        { name: 'Danger', style: styles.danger },
        { name: 'Warning', style: styles.warning },
      ],
    },
    {
      header: 'Basic colors',
      className: styles.basic,
      items: [
        { name: 'Black', style: styles.black },
        { name: 'Extra dark grey', style: classNames(styles.grey, styles.dark, styles.extra) },
        { name: 'Dark grey', style: classNames(styles.grey, styles.dark) },
        { name: 'Grey', style: styles.grey },
        { name: 'Light grey', style: classNames(styles.grey, styles.light) },
        { name: 'Extra light grey', style: classNames(styles.grey, styles.light, styles.extra) },
        { name: 'Dark white', style: classNames(styles.white, styles.dark) },
        { name: 'White', style: styles.white },
      ],
    },
    {
      header: 'Element status',
      className: styles.status,
      items: [
        { name: 'Hovered', style: styles.hovered },
        { name: 'Active', style: styles.active },
        { name: 'Disabled', style: styles.disabled },
      ],
    },
    {
      header: 'Shadows',
      className: styles.shadow,
      items: [
        { name: '#1', style: styles.shadow1 },
        { name: '#2', style: styles.shadow2 },
        { name: '#3', style: styles.shadow3 },
        { name: '#4', style: styles.shadow4 },
        { name: '#5', style: styles.shadow5 },
      ],
    },
  ];
  const length = colors.map((item) => item.items).reduce((res, item) => {
    const currentLength = item.length;

    return res > currentLength ? res : currentLength;
  }, 0);

  return (
    <div className={styles.colors}>
      <table>
        <thead>
          <tr>
            {
              colors.map((color, i) => (
                <td key={i}>{color.header}</td>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            Array.from(new Array(length)).map((_, i) => (
              <tr key={i}>
                {
                  colors.map(({ items, className }, j) => {
                    const item = items[i];
                    if (!item) return <td key={j} />;
                    const { name, style } = item;

                    return (
                      <td key={j}>
                        <span className={classNames(styles.item, className, style)} />
                        <p className={styles.name}>{name}</p>
                      </td>
                    );
                  })
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Colors;
