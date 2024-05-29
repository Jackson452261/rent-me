import { useEffect, useState } from "react"
import Banner from '@/components/Banner/index'
import RoomCard from "@/components/RoomCard"
import { homeApi } from "@/api/module/home"
 import {setProducts, getProducts} from "@/utils/localStorage"
 import productsData from "@/mock/Home/products.json"
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
 
  setProducts(productsData)
  console.log(getProducts())
   getBannerData()
   getProductsData()
    

 },[])
   return (
     <div>
       <Banner bannerDatas={bannerData}></Banner>
       <div className='flex justify-around px-8'>
     {products.map(product => (
      <RoomCard key={product.id} product={product}></RoomCard>
     ))}
     </div>
     </div>
   )
 }

 export default Home
