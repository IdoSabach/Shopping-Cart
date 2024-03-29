import React from "react";
import { useParams } from "react-router-dom";
import Items from "../../data/Items";
import useCartStore from "../../store/CardStore.jsx";

const ProductPage = () => {
  const { id } = useParams();
  const product = Items.find((item) => item.id === parseInt(id));

  const { addToCart } = useCartStore();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
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
            <li key={index} className="text-xl">{feature}</li>
          ))}
        </ul>

        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold">${product.price}</p>
          <button
            className="btn text-white bg-black text-2xl p-2 rounded-xl active:scale-95"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductPage;
