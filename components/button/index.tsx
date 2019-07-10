import React from 'react';

function Button(props: React.HTMLAttributes<HTMLButtonElement>) {
  const { children, ...btnProps } = props;

  return (
    <button className="co-button" {...btnProps}>{children}</button>
  );
}

export default Button;
