 import PropTypes from 'prop-types';
import { Button } from 'antd';

const RButton = ({ type, size, className, style, onClick, shape, icon }) => {
  return (
    <Button
      type={type}
      style={style}
      className={className}
      onClick={onClick}
      size={size}
      shape={shape}
      icon={icon}>
    </Button>
  );
};
RButton.propTypes = {
  type: PropTypes.oneOf(['default', 'primary', 'ghost', 'dashed', 'link', 'text']),
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  shape: PropTypes.oneOf(['circle', 'round']),
  icon: PropTypes.node,
};

export default RButton;
