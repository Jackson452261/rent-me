import { Form, Select,  Button, Input, Upload } from "antd"
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
const { Option } = Select;
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
  const [uploadImage, setUploadImages] = useState([])
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
     }
     useEffect(() =>{
       checkToken()
     },[])
   
   const Submit = () => {
    if (!type || !location || !price || !contactNumber || !contactEmail.trim()) {
      message.warning(t('message.necessary_information'));
      return
    }
    else{
    const form = {
      id: Math.floor(Math.random() * 1000),
      type,
      location,
      description,
      price,
      contactNumber,
      contactEmail,
      images: uploadImage
    }
    setProducts([...getProducts(), form])
    message.success(t("message.submit_success"))
    navigate("/")
   }
  }
  
  const handleChange = (data) => {
    const fileList = data.fileList.map(file => ({...file,
      url: URL.createObjectURL(file.originFileObj),
    }));
    setUploadImages(fileList.map(file => file.url));
  };
   const rules = {
    type: [{required: true,message: t('message.BuildinType_message'),}],
    location: [{required: true,message: t('message.location_message'),}],
    price: [{required: true,message: t('message.price_message'),}],
    phone: [{required: true,message: t('message.phone_message'),}],
    email: [{required: true,message: t('message.email_message'),}],
    image: [{required: true,message: t('message.upload_image'),} ]
   } 

   const normFile = (e) => {
      const fileList = e.fileList
      const selectImages = fileList.map(file => URL.createObjectURL(file.originFileObj))
      setUploadImages(selectImages)
  };
  return (
    <div className="bg-indigo-50 py-8">
    <h2 className="text-3xl text-center font-semibold mb-6">{t("addProduct.addRoom")}</h2>
  <Form
    form={form}
    className='py-20 flex justify-center flex-col mx-auto'
    style={{  maxWidth: "700px" }}
    >
  <Form.Item  
    label={t('addProduct.RoomType')} 
    className="text-lg"
    name="type"
    rules={rules.type}
    labelCol={{span: 24,}}
    wrapperCol={{span: 24,}}>
 <Select
   placeholder={t("addProduct.selectType_placeholder")}
   onChange={(value) => setType(value)}
   allowClear
   value={type}>
  {houseType.map(type => (
  <Option style={{ fontSize: "16px"}} key={type.value} value={type.value} >{type.name}</Option>
  ))}
</Select>
</Form.Item>
<Form.Item label={t('addProduct.location')}
  name="location"
  rules={rules.location}
  labelCol={{span: 24,}}
  wrapperCol={{span: 24,}}>
<Select
  placeholder={t('message.location_message')}
  onChange={(value) => setLocation(value)}
  allowClear
  value={location}>
 {cities.map(city => (
<Option key={city.value} value={city.value} style={{ fontSize: "16px"}}>{city.name}</Option>))}
</Select>
  </Form.Item>
    <Form.Item name={['description', 'introduction']}
     label={t('addProduct.Description')}
     labelCol={{span: 24,}}
     wrapperCol={{span: 24,}}>
  <Input.TextArea value={description} 
    placeholder={t('addProduct.descripiton_input')}
    onChange={(e) => setDescription(e.target.value)}/>
    </Form.Item>
    <Form.Item name="price" rules={rules.price}
     labelCol={{span: 24,}}
     wrapperCol={{span: 24,}}
    label={t('addProduct.price')}>
   <Input value={price} onChange={(e) => setPrice(e.target.value)} 
   placeholder={t('addProduct.price_input')}/>
   </Form.Item>
   <Form.Item name="contactNumber" label={t('addProduct.phone')}
     rules={rules.phone}
     labelCol={{span: 24,}}
     wrapperCol={{span: 24,}}>
  <Input value={contactNumber}   
  placeholder={t('addProduct.phone_input')}
  onChange={(e) => setContactNumber(e.target.value)}/>
   </Form.Item>
   <Form.Item name="contactEmail" label={t('addProduct.email')}
    rules={rules.email}
    labelCol={{span: 24,}}
     wrapperCol={{span: 24,}}>
  <Input value={contactEmail} 
  placeholder={t('addProduct.email_input')}
  onChange={(e) => setContactEmail(e.target.value)} 
   />
   </Form.Item>
   <Form.Item name="image"label={t("addProduct.uploadImage")} valuePropName="fileList" 
   getValueFromEvent={normFile}
    labelCol={{span: 24,}}
    wrapperCol={{span: 24,}}
    rules={rules.image}>
    <Upload  listType="picture-circle"
    onChange={handleChange}>
    <button
    style={{ order: 0, background: 'none',}}
    type="button">
    <PlusOutlined/>
    </button>
    </Upload>
  </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16,}}>
      <Button type="primary" htmlType="submit"
      className="text-4xl py-10 px-6 border rounded-mid bg-blue-500 mt-2 ml-72"
      onClick={Submit}>
      {t('addProduct.submit')}
      </Button> 
    </Form.Item> 
  </Form>
    </div>
  )
}
export default AddProduct
