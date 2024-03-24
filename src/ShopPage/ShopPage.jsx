import Footer from "../Footer/Footer";
import ProductCard from "../ProductCard/ProductCard.jsx";

const productOne = "/imageSwiper/pink.jpg" 
const productTwo = "/imageSwiper/blue.jpg"
const productThree = "/imageSwiper/moon.jpg"

export default function ShopPage(){
  return(
    <div className="shop flex flex-col items-center">
      <section className="title text-4xl mb-8 mt-4">Welcome To My Shop</section>
      <section className="sectionPro grid gap-6 lg:grid-cols-3 p-4">
        <ProductCard image={productOne} title={"Elegant sport shoe"} type={"Sport Men"} price={"159.99$"}/>
        <ProductCard image={productTwo} title={"Elegant sport shoe"} type={"Sport Men"} price={"159.99$"}/>
        <ProductCard image={productThree} title={"Elegant sport shoe"} type={"Sport Men"} price={"159.99$"}/>

        <ProductCard image={productOne} title={"Elegant sport shoe"} type={"Sport Men"} price={"159.99$"}/>
        <ProductCard image={productTwo} title={"Elegant sport shoe"} type={"Sport Men"} price={"159.99$"}/>
        <ProductCard image={productThree} title={"Elegant sport shoe"} type={"Sport Men"} price={"159.99$"}/>
      </section>

      <Footer />
    </div>
  )
}