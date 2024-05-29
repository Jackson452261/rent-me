import { Button, Checkbox, Form, Image, Input } from 'antd';
import { useTranslation } from "react-i18next"
import { authApi } from '@/api/module/auth';
import { setToken, setUsername, getUsername,  removeUsername, setRememberMe, getRememberMe,
removeRememberMe,
getToken} from '@/utils/localStorage';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { useUserStore } from '@/store/user'; 
import { useEffect} from 'react';

const Login = () => {
 
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { setIsLogin }  = useUserStore()
    const [form] = Form.useForm();
   
    const submit =  async(info) => {
      try{
        const { username, password, remember } = info
       const { token } = await authApi.login({ username, password})
       //登入
        // username: 'kminchelle', password: '0lelplR'
       if(token){
       setToken(token)
       setIsLogin(true) 
       message.success(t("message.login_success"))
       navigate("/")
       }
       //記住我
       if(remember){
        setRememberMe(remember)
        setUsername(username)
       }
       else{
        removeRememberMe()
        removeUsername()
       }
}
catch(err){
  if(err){
     message.error(t("message.login_error"))
  }
}}
    useEffect(() => {
       if(getRememberMe()){
        form.setFieldsValue({
          username: getUsername(),
          remember: getRememberMe()
       })
       }
       if(getToken()){
        navigate('/')
       }
    },[])
 
  return (
    <div className="flex mt-16  border-2 border-gray-400">
      <div className='w-1/2 border'>
   <Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          alt="phone image"
          preview={false}
          height={500}>
    </Image>
        </div>
        <div className='w-1/2'>
   <Form
    form={form}
    className='pt-40 h-[300px] px-20'
    labelCol={{span: 8,}}
    wrapperCol={{span: 16,}}
    
    onFinish={submit}>
    <Form.Item label={t('login_username')}
       name="username"
      rules={[
        {
          required: true,
          message: t('message.login_username'),
        },
      ]}>
      <Input placeholder={t('input_username')}/>
    </Form.Item>
    <Form.Item
      label={t('login_password')}
      name="password"
      rules={[
        {
          required: true,
          message: t('message.login_password'),
        },]}>
      <Input.Password placeholder={t('input_password')}/>
    </Form.Item>
    <Form.Item
      name="remember"
      wrapperCol={{ offset: 8,span: 16,}}>
      <Checkbox >{t('login_remember')}</Checkbox>
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16,}}>
      <Button type="primary" htmlType="submit">
        {t('login_submit')}
      </Button>
    </Form.Item>
  </Form>
  </div>
   </div>
  )
}
export default Login