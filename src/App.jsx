import { BrowserRouter } from "react-router-dom"
import { SetRoutes } from "@/routes"
import RLayout from "@/components/RLayout"
import { useTranslation } from "react-i18next";
import { removeToken } from "@/utils/localStorage";
import {  message } from 'antd';
import { useUserStore } from "@/store/user";
import { useState } from "react";

const App = () => {
   const { t } = useTranslation()
   const { isLogin, setIsLogin } = useUserStore()
   const [searchValue, setSearchValue] = useState('')
   const logout =  async() => {
   removeToken()
   setIsLogin(false)
   message.success(t("message.logout_success"))
   } 
    return (
       <BrowserRouter>
       <RLayout  logout={logout} isLogin={isLogin} searchValue={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}> 
       <SetRoutes />
       </RLayout>
       </BrowserRouter>
    )
  }
  
  export default App
 