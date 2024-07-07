import { TbError404 } from 'react-icons/tb';
import { useTranslation } from "react-i18next"
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
 
const NotFound = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center items-center h-full relative top-40 text-9xl mb-40">
      <TbError404 className="mb-4"/>
      <h2>{t('NotFoundPage')}</h2>
      <Button type="link" onClick={() => navigate('/')} className="bg-sky-500 hover:bg-blue-700 text-white  border border-blue-700 rounded-lg text-2xl font-bold py-8 px-6 mt-4 flex items-center justify-center">
    {t('backtoHome')}
</Button>
     </div>
  );
}

export default NotFound;
