import RCarousel from "../RCarousel"

const Banner = ( {bannerDatas} ) => {
  return (
    <div>
        <RCarousel bannerDatas={bannerDatas}  autoplaySpeed={2000} ></RCarousel>
    </div>
  )
}
export default Banner