import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import Items from "../../data/Items.js";

export default function ShopPage() {
  let i =0;
  return (
    <div className="shop flex flex-col items-center">
      <section className="title text-3xl lg:text-5xl mb-4 mt-8 lg:mb-12 lg:mt-12 text-center">The Collection Rolex watches</section>
      <section className="sectionPro grid gap-6 lg:grid-cols-3 p-4">
        {Items.map((item, index) => (
          <section key={index} className="item flex flex-col lg:flex-row gap-6">
            <ProductCard
              id={i++}
              image={item.image}
              title={item.title}
              type={item.type}
              price={`$${item.price}`}
            />
          </section>
        ))}
      </section>
    </div>
  );
}
