import { Card, Image } from 'antd';
import { Link } from 'react-router-dom';
import { EnvironmentOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
 
const RCard = ({ classNames, styles, product, hoverable }) => {
  return (
    <Card className={classNames} styles={styles}  hoverable={hoverable}>
  <div key={product.id}>
  <div className='container mx-auto mb-4'>
    <Link to={`/productDetail/${product.id}`}> 
      <Image height={300} style={{ objectFit:"cover", width:"500px" }}  alt="example" src={product.image} />
    </Link>  
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
RCard.propTypes = {
  bordered: PropTypes.bool,
  hoverable: PropTypes.bool,
  size: PropTypes.string,
  classNames: PropTypes.string,
  styles: PropTypes.object,
  product: PropTypes.shape({
  id: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  }).isRequired,
};

export default RCard;

