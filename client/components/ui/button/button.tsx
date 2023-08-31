import classNames from 'classnames';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { IconType } from 'react-icons';

type Size = 'sm' | 'md' | 'lg';

type Variant = 'white' | 'green' | 'purple' | 'lightPurple' | 'red' | 'flat';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  expanded?: boolean;
  label?: string;
  className?: string;
  size?: Size;
  isHoverable?: boolean;
  variant?: Variant;
  outlined?: boolean;
  iconRight?: IconType;
  iconLeft?: IconType;
};

const SIZE = {
  sm: 'p-2 text-base xs:px-4',
  md: 'py-2 px-5 text-sm xs:px-8',
  lg: 'py-3 px-7 text-lg xs:px-8',
};

const Button = ({
  children,
  className,
  label,
  size = 'md',
  isHoverable = true,
  variant = 'purple',
  iconLeft: IconLeft,
  iconRight: IconRight,
  expanded = false,
  ...rest
}: PropsWithChildren<Props>) => {
  const sizeClass = SIZE[size];
  const variants: { [key: string]: string } = {
    flat: ``,
    white: `text-black bg-white`,
    green: `text-white bg-green-600 ${isHoverable && 'hover:bg-green-700'}`,
    purple: `text-white bg-indigo-600 ${isHoverable && 'hover:bg-indigo-700'}`,
    red: `text-white bg-red-600 ${isHoverable && 'hover:bg-red-700'}`,
    lightPurple: `text-indigo-700 bg-indigo-100 ${
      isHoverable && 'hover:bg-indigo-200'
    }`,
  };
  return (
    <button
      {...rest}
      className={classNames(
        'flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed rounded-full font-medium',
        sizeClass,
        variants[variant],
        expanded && 'w-full justify-center',
        className
      )}
    >
      {IconLeft && <IconLeft />}
      <span> {label || children}</span>
      {IconRight && <IconRight />}
    </button>
  );
};

export default Button;
