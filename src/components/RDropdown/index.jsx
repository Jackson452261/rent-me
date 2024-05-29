import PropTypes from 'prop-types';
import { Dropdown } from 'antd';

const RDropdown = ({ children, items }) => (
  <Dropdown
    trigger={['click']}
    menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>{children}</a>
  </Dropdown>
);
RDropdown.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
  };
export default  RDropdown