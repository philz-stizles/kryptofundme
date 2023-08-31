interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  textarea?: boolean;
  error?: string;
  isValid?: boolean;
  isTouched?: boolean;
}

const Input = ({
  label,
  type = 'text',
  placeholder,
  textarea = false,
  isValid = false,
  isTouched = false,
  value,
  ...rest
}: InputProps) => {
  const styles =
    'peer block w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700 dark:text-gray-300';
  const content = textarea ? (
    <textarea className={styles} placeholder={placeholder} rows={4}></textarea>
  ) : (
    <input className={styles} type={type} placeholder={placeholder} {...rest} />
  );
  return (
    <div>
      {label && (
        <label className="mb-2 block text-gray-600 dark:text-gray-300">
          {label}
        </label>
      )}
      {content}
      <span className="mt-1 hidden text-sm text-red-500 peer-invalid:block">
        Helper
      </span>
    </div>
  );
};

export default Input;
