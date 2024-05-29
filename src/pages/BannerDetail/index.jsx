 import "./BannerDetail.scss"
import { useParams } from "react-router-dom";
import BannerProducts from "@/mock/Home/banner.json"
import { Button, Image } from "antd";
import { EnvironmentOutlined, HeartOutlined } from '@ant-design/icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from "react-i18next"
 
 
const BannerDetail = () => {

 
  const { t } = useTranslation()
  const { id } = useParams();
  const bannerId = parseInt(id);
  const banner = BannerProducts.find(banner => banner.id === bannerId)
  if(!banner){
    return <div className="text-8xl flex justify-center items-center mt-32">找不到產品資料</div>
  }

  return (
    <>
       <div className="details-container">
          <div className="ImageContainer"> 
        <div className="bigImage"> 
        <Image className="FirstImage"  width="750px" src={banner.detailImages[0]}></Image>
        </div>
        <div className="smallImages">
        <Image height="300px"  width="400px" src={banner.detailImages[1]}></Image>
        <Image height="250px"  width="400px" src={banner.detailImages[2]}></Image>
        <Image height="250px"  width="400px" src={banner.detailImages[3]}></Image> 
        </div>
        </div>
        <div className="info">  
            <div className="location">
            <EnvironmentOutlined className="text-4xl"/>
            <h2 className="text-blue-600 text-8xl">{banner.location}</h2>   
        </div>
            <h2 className="price">{t("details_page.detail_type")}{banner.type}</h2>  
            <h2 className="price">{t("details_page.detail_price")}{banner.price}{t("details_page.detail_month")}</h2>  
            <div className="bottom">
            <p className="text-4xl">{t("details_page.detail_description")}{banner.description}</p>
            <Button className="flex items-center justify-center py-6 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"> 
            <HeartOutlined className='text-4xl ml-2' /> 
            <p className="text-2xl ml-4">{t("details_page.Favorite_Button")}</p>
            </Button>
           </div>   
        </div>  
       </div>      
      <p className="relative top-40  text-center text-4xl font-bold mt-20">{t("details_page.detail_location")}</p>
       <MapContainer center={[banner.latitude, banner.longitude]} zoom={15} className="w-5/6 h-96 mt-48 ml-48">
       <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
       <Marker className="text-4xl" position={[banner.latitude, banner.longitude]}>
         <Popup className="text-4xl">
         {t("details_page.popup_location")}{banner.location}
         </Popup>
       </Marker>
     </MapContainer>
     </>
  );
};

export default BannerDetail;
