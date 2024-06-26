import RFooter from '../RFooter'
import RNavbar from '../RNavbar/index'

const RLayout = ( { children, logout, isLogin }) => {
  return (
     <div>
      <RNavbar logout={logout} isLogin={isLogin}/>
     {children}
     <RFooter />
     </div>
  )
}

export default RLayout