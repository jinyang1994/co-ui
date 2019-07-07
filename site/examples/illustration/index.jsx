import React from 'react';
import QueueAnim from 'rc-queue-anim';
import a from './a.svg';
import b from './b.svg';
import c from './c.svg';
import d from './d.svg';
import e from './e.svg';
import f from './f.svg';
import g from './g.svg';
import h from './h.svg';
import i from './i.svg';
import styles from './styles.module.less';


export default () => (
  <QueueAnim type="bottom" interval={130} className={styles.items}>
    <img key="1" src={a} className={styles.a} alt="illustration-a" />
    <img key="2" src={b} className={styles.b} alt="illustration-b" />
    <img key="3" src={c} className={styles.c} alt="illustration-c" />
    <img key="4" src={d} className={styles.d} alt="illustration-d" />
    <img key="5" src={e} className={styles.e} alt="illustration-e" />
    <img key="6" src={f} className={styles.f} alt="illustration-f" />
    <img key="7" src={g} className={styles.g} alt="illustration-g" />
    <img key="8" src={h} className={styles.h} alt="illustration-h" />
    <img key="9" src={i} className={styles.i} alt="illustration-i" />
  </QueueAnim>
);
