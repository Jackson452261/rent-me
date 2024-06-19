 import { Dropdown } from 'antd';
 
 const RDropdown = ({ children, items }) => (
  <Dropdown
    trigger={['click']}
    menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>{children}</a>
  </Dropdown>
);
 
export default  RDropdown