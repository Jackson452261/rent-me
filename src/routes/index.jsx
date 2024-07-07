import { useRoutes } from "react-router-dom";
import {Home, ProductDetail,BannerDetail, NotFound, AddProduct, Login, Favorite, EditProduct} from "@/pages"
 
 
export const SetRoutes = () =>
    
    {
     return useRoutes([
        {
        path: '/',
        element: <Home />
     },
     {
        path: '/productDetail/:id',
        element: <ProductDetail />
     },
     {
      path: '/bannerDetail/:id',
      element: <BannerDetail />
   },
     {
      path: '/addProduct',
      element: <AddProduct />
   },
   {
      path: '/editProduct/:id',
      element: <EditProduct />
   },
   {
      path: '/login',
      element: <Login />
   },
   {
      path: '/favorite',
      element: <Favorite />
   },
   {
        path: '/*',
        element: <NotFound/>
   }
    ])
}