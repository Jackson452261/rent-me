import { Form, Select,  Button, Input } from "antd"
import { useEffect, useState } from "react";
const { Option } = Select
import { setProducts, getProducts } from "@/utils/localStorage";
import { message } from "antd";
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom";
import { getToken } from "@/utils/localStorage";
 
const AddProduct = ( ) => {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [type, setType] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const { t } = useTranslation()
 
   const houseType = [
    {
      value: "住宅大樓",
      name: "住宅大樓"
    },
    {
      value: "電梯大樓",
      name: "電梯大樓"
    },
    {
      value: "別墅",
      name: "別墅"
    },
    {
      value: "透天厝",
      name: "透天厝"
    },
   ]

   const cities = [
    {
      value: "台中",
      name: "台中"
    },
    {
      value: "台北",
      name: "台北"
    },
    {
      value: "高雄",
      name: "高雄"
    },
    {
      value: "台南",
      name: "台南"
    },
   ]
     const checkToken = () => {
      const token =getToken()
      if(!token){
         message.warning(t("message.please_login"))
         navigate("/login")
      }
       else{
        message.success(t("message.login_success"))
        navigate("/addProduct")
       }
     }
     useEffect(() =>{
       checkToken()
     },[])
  const addProduct = () => {
    const product = {
      id: Math.ceil(Math.random() * 1000),
      location: location,
      image: '',
      type: type,
      description: description,
      price: price + "元/月",
      phone:  contactNumber,
      Email: contactEmail
    }
    setProducts([...getProducts(), product])
  }
   const ClickSubmit = () => {
    message.success(t("message.submit_success"))
   }
   const deleteSubmit = () =>{
     
   }
  return (
    <div className="bg-indigo-50 py-8">
    <h2 className="text-3xl text-center font-semibold mb-6">{t("addProduct.addRoom")}</h2>
    <Form
    form={form}
    className=' bg-slate-300 py-20 flex justify-center flex-col'
    labelCol={{span: 8,}}
    wrapperCol={{span: 16,}}
      onFinish={addProduct}>
    <Form.Item  
    label={<span className="text-2xl">{t('addProduct.RoomType')}</span>} 
    className="text-lg"
      name="type"
      rules={[
        {
          required: true,
          message: t('message.BuildinType_message'),
        },
      ]}>
      <Select
          placeholder={t("addProduct.selectType_placeholder")}
          onChange={(value) => setType(value)}
          allowClear
          value={type}
          style={{ width: '550px', height: '60px'}}>
          {houseType.map(type => (
            <option style={{ fontSize: "32px"}} key={type.value} value={type.value}>{type.name}
            </option>
         ) )}
        </Select>
    </Form.Item>
    <Form.Item label={<span className="text-2xl">{t('addProduct.location')}</span>}
       name="location"
       rules={[
        {
          required: true,
          message: t('message.location_message'),
        },
      ]}>
      <Select
          placeholder={t('message.location_message')}
          onChange={(value) => setLocation(value)}
          allowClear
          value={location}
            style={{ width: '550px', height: '60px'}}>
          {cities.map(city => (
            <option key={city.value} value={city.value} style={{ fontSize: "32px"}}>{city.name}</option>
         ) )}
        </Select>
    </Form.Item>
    <Form.Item name={['user', 'introduction']} label={<span className="text-2xl">{t('addProduct.Description')}</span>}>
      <Input.TextArea value={description} 
       placeholder={t('addProduct.descripiton_input')}
      onChange={(e) => setDescription(e.target.value)}
      style={{ fontSize: "32px", width:"800px"}}/>
    </Form.Item>
    <Form.Item name="price" label={<span className="text-2xl">{t('addProduct.price')}</span>}>
   <Input value={price} onChange={(e) => setPrice(e.target.value)} 
   placeholder={t('addProduct.price_input')}
   style={{  width:"550px" }}/>
   </Form.Item>
   <Form.Item name="contactPhone" label={<span className="text-2xl">{t('addProduct.phone')}</span>}
     rules={[
      {
        required: true,
        message: t('message.phone_message'),
      }
    ]}>
  <Input value={contactNumber}  
  placeholder={t('addProduct.phone_input')}
  onChange={(e) => setContactNumber(e.target.value)}
    style={{ width:"550px" }}/>
   </Form.Item>
   <Form.Item name="contactEmail" label={<span className="text-2xl">{t('addProduct.email')}</span>}
    rules={[
      {
        required: true,
        message:  t('message.email_message'),
      }
    ]}>
  <Input value={contactEmail} 
  placeholder={t('addProduct.email_input')}
  onChange={(e) => setContactEmail(e.target.value)} 
   style={{ width:"550px" }}/>
   </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16,}}>
      <Button type="primary" htmlType="submit"
      className="text-4xl py-10 px-6 border rounded-mid bg-blue-500 mt-2 ml-72"
      onClick={ClickSubmit}>
      {t('addProduct.submit')}
      </Button>
      <Button type="primary"  
      className="text-4xl py-10 px-6 border rounded-mid bg-blue-500 mt-2 ml-72"
      onClick={deleteSubmit}>
      {t('addProduct.delete')}
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}
export default AddProduct

