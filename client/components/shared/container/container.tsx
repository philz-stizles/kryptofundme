import { PropsWithChildren } from 'react';
import clx from 'classnames';

type Props = {
  className?: string;
};

const Container = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div className={clx('w-10/12 max-w-7xl mx-auto', className)}>{children}</div>
  );
};

export default Container;
