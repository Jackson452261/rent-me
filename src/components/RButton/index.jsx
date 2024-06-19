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
 
export default RButton;
