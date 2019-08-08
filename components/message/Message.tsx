import React, { Component } from 'react';
import { render } from 'react-dom';
import { TransitionGroup, CSSTransition } from '../transition';
import Notice, { Props as NoticeProps } from './Notice';
import { generateId } from '../_utils/base';
import { getPrefixCls } from '../_utils/config';

const prefixCls = getPrefixCls('message');

type Config = Omit<NoticeProps, 'onClose'>;
interface State {
  notices: (Config & { key: string, done: () => void })[];
}

class Message extends Component<{}, State> {
  static init() {
    const container = document.createElement('div');

    return new Promise((resolve, reject) => {
      try {
        container.classList.add(prefixCls);
        document.body.appendChild(container);
        render(<Message ref={(instance) => resolve(instance)} />, container);
      } catch (err) {
        reject(err);
      }
    });
  }

  constructor(props: {}) {
    super(props);
    this.state = {
      notices: [],
    };
  }

  create(config: Config) {
    const notices = [...this.state.notices];

    return new Promise((resolve) => {
      notices.push({ ...config, done: resolve, key: generateId() });
      this.setState({ notices });
    });
  }

  remove(key: string) {
    const notices = [...this.state.notices];
    const index = notices.findIndex(notice => notice.key === key);

    if (index >= 0) {
      const [notice] = notices.splice(index, 1);

      this.setState({ notices }, notice.done);
    }
  }

  render() {
    const { notices } = this.state;

    return (
      <TransitionGroup component={null}>
        {
          notices.map((notice) => (
            <CSSTransition
              key={notice.key}
              timeout={500}
              classNames={prefixCls}
            >
              <Notice
                {...notice}
                onClose={() => this.remove(notice.key)}
              />
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    );
  }
}

export default Message;
