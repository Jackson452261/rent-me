 import RNavbar from '../RNavbar/index'

const RLayout = ( { children, logout, isLogin }) => {
  return (
     <div className="">
     <RNavbar logout={logout} isLogin={isLogin}/>
     {children}
     </div>
  )
}

export default RLayout