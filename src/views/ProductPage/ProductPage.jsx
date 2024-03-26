import React from "react";
import { useParams } from "react-router-dom";
import Items from "../../data/Items";
import useCartStore from "../../store/CardStore.jsx";

const ProductPage = () => {
  const { id } = useParams();
  const product = Items.find((item) => item.id === parseInt(id));

  const { addToCart, cart } = useCartStore();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert("Product added to cart!");
  };

  return (
    <div className="product-page flex flex-col items-center text-center m-4 gap-2 pt-2 pb-2">
      <h1 className="text-3xl">{product.title}</h1>
      <div className="flex gap-5 text-xl">
        <p>{product.type}</p>
        <p>${product.price}</p>
      </div>

      <div className="product-image mt-4 mb-4 flex justify-center">
        <img src={product.image} alt={product.title} className="rounded-xl lg:w-3/4"/>
      </div>
      <div className="product-details">
        <p>Description: {product.description}</p>
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <button className="btn text-white bg-black text-2xl p-2 rounded-xl mt-4 active:scale-95" onClick={handleAddToCart}>Add to Bag</button>
      
    </div>
  );
};

export default ProductPage;
