import { Carousel  } from 'antd';
import { Link } from 'react-router-dom';
 
const RCarousel = ({ className, style, autoplay, bannerDatas, autoplaySpeed }) => {
  return (
  <Carousel className={className} style={style} autoplay={true} autoplaySpeed={autoplaySpeed}>
    {bannerDatas.map(banner => (
  <div key={banner.id}>
    <Link to={`/bannerDetail/${banner.id}`}> 
    <img className='mx-auto w-full h-96 object-cover' src={banner.image} />
    </Link>
  </div>
    ))}
    </Carousel>
  )
}
export default RCarousel