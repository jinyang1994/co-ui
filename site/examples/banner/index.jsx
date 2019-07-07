import React from 'react';
import card from './card.png';
import charts from './charts.png';
import payment from './payment.png';
import popup from './popup.png';
import preview from './preview.png';
import pricing from './pricing.png';
import uploader from './uploader.png';
import styles from '../styles.module.less';

export const Card = () => <img src={card} className={styles.image} alt="banner-card" />;
export const Charts = () => <img src={charts} className={styles.image} alt="banner-charts" />;
export const Payment = () => <img src={payment} className={styles.image} alt="banner-payment" />;
export const Popup = () => <img src={popup} className={styles.image} alt="banner-popup" />;
export const Preview = () => <img src={preview} className={styles.image} alt="banner-preview" />;
export const Pricing = () => <img src={pricing} className={styles.image} alt="banner-pricing" />;
export const Uploader = () => <img src={uploader} className={styles.image} alt="banner-uploader" />;
