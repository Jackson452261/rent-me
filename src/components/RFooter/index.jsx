import { useTranslation } from "react-i18next"
 
 const RFooter = () => {
  const { t } = useTranslation()
  return (
    <div>
  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 pt-12 container mx-auto">
  <div>
    <h3 className="font-bold">{t('footer.footer_location')}</h3>
  <ul className="mt-4 space-y-4">
    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">{t('footer.footer_taichung')}</a></li>
    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">{t('footer.footer_Taipei')}</a></li>
    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">{t('footer.footer_Tainan')}</a></li>
    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">{t('footer.footer_kaohsiung')}</a></li>
  </ul>
  </div>
  <div>
    <h3 className="font-bold">{t('footer.building_type')}</h3>
  <ul className="mt-4 space-y-4">
    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">{t('footer.elevator_building')}</a></li>
    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">{t('footer.residential_building')}</a></li>
    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">{t('footer.villa')}</a></li>
    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">{t('footer.house')}</a></li>
  </ul>
  </div>
  <div>
  <h3 className="font-bold">{t('footer.about_us')}</h3>
  <ul className="mt-4 space-y-4">
    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">{t('footer.city_introduction')}</a></li>
    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">{t('footer.house_introduction')}</a></li>
    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">{t('footer.favorite_page')}</a></li>
    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">{t('footer.news_page')}</a></li>
  </ul>
</div>
  </div>
  </div>
  )
}
export default RFooter