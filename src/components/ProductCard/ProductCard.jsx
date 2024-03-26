import { Link } from "react-router-dom";
import useCartStore from "../../store/CardStore";
import { useParams } from "react-router-dom";

export default function ProductCard({ image, title, type, price, id }) {
  const product = { id, image, title, type, price };
  const { addToCart} = useCartStore();

  const handleAddToCart = () => {
    addToCart(product);
    alert("Product added to cart!");
  };

  return (
    <div className="allCard text-left ">
      <Link key={id} to={`/item/${id}`}>
        <img src={image} alt="image" className="image rounded-xl" />
      </Link>

      <div className="flex justify-between items-center p-2">
        <div>
          <div className="title font-bold">{title}</div>
          <div className="type text-gray-400">{type}</div>
          <div className="price font-bold">{price}</div>
        </div>
        <div>
          <button className="btn text-2xl p-2 bg-green-500 text-black font-bold rounded-xl" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
