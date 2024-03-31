import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Items from "../../data/Items";
import useCartStore from "../../store/CardStore.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ProductPage = () => {
  const { id } = useParams();
  const product = Items.find((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [isClick, setIsClick] = useState(false);
  const { addToCart } = useCartStore();

  const notify = () =>
    toast.success(`${product.title} Added to your cart`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity); // Pass the selected quantity to addToCart
    setIsClick(true);
    notify();
  };

  return (
    <div>
      <div className="product-page flex flex-col lg:flex-row justify-center mt-8 gap-2 lg:gap-8 pt-2 pb-2">
        <div className="product-image flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl h-96 w-96 object-cover"
          />
        </div>
        <div className="product-details flex flex-col justify-around p-4 lg:p-0 gap-6 lg:gap-0">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">{product.title}</h1>
            <p className="text-xl">{product.type}</p>
          </div>

          <ul className="flex flex-col gap-2">
            <p className="font-bold text-2xl">Description: </p>
            <div className="text-xl">{product.description}</div>
            {product.features.map((feature, index) => (
              <li key={index} className="text-xl">
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold">${product.price}</p>
            <select
              name=""
              id=""
              className="text-2xl border"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
              {numArr.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <div>
              {isClick ? (
                <div className="btn text-white bg-green-500 text-2xl p-2 rounded-xl flex gap-2 items-center">
                  <img
                    src="/images/icons8-approved-24.png"
                    alt="v"
                    className="w-6 h-6 filter invert"
                  />
                  Added to Cart
                </div>
              ) : (
                <button
                  className="btn text-white bg-black text-2xl p-2 rounded-xl active:scale-95 animate-bounce"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition:Bounce
      />
    </div>
  );
};

export default ProductPage;
