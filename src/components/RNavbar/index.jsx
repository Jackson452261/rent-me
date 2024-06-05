import { HeatMapOutlined,   SearchOutlined, GlobalOutlined, DownOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import RButton from '@/components/RButton';
import {  useNavigate } from 'react-router-dom';
import RInput from '@/components/RInput/input';
import RDropdown from '@/components/RDropdown';
import i18n from '@/i18n'
import { Button } from 'antd';
import { useTranslation } from "react-i18next";

const RNavbar = ( { logout, isLogin }) => {
  const { t } = useTranslation()
   const navigate = useNavigate()
  const changeEng = () => {
    i18n.changeLanguage("en_US");
  }
  const changeCN = () => {
    i18n.changeLanguage("zh_TW");
  }
const translateItems = [
  {
    key: 'en_US',
    label: <button  onClick={changeEng}>{t('change_English')}</button>
  },
  {
    key: 'zh_TW',
    label: <button  onClick={changeCN}>{t('change_Chinese')}</button>
  }
]
const userItems = [
    {
      key: 'login',
      label: isLogin ? (
        <Button type='link' onClick={logout}>{t("logout")}</Button>)
        :(
         <Button type='link' onClick={() => navigate('/login')}>{t("login")}</Button> 
        )
    },
  {
    key: 'addProduct',
    label: <Button  type='link' onClick={() => navigate('/addproduct')}>{t("addProducts")}</Button>
  },
  {
    key: 'favorite',
    label:  <Button type='link' onClick={() => navigate('/favorite')}>{t("favorite")}</Button>
  }
] 
  return (
    <> 
    <div className='bg-slate-100 flex items-center justify-between h-20 px-10'>
    <RButton className='flex items-center' type='link' onClick={() => navigate('/')} icon={<HeatMapOutlined style={{ fontSize: 28 }}/>}>
    </RButton>
    <RInput
        className='w-96 rounded-[32px] pl-5'
        suffix={<RButton shape='circle' size='large' icon={<SearchOutlined />} />}
        placeholder={t('input_placeholder')}/>
    <div className='flex items-center'>
    <RDropdown className='mr-5' items={translateItems}>
      <div className='borderborder-slate-300 rounded-full px-4 py-4'> 
      <GlobalOutlined style={{ fontSize: 20 }}/>
      <DownOutlined />
      </div>
    </RDropdown>
    <RDropdown items={userItems}>
      <div className='border border-slate-300 rounded-full px-8 py-4 ml-4'> 
      <MenuOutlined style={{ fontSize: 20 }}/>
      <UserOutlined style={{ fontSize: 20 }}/>
    </div>
    </RDropdown>
      </div>
   </div>
    </>
  )
}
export default RNavbar