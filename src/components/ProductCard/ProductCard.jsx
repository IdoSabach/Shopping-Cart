import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ProductCard = ({ image, title, type, price, id }) => {

  return (
    <div className="allCard text-left p-4 shadow-xl rounded-xl">
      <Link key={id} to={`/item/${id}`}>
        <img src={image} alt="image" className="image rounded-xl h-96 w-96 object-cover" />
      </Link>

      <div className="flex justify-between items-center p-2">
        <div>
          <div className="title font-bold">{title}</div>
          <div className="type text-gray-400">{type}</div>
          <div className="price font-bold">{price}</div>
        </div>
        <div>
        </div>
      </div>
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
