import PropTypes from 'prop-types';
import { Input } from 'antd';

const RInput = ({ placeholder, className, prefix, suffix }) => {
  return (
    <Input
      placeholder={placeholder}
      className={className}
      prefix={prefix}
      suffix={suffix}
    />
  );
};

RInput.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
};

export default RInput;
