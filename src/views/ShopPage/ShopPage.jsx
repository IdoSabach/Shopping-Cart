import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import Items from "../../data/Items.js"


export default function ShopPage() {
  return (
    <div className="shop flex flex-col items-center">
      <section className="title text-4xl mb-8 mt-4">Welcome To My Shop</section>
      <section className="sectionPro grid gap-6 lg:grid-cols-3 p-4">
        {Items.map((item, index) => (
          <Link key={index} to={`/item/${index}`}>
            <section
              key={index}
              className="item flex flex-col lg:flex-row gap-6"
            >
              <ProductCard
                image={item.image}
                title={item.title}
                type={item.type}
                price={`${item.price}$`}
              />
            </section>
          </Link>
        ))}
        
      </section>
    </div>
  );
}
