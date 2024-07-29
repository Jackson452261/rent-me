import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import RCard from '@/components/RCard';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from "react-i18next"
 
const CardCarousel = ({ products, favorites, handleFavoriteClick, navigate }) => {
  const { t } = useTranslation()
  return (
<div className="relative">
  <h2 className='text-center text-4xl'>{t("Allrooms")}</h2>
    <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={10}
    slidesPerView={5}
    pagination={{ clickable: true }}
    navigation={{
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
    }}>
    {products.map(product => (
    <SwiperSlide key={product.id}>
        <RCard
        style={{ width: "100%", margin: "0 10px" }}
        product={product}
        favorites={favorites}
        onFavoriteClick={() => handleFavoriteClick(product.id)}
        onEdit={() => navigate(`/editProduct/${product.id}`)}
        hoverable/>
    </SwiperSlide>
    ))}
    </Swiper>
    <div className="swiper-button-prev text-gray-600 text-4xl absolute transform -translate-x-10"></div>
    <div className="swiper-button-next text-gray-600 text-4xl absolute transform translate-x-10"></div>
</div>
  );
};

export default CardCarousel;
