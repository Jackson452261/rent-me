import { useEffect, useState } from "react"
import Banner from '@/components/Banner/index'
import RoomCard from "@/components/RoomCard"
import { homeApi } from "@/api/module/home"
 
 const Home = () => {  
  const [bannerData, setBannerData] = useState([])
  const [products, setProduct] = useState([])

 const getBannerData = async() => {
  const data = await homeApi.getBanner()
  setBannerData(data)
 }
 const getProductsData = async() => {
   const data = await homeApi.getProducts()
   setProduct(data)
 }
 useEffect(() => {
   getBannerData()
   getProductsData()
 },[])
   return (
     <div>
       <Banner bannerDatas={bannerData}></Banner>
       <div className="container mx-auto mt-4"> 
       <div className='flex justify-between flex-wrap'>
     {products.map(product => (
      <div key={product.id} className="mb-4 w-2/6 px-2">
      <RoomCard key={product.id} product={product} /> 
      </div>
     ))}
     </div>
     </div>
     </div>
   )
 }
 export default Home
