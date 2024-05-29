import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { EnvironmentOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
 
const RCard = ({ bordered, hoverable, size, classNames, styles, product }) => {
  const { t } = useTranslation();
  return (
    <Card bordered={bordered} hoverable={hoverable} size={size} className={classNames} styles={styles}>
      <div key={product.id} className='flex gap-10'>
        <Link to={`/productDetail/${product.id}`} className='bg-slate-100'> 
          <img src={product.image} alt={product.location}/>
        </Link>  
           <div className=''> 
           <div className='flex'> 
           <EnvironmentOutlined className="text-4xl"/>
        <h2 className="text-2xl text-color-red">{t("Card.location")} {product.location}</h2>
        </div>
        <p className="text-blue-600 text-2xl"> {product.description}</p>
        <p className="text-blue-600 text-2xl">{t("Card.type")}{product.type}</p>
        <p className=" bg-red-300 w-max p-4 text-2xl border rounded rounded-3xl">{t("Card.price")}{product.price}{t("Card.month")}</p>
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

