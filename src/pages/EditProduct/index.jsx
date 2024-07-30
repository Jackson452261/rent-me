import { Form, Select,  Button, Input, Upload } from "antd"
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
const { Option } = Select;
import { setProducts, getProducts } from "@/utils/localStorage";
import { message } from "antd";
import { useTranslation } from "react-i18next"
import { useNavigate, useParams } from "react-router-dom";
import { getToken } from "@/utils/localStorage";
 
const EditProduct = ( ) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const product = getProducts().find(product => product.id == id)
  const [form] = Form.useForm()
  const [type, setType] = useState(product.type || '')
  const [location, setLocation] = useState(product.location || '')
  const [description, setDescription] = useState(product.description || '')
  const [price, setPrice] = useState(product.price || '')
  const [contactNumber, setContactNumber] = useState(product.contactNumber || '')
  const [contactEmail, setContactEmail] = useState(product.contactEmail || '')
  const [uploadImage, setUploadImages] = useState([])
  const [fileList, setFilList] = useState({})
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
    const token = getToken()
    if(!token){
        message.warning(t("message.please_login"))
        navigate("/login")
    }    
    }
   const Submit = () => {
    if (!type || !location || !price || !contactNumber || !contactEmail.trim()) {
      message.warning(t('message.necessary_information'));
      return
    }
    else{
      const form = {
        id: Number(id),
        type,
        location,
        description,
        price,
        contactNumber,
        contactEmail,
        image: uploadImage[0],
        images: uploadImage
      }
      const newProducts = getProducts().map(product => {
        if (product.id == id) {
          return form
        }
        return product
      })
      setProducts(newProducts)
      message.success(t("message.Edit_success"))
      navigate("/")
   }
  }

   const rules = {
    type: [{required: true,message: t('message.BuildinType_message'),}],
    location: [{required: true,message: t('message.location_message'),}],
    price: [{required: true,message: t('message.price_message'),}],
    phone: [{required: true,message: t('message.phone_message'),}],
    email: [{required: true,message: t('message.email_message'),}],
   }
  const normFile = (e) => {
      const fileList = e.fileList
      const selectImages = fileList.map(file => URL.createObjectURL(file.originFileObj))
      setUploadImages(selectImages)
  };
  const handleUpload = (e) => {
    console.log(e);
    setFilList(e.fileList)
  }

  const handleDelete = () =>{
    const deleteProduct = getProducts().filter(product => product.id != id);
    setProducts(deleteProduct);
    message.success(t('message.delete_success'));
    navigate('/');
  }
  useEffect(() =>{
    checkToken()
  },[])
  return (
    <div className="bg-indigo-50 py-8">
    <h2 className="text-3xl text-center font-semibold mb-6">{t("EditProduct.Edit_Room")}</h2>
  <Form
    form={form}
    className='py-20 flex justify-center flex-col mx-auto'
    style={{  maxWidth: "700px" }}
    fields={[
      {
        name: ['type'],
        value: type
      },
      {
        name: ['location'],
        value: location
      },
      {
        name: ['description'],
        value: description
      },
      {
        name: ['price'],
        value: price
      },
      {
        name: ['contactNumber'],
        value: contactNumber
      },
      {
        name: ['contactEmail'],
        value: contactEmail
      },
    ]}
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
   value={product.type}>
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
  value={product.location}>
    {cities.map(city => (
      <Option key={city.value} value={city.value} style={{ fontSize: "16px"}}>{city.name}</Option>))}
  </Select>
  </Form.Item>
    <Form.Item name={'description'}
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
   <Form.Item
    name="image"
    label={t("addProduct.uploadImage")}
    valuePropName="fileList"
    getValueFromEvent={normFile}
    labelCol={{span: 24,}}
    wrapperCol={{span: 24,}}>
    <Upload
      multiple
      fileList={fileList}
      onChange={handleUpload}
      beforeUpload={() => false}
      name="image"
      listType="picture-circle">
    <button
    style={{ order: 0, background: 'none',}}
    type="button">
    <PlusOutlined/>
    </button>
    </Upload>
  </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16,}}>
      <div className="flex justify-between"> 
      <Button type="primary" htmlType="submit"
      className="text-4xl py-10 px-6 border rounded-lg bg-blue-500 mt-2   "
      onClick={Submit}>
      {t('EditProduct.submit')}
      </Button>
      <Button type="primary" htmlType="submit"
      className="text-4xl py-10 px-6 border rounded-mid bg-blue-500 mt-2 ml-4"
      onClick={handleDelete}>
     {t('EditProduct.submit_delete')}
      </Button>
      </div>
    </Form.Item>
  </Form>
    </div>
  )
}
export default EditProduct
