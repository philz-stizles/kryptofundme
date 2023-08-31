import classNames from 'classnames';
import Image from 'next/image';

type Props = {
  src?: string;
  className?: string;
};

const Avatar = ({ src, className }: Props) => {
  return (
    <Image
      className={classNames('h-12 w-12 rounded-full', className)}
      src={src || '/images/placeholder.jpg'}
      alt="user avatar"
      width="400"
      height="400"
      loading="lazy"
    />

    // <figure
    //   className={classNames(
    //     'border-4 border-white rounded-full overflow-hidden w-12 h-12 shadow-lg',
    //     className
    //   )}
    // >
    //   <Image
    //     className="w-full h-auto"
    //     src={imageUrl || '/images/placeholder.jpg'}
    //     alt=""
    //   />
    // </figure>
  );
};

export default Avatar;
