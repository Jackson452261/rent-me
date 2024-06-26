import { Input } from 'antd';
import {   SearchOutlined  } from '@ant-design/icons';
import { useTranslation } from "react-i18next"
const RInput = ({ searchValue, handleSearchChange, handleSearchClick }) => {
  const { t } = useTranslation()
  return (
    <div className='mx-auto'>
    <Input
    className='w-96 h-16 border-gray-900 rounded-[32px] pl-5 relative'
    suffix={<SearchOutlined className="text-2xl" onClick={handleSearchClick} />}
    placeholder={t('input_placeholder')}
    value={searchValue}
    onChange={handleSearchChange}
  />
  </div>
  );
};

export default RInput;
