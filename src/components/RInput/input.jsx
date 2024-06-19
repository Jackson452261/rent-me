import { Input } from 'antd';

const RInput = ({ placeholder, className, prefix, suffix, onChange }) => {
  return (
    <Input
      placeholder={placeholder}
      className={className}
      prefix={prefix}
      suffix={suffix}
      onChange={onChange}
    />
  );
};

export default RInput;
