import React from 'react';
import login from './login.png';
import pricing from './pricing.png';
import uploader from './uploader.png';
import styles from '../styles.module.less';

export const Login = () => <img src={login} className={styles.image} alt="interface-login" />;
export const Uploader = () => <img src={uploader} className={styles.image} alt="interface-uploader" />;
export const Pricing = () => <img src={pricing} className={styles.image} alt="interface-pricing" />;