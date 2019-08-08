import { ReactElement } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactElement;
  getContainer?: () => HTMLElement;
}

function Portal(props: Props) {
  const { children, getContainer } = props;
  const container = getContainer ? getContainer() : document.body;

  return createPortal(children, container);
}

export default Portal;
