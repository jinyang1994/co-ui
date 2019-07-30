import React, { Component, createRef, DOMAttributes, CSSProperties, ChangeEvent, RefObject } from 'react';
import classNames from 'classnames';
import CheckboxGroup from './CheckboxGroup';
import { runCallback } from '../_utils/function';
import { getPrefixCls } from '../_utils/config';

const prefixCls = getPrefixCls('checkbox');

export interface Props extends Omit<DOMAttributes<HTMLInputElement>, 'onChange'> {
  value?: string;
  className?: string;
  checked?: boolean;
  style?: CSSProperties;
  name?: string;
  disabled?: boolean;
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
  forwardedRef?: RefObject<HTMLInputElement>;
}

class Checkbox extends Component<Props> {
  static Group = CheckboxGroup;
  static isCheckbox = true;
  private ref: RefObject<HTMLInputElement>;
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
    const { disabled, onChange } = this.props;

    if (disabled) return;
    runCallback(onChange, e.target.checked, e);
  }

  render() {
    const { children, className, style, disabled, checked, ...checkboxProps } = this.props;
    const classes = classNames(prefixCls, {
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled,
    }, className);

    return (
      <label className={classes} style={style}>
        <span className={`${prefixCls}-element`}>
          <input
            {...checkboxProps}
            type="checkbox"
            checked={checked}
            disabled={disabled}
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

export default Checkbox;
