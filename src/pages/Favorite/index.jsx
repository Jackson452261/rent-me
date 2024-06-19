import { List, Image } from 'antd';
import favoriteProduct from '@/store/favoriteProduct';
import {  CloseCircleOutlined  } from '@ant-design/icons';
 
const Favorite = () => {
  const { favorites, removeFavorite} = favoriteProduct();
  
  return (
    <div className="mx-auto container">
      <h2 className='text-2xl'>我的收藏</h2>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={favorites}
        renderItem={item => (
      <List.Item key={item.id}>
        <Image height={300} style={{ objectFit: "cover", width: "500px" }}   src={item.image} />
        <h3 className='text-4xl'>類型:{item.type}</h3>
        <p className='text-xl'>位置:{item.location}</p>
        <p className='text-xl'>租金:{item.price}</p>
        <CloseCircleOutlined 
        className='text-2xl relative left-80 text-red-600 cursor-pointer flex content-center' 
        onClick={() => removeFavorite(item.id)}/>  
        </List.Item>
        )}
      />
    </div>
  );
};

export default Favorite;
