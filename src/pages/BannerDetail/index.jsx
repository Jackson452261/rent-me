import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { homeApi } from "@/api/module/home";
import { Image, List } from "antd";
import { IoBedOutline } from "react-icons/io5";
import { BsFire } from "react-icons/bs";
import { FaWifi } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { LuSofa,LuRefrigerator  } from "react-icons/lu";
import { PiTelevision } from "react-icons/pi";
import { MdOutlineElevator } from "react-icons/md";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { useTranslation } from "react-i18next"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const BannerDetail = () => {
  const { t } = useTranslation()
  const [bannerdata, setBannerData] = useState([])
  const getBannerData = async() => {
    const data = await homeApi.getBanner()
    setBannerData(data)
   }
   useEffect(() => {
    getBannerData()
   },[])
  const { id } = useParams();
  const bannerId = parseInt(id);
  const banner = bannerdata.find(banner => banner.id === bannerId)
  if(!banner){
    return <div>
    </div>
  }

  const detailIcon = [
    {
     id: 1,
     icon: <IoBedOutline className="text-4xl"/>
    },
    {
     id: 2,
     icon: <FaWifi className="text-4xl"/>
    },
    {
     id: 3,
     icon: < MdOutlineElevator className="text-4xl"/>
    },
    {
     id: 4,
     icon: <PiTelevision className="text-4xl"/>
    },
    {
     id: 5,
     icon: < LuRefrigerator className="text-4xl"/>
    },
    {
     id: 6,
     icon: <LuSofa className="text-4xl"/>
    },
    {
     id: 7,
     icon: <CgSmartHomeWashMachine className="text-4xl"/>
    },
    {
     id: 8,
     icon: <BsFire className="text-4xl bg-red-600"/>
    }
  ]
  const detailContent = banner.furniture.map((detail, idx) => {
    let productDetail = {}
    detailIcon.forEach((icon, index) => {
      if (index === idx) {
        productDetail = { ...detail, icon: icon.icon}
      }
    })
    return productDetail
  })
 
  return (
  <>
   <div className="flex items-center  gap-96 mt-11"> 
   <h2 className="text-4xl text-center font-bold ml-60">{banner.location}</h2> 
   </div>
  <div className="container mx-auto flex gap-2.5 pt-12">
 <div className="w-2/6">
  <Image height={"100%"} className="object-cover" src={banner.image}/>
   <div className="mt-8"> 
  <h2 className="text-xl">{banner.title}</h2>
  <span className="text-zinc-500">{banner.type}</span>
  <h2 className="bg-red-300 w-max p-4 text-2xl border rounded rounded-3xl">{t("details_page.detail_price")}{banner.price}{t("details_page.detail_month")}</h2>  
  <div className="flex items-center pb-16">
      <FaRegHeart className="text-4xl cursor-pointer" />
      <h2 className="ml-2 text-4xl">{t('favorite')}</h2>
    </div>
  </div>
</div>
<div className="w-2/6"> 
  <Image src={banner.images[0]}/>
  <Image src={banner.images[1]}/>
</div>
<div className="w-2/6"> 
  <Image src={banner.images[2]}/>
  <Image src={banner.images[3]}/>
</div>
 </div>
  <div className="pt-40  container mx-auto overflow-hidden"> 
  <h2 className="text-4xl pt-16">{t('furniture')}</h2>
 <List  className="pt-4"  
    grid={{ column:4, //設定每行4列
    gutter: 10,
    xs: 1, // 小於576px
    sm: 2, // 576px以上
    md: 2, // 768px以上
    lg: 3, // 992px以上
    xl: 4, // 1200px以上
    }}
  itemLayout="horizontal"
  dataSource={detailContent}
  renderItem={(item, index) => (
  <List.Item >
  <List.Item.Meta    
  avatar={item.icon} 
  title={<h2 className="text-4xl bg-slate-200 w-max"> {item.title}</h2>}/>
</List.Item>
      )}/>
    <p className="text-4xl">{t("details_page.detail_description")}{banner.description}</p>
  </div>
  <MapContainer center={[banner.latitude, banner.longitude]} zoom={15} 
  className="max-w-7xl   h-[600px] mt-12 mx-auto rounded-lg shadow-lg">
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
