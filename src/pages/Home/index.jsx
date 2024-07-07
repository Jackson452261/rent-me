import { useEffect, useState } from "react";
import Banner from '@/components/Banner/index';
import RCard from "@/components/RCard";
import RInput from "@/components/RInput";
import { message } from 'antd';
import { homeApi } from "@/api/module/home";
import { getProducts, setProducts } from "@/utils/localStorage";
import favoriteProduct from '@/store/favoriteProduct';
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom";
import CardCarousel from "../../components/CardCarousel";
 
const Home = () => {
  const [bannerData, setBannerData] = useState([]);
  const [products, setProduct] = useState(getProducts());
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(getProducts());
  const { favorites } = favoriteProduct();
  const navigate = useNavigate()
  const { t } = useTranslation()
  const getBannerData = async () => {
  const data = await homeApi.getBanner();
  setBannerData(data);
  };

  const getProductsData = async () => {
    const data = await homeApi.getProducts();
    setProduct(data);
    setProducts(data);  
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
  const inputValue = searchValue.trim()
  if(!inputValue){
    setFilteredProducts(products)
      message.warning(t('message.input_searchValue'))
      return
  }
    const filtered = products.filter(product =>
        product.location.includes(inputValue)
  );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    getBannerData()
    if(!products.length){
      getProductsData()
    }
  },[]);
  return (
    <div>
      <Banner bannerDatas={bannerData} />
      <div className='bg-slate-100 flex items-center justify-between h-20 px-10'>
        <RInput searchValue={searchValue} handleSearchChange={handleSearchChange} handleSearchClick={handleSearchClick}/>
      </div>
      <div className="container mx-auto mt-4">
        <div className='flex justify-between flex-wrap'>
      {filteredProducts.map(product => (
      <div key={product.id} className="mb-4 w-1/4 px-2">
        <RCard
        key={product.id}
        product={product}
        favorites={favorites}
        onFavoriteClick={() => handleFavoriteClick(product.id)}
        onEdit={() => navigate(`/editProduct/${product.id}`)}
        hoverable/>    
   </div>
      ))}
        </div>
        <CardCarousel 
          products={filteredProducts} 
          favorites={favorites} 
          onFavoriteClick={() => handleFavoriteClick(product.id)}
          navigate={navigate} 
        />
      </div>
    </div>
  );
};

export default Home;
