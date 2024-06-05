import PropTypes from 'prop-types';
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
RInput.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  onChange: PropTypes.func.isRequired,
};

export default RInput;
