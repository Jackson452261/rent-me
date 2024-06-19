import { useEffect, useState } from "react"
import Banner from '@/components/Banner/index'
import RoomCard from "@/components/RoomCard"
import { homeApi } from "@/api/module/home"
import { getProducts } from "@/utils/localStorage"
import { Image } from "antd"
 
  const Home = () => {  
  const [bannerData, setBannerData] = useState([])
  const [products, setProduct] = useState([])
  const [Newproducts, setNewproducts] = useState([]);

 const getBannerData = async() => {
 const data = await homeApi.getBanner()
 setBannerData(data)
 }
 const getProductsData = async() => {
   const data = await homeApi.getProducts()
   setProduct(data)
 }
 const getNewProducts = () => {
   const newProducts = getProducts()
   setNewproducts(newProducts) 
 }
 useEffect(() => {
   getBannerData()
   getProductsData()
   getNewProducts()
 },[])
   return (
     <div>
       <Banner bannerDatas={bannerData}></Banner>
       <div className="container mx-auto mt-4"> 
       <div className='flex justify-between flex-wrap'>
     {products.map(product => (
      <div key={product.id} className="mb-4 w-1/4 px-2 ">
      <RoomCard key={product.id} product={product} /> 
      </div>
     ))}
     {Newproducts.map(newproduct => (
      <div key={newproduct.id} className="flex flex-col">
         {newproduct.images.map(image => (
      <Image key={image.id} src={image} width="500px"/>
    ))}
        <h2>房屋類型:{newproduct.type}</h2>
        <h2>位置:{newproduct.location}</h2>
        <h2>租金:{newproduct.price}</h2>
        <h2>連絡電話:{newproduct.contactNumber}</h2>
        <h2>信箱:{newproduct.contactEmail}</h2>    
      </div>
     ))}
     </div>
     </div>
     </div>
   )
 }
 export default Home
