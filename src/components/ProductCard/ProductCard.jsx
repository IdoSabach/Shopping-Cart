import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ProductCard = ({ image, title, type, price, id }) => {
  
  return (
    <div className="allCard text-left p-4 rounded-xl border border-gray-800 duration-300 hover:scale-105 mt-5 shadow-md">
      <Link key={id} to={`/shop/${id}`} className="re relative">
        <img src={image} alt="image" className="image rounded-xl h-96 w-96 object-cover" />
        <div className="ab absolute bottom-2 left-2">
          <div className="title font-bold">{title}</div>
          <div className="type text-gray-400">{type}</div>
          <div className="price font-bold">{price}</div>
        </div>
      </Link>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id:PropTypes.number.isRequired,
};

export default ProductCard;
