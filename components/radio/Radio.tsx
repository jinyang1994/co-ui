import React, { Component, createRef, DOMAttributes, CSSProperties, ChangeEvent, RefObject, ReactText } from 'react';
import classNames from 'classnames';
import RadioGroup from './RadioGroup';
import { runCallback } from '../_utils/function';
import { getPrefixCls } from '../_utils/config';

const prefixCls = getPrefixCls('radio');

export interface Props extends Omit<DOMAttributes<HTMLInputElement>, 'onChange'> {
  value?: any;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  children?: ReactText,
  className?: string;
  style?: CSSProperties;
  onChange?: (value: any, e: ChangeEvent<HTMLInputElement>) => void;
}

class Radio extends Component<Props> {
  static Group = RadioGroup;
  static isRadio = true;
  private readonly ref: RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);
    this.ref = createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  focus() {
    (this.ref.current as HTMLInputElement).focus();
  }

  blur() {
    (this.ref.current as HTMLInputElement).blur();
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { onChange, disabled, value } = this.props;

    if (disabled) return;
    runCallback(onChange, value, e);
  }

  render() {
    const { children, className, checked, name, disabled, style, ...radioProps } = this.props;
    const classes = classNames(prefixCls, {
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled,
    }, className);

    return (
      <label className={classes} style={style}>
        <span className={`${prefixCls}-element`}>
          <input
            {...radioProps}
            name={name}
            disabled={disabled}
            checked={checked}
            type="radio"
            onChange={this.handleChange}
            ref={this.ref}
          />
        </span>
        <span className={`${prefixCls}-text`}>
          {children}
        </span>
      </label>
    );
  }
}

export default Radio;
