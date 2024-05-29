import { BrowserRouter } from "react-router-dom"
import { SetRoutes } from "@/routes"
import RLayout from "@/components/RLayout"
import { useTranslation } from "react-i18next";
import { removeToken } from "@/utils/localStorage";
import {  message } from 'antd';
import { useUserStore } from "@/store/user";
 
 const App = () => {
  const { t } = useTranslation()
  const { isLogin, setIsLogin } = useUserStore()
  const logout =  async() => {
  removeToken()
  setIsLogin(false)
  message.success(t("message.logout_success"))
  } 
   return (
      <BrowserRouter>
      <RLayout  logout={logout} isLogin={isLogin}> 
      <SetRoutes />
      </RLayout>
      </BrowserRouter>
   )
 }
 
 export default App
