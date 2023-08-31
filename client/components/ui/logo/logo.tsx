import classNames from 'classnames';
import Link from 'next/link';

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <Link
      href="/"
      className={classNames('text-lg font-bold flex items-center', className)}
    >
      {/* <span className="text-rose-600 font-black"><Briefcase /></span> */}
      <span>Krypto</span>
      <span>FundMe.</span>
    </Link>
  );
};

export default Logo;
