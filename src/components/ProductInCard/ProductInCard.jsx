import { useState } from "react";
import useCartStore from "../../store/CardStore";

const trashIcon = "/images/icons8-trash-can-50.png";

export default function ProductInCard({ image, title, price , id}) {
  const [countItem, setCountItem] = useState(1);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleRemoveFromCart = () => {
    // console.log("Removing item with id:", id);
    removeFromCart(id);
  };

  return (
    <div>
      <section key={id} className="item flex flex-col lg:flex-row m-8 gap-8 p-4 shadow-xl">
        <div>
          <img src={image} alt="" className="image h-60 w-96 object-cover rounded-xl" />
        </div>
        <div className="text text-2xl flex flex-col gap-2 lg:gap-2 justify-around w-full">
          <div className="title font-bold p-2">{title}</div>
          <div className="counter flex gap-8 text-3xl">
            <button onClick={() => setCountItem(countItem - 1)}>-</button>
            <div>{countItem}</div>
            <button onClick={() => setCountItem(countItem + 1)}>+</button>
          </div>
          <div className="priceLine flex justify-between">
            <div className="price font-bold">{`$${price}`}</div>
            <button className="btn" onClick={handleRemoveFromCart}>
              <img src={trashIcon} alt="trash" className="w-7" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
