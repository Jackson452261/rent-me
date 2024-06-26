import { Card, Image } from 'antd';
import { Link } from 'react-router-dom';
import { EnvironmentOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { useState } from 'react';
import favoriteProduct from '@/store/favoriteProduct';

const RCard = ({ classNames, styles, product, hoverable, favorites }) => {
  const { addFavorite, removeFavorite } = favoriteProduct();
  const [isFavorite, setIsFavorite] = useState(favorites.some(item => item.id === product.id))
  const handleFavoriteClick = (id) => {
    if (!favorites.length) {
      setIsFavorite(true)
      addFavorite(id)
      return
    }
    if (isFavorite) {
      setIsFavorite(false)
      removeFavorite(id)
    } else {
      setIsFavorite(true)
      addFavorite(id)
    }
  };
  return (
  <Card className={classNames} styles={styles}  hoverable={hoverable}>
  <div key={product.id}>
  <div className='container mx-auto mb-4'>
<Link to={`/productDetail/${product.id}`}>
  <Image height={300} style={{ objectFit:"cover", width:"500px"}}  alt="example" src={product.image} />
</Link>
  <div onClick={() => handleFavoriteClick(product.id)}>
    {isFavorite ? <HeartFilled className='text-3xl text-red-600' /> : <HeartOutlined className='text-3xl   text-red-600' />}
  </div>
    <div className="whitespace-nowrap text-ellipsis overflow-hidden">
      <EnvironmentOutlined className="text-2xl"/>
      <h2 className='text-2xl'>{product.location}</h2>
      <span className='text-2xl'>{product.description}</span>
    </div>
  </div>
</div>
  </Card>
  );
};
export default RCard;

