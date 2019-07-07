import React from 'react';

function Button(props: React.HTMLAttributes<HTMLButtonElement>) {
  const { children, ...btnProps } = props;

  return (
    <button {...btnProps}>{children}</button>
  );
}

export default Button;
