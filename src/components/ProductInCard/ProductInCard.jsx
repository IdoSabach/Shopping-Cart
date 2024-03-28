import { useState } from "react";
import useCartStore from "../../store/CardStore";

const trashIcon = "/images/icons8-trash-can-50.png";

export default function ProductInCard({ id, image, title, price, quantity}) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const addToCart = useCartStore((state) => state.addToCart);

  const [countItem, setCountItem] = useState(quantity);

  const handleRemoveFromCart = () => {
    removeFromCart(id);
    setCountItem(countItem - 1); 
    
  };

  const handleRemoveFromMinus = () => {
    if (countItem > 1) {
      setCountItem(countItem - 1); 
    }else{
      removeFromCart(id);
    }
  };

  const handleAddToCart = () => {
    addToCart({ id, image, title, price, quantity: countItem + 1 });
    setCountItem(countItem + 1);
    
  };

  return (
    <div>
      <section key={id} className="item flex m-4 gap-4 lg:gap-8 p-1 shadow-xl rounded-lg">
        <div>
          <img src={image} alt="" className="image h-40 w-96 lg:h-60 lg:w-96 object-cover rounded-xl" />
        </div>
        <div className="text text-xs lg:text-2xl flex flex-col gap-2 justify-between lg:justify-around w-full">
          <div className="title font-bold text-lg lg:text-xl">{title}</div>
          <div className="counter flex gap-8 text-2xl lg:text-3xl">
            <button onClick={handleRemoveFromMinus}>-</button>
            <div>{countItem}</div>
            <button onClick={handleAddToCart}>+</button>
          </div>
          <div className="priceLine flex justify-between text-xl">
            <div className="price font-bold">{`$${(price * countItem).toFixed(2)}`}</div> {/* Calculate total price */}
            <button className="btn" onClick={handleRemoveFromCart}>
              <img src={trashIcon} alt="trash" className="lg:w-7 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
