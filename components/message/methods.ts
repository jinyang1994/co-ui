import { ReactNode } from 'react';
import Message from './Message';
import { Type as NoticeType } from './Notice';

let messageInstance: Message | null = null;
let defaultDuration = 3;

type Arguments = [ReactNode, number, () => void, ReactNode];

function getInstance() {
  if (messageInstance) return Promise.resolve(messageInstance);
  return Message.init().then((instance: Message) => {
    messageInstance = instance;

    return instance;
  });
}

function create(type?: NoticeType) {
  return (...args: Arguments) => {
    const [content, duration = defaultDuration, icon] = args;

    return getInstance().then((instance) => {
      return instance.create({
        type,
        content,
        duration,
        icon,
      });
    })
  };
}

export function config(messageConfig: { duration?: number }) {
  const { duration } = messageConfig;

  if (duration) defaultDuration = duration;
}

export const success = (...args: Arguments) => create('success')(...args);
export const warning = (...args: Arguments) => create('warning')(...args);
export const error = (...args: Arguments) => create('error')(...args);
export const info = (...args: Arguments) => create('info')(...args);
export const open = (...args: Arguments) => create()(...args);
