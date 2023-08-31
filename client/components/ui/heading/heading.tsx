import classNames from 'classnames';

type Props = {
  className?: string;
  title?: string;
  subTitle?: string;
  description?: string;
};

const Heading = ({ title, subTitle, description, className }: Props) => {
  return (
    <div className={classNames('py-8 flex', className)}>
      <div className="max-w-xl">
        {title && <h5 className="text-slate-500 mb-1">{`- ${title}`}</h5>}
        <h2 className="text-3xl font-bold">{subTitle}</h2>
        {description && <p className="text-slate-500 mb">{description}</p>}
      </div>
    </div>
  );
};

export default Heading;
