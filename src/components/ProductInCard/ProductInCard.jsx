import { useState } from "react";
import useCartStore from "../../store/CardStore";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const trashIcon = "/images/icons8-trash-can-50.png";

const notifyErrorMax = () =>
  toast.error("Maximum number of items", {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    // transition: Bounce,
  });

const notifyErrorMin = () =>
  toast.error("Minimum number of items", {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    // transition: Bounce,
  });

const numberWithCommas = (number) => {
  return number.toLocaleString();
};

const ProductInCard = ({ id, image, title, price, quantity }) => {
  const { cart } = useCartStore();
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const addToCart = useCartStore((state) => state.addToCart);
  const countItems = useCartStore(
    (state) => state.cart.find((item) => item.id === id)?.quantity || quantity
  );
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);

  const [countItem, setCountItem] = useState(countItems);

  const handleRemoveFromCart = () => {
    removeFromCart(id);
    setCountItem(countItem - 1);
  };

  const handleRemoveFromMinus = () => {
    decrementQuantity(id);
    setCountItem(countItem - 1);

    // Check if the new count becomes zero
    if (countItems === 1) {
      notifyErrorMin();
    }
  };

  const handleAddToCart = () => {
    const newCount = countItem + 1;
    addToCart({ id, image, title, price, quantity: newCount });
    setCountItem(newCount);
  };

  return (
    <div>
      <section
        key={id}
        className="item flex m-4 gap-4 lg:gap-8 p-1 shadow-md rounded-lg"
      >
        <div>
          <img
            src={image}
            alt=""
            className="image h-40 w-96 lg:h-60 lg:w-96 object-cover rounded-xl"
          />
        </div>
        <div className="text text-xs lg:text-2xl flex flex-col gap-2 justify-between lg:justify-around w-full">
          <div className="title font-bold text-lg lg:text-xl">{title}</div>
          <div className="counter flex gap-8 text-2xl lg:text-3xl">
            <button onClick={handleRemoveFromMinus}>-</button>
            <div>{countItems}</div>
            <button onClick={handleAddToCart}>+</button>
          </div>
          <div className="priceLine flex justify-between text-xl">
            <div className="price font-bold text-base lg:text-xl">{`$${numberWithCommas(
              price * countItems
            )}`}</div>
            <button className="btn" onClick={handleRemoveFromCart}>
              <img src={trashIcon} alt="trash" className="lg:w-7 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

ProductInCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ProductInCard;

// const handleAddToCart = () => {
//   const totalQuantityInCart = cart.reduce(
//     (total, item) => (item.id === id ? total + item.quantity : total),
//     0
//   );
//   const newCount = countItem + 1;

//   if (totalQuantityInCart + 1 <= 3) {
//     addToCart({ id, image, title, price, quantity: newCount });
//     setCountItem(newCount);
//   } else {
//     notifyErrorMax();
//   }
// };

//Function to limit the amount of units to 3 with minus plus
