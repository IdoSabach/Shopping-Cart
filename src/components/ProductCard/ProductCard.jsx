export default function ProductCard({ image, title, type, price }) {
  return (
    <div className="allCard flex flex-col items-start text-left ">
      <button>
        <img src={image} alt="image" className="image rounded-xl"/>
        <div>
          <div className="title font-bold">{title}</div>
          <div className="type text-gray-400">{type}</div>
          <div className="price font-bold">{price}</div>
        </div>
      </button>
    </div>
  );
}
