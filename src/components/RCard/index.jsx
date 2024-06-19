import { Card, Image } from 'antd';
import { Link } from 'react-router-dom';
import { EnvironmentOutlined, HeartOutlined } from '@ant-design/icons';
import favoriteProduct from '@/store/favoriteProduct';
import { useNavigate } from 'react-router-dom';

const RCard = ({ classNames, styles, product, hoverable }) => {
  const navigate = useNavigate()
  const { addFavorite, removeFavorite, favorites } = favoriteProduct();
  const isFavorite = favorites.some(fav => fav.id === product.id);
  const handleFavoriteClick = () => {
     if (!isFavorite) {
      addFavorite(product);
      navigate("/favorite")
     } else {
      removeFavorite(product.id);
     }
  };
  return (
  <Card className={classNames} styles={styles}  hoverable={hoverable}>
  <div key={product.id}>
  <div className='container mx-auto mb-4'>
<Link to={`/productDetail/${product.id}`}> 
  <Image height={300} style={{ objectFit:"cover", width:"500px"}}  alt="example" src={product.image} />
</Link>  
  <HeartOutlined className='text-3xl relative left-72 text-red-600'
    onClick={handleFavoriteClick}/>
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

