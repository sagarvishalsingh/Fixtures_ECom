import RateStars from "../../Shared/MidComponents/RateStars";
import s from "./ProductFirstInfos.module.scss";

const ProductFirstInfos = ({ data }) => {
  const { name, price, description } = data;

  return (
    <section className={s.firstInfos}>
      <b className={s.productName}>{name?.toUpperCase()}</b>

      <section className={s.rateAndReviews}>
        {/* Uncomment the RateStars component and reviews span when data is available */}
        {/* <RateStars rate={data.rate} /> */}
        {/* <span className={s.reviews}>({data.votes} Reviews)</span> */}
        <div className={s.verticalLine} />
        {/* <span className={s.greenText}>In Stock</span> */}
      </section>

      <span className={s.price}>₹{price}</span>

      <p className={s.description} dangerouslySetInnerHTML={{ __html: description }}></p>
    </section>
  );
};

export default ProductFirstInfos;
