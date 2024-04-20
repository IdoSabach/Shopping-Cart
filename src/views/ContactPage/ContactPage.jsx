import { useState } from "react";

const text = [
  {
    title: "Welcome to Luxury watch store - Your Ultimate Destination for Luxury Watches",
    description: [
      "We're proud to be a part of a larger chain dedicated to bringing you the finest in luxury timepieces. Our branch, nestled among our chain's network of stores, stands as a beacon of elegance and precision in the world of horology."
    ],
  },
  {
    title: "Our Story",
    description: [
      "Driven by a love for craftsmanship and a desire to share exceptional timepieces with fellow enthusiasts, My Store was born. With years of experience in the luxury watch industry, our team is devoted to providing a seamless shopping experience, offering unparalleled customer service and expertise every step of the way.",
    ],
  },
  {
    title: "Our Collection",
    description: [
      "Explore our meticulously curated collection featuring a diverse range of luxury watches, each exemplifying the pinnacle of design, innovation, and heritage. From iconic classics to avant-garde masterpieces, our selection showcases the finest craftsmanship from prestigious brands such as Rolex, Patek Philippe, Audemars Piguet, and more.",
    ],
  },
  {
    title: "Why Choose Us?",
    description: [
      "Authenticity Guaranteed: Shop with confidence knowing that every timepiece in our collection is guaranteed to be 100% authentic, sourced directly from authorized dealers or reputable sources.",
      "Expertise and Guidance: Our team of horological enthusiasts is here to assist you in finding the perfect timepiece to complement your style and preferences. Whether you're a seasoned collector or a novice enthusiast, we're dedicated to providing personalized guidance and expertise.",
      "Secure Shopping Experience: We prioritize the security and privacy of our customers, ensuring a safe and seamless shopping experience with secure payment options and encrypted transactions.",
      "Worldwide Shipping: Wherever you are in the world, we'll ensure your luxury timepiece reaches you safely and swiftly, with worldwide shipping options available.",
    ],
  },
];

export default function PersonPage() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePrint = (e) => {
    e.preventDefault();
    setMessage("");
    setName("");
  };
  return (
    <div className="contact flex flex-col justify-center items-center lg:mt-12 mt-4">
      <div className="lg:w-3/5 p-3">
        <section>
          {text.map((block, index) => (
            <div key={index} className="flex flex-col gap-3 mb-10">
              <p className="text-2xl font-bold lg:text-3xl">{block.title}</p>
              <ul>
                {block.description.map((item, index) => (
                  <li key={index} className="mb-4 lg:text-xl">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section className="input flex flex-col gap-6 items-center lg:text-2xl">
          <div className="title text-3xl text-center ">
            We are here for you for anything, write to us!
          </div>

          <div className="input flex flex-col w-3/4 ">
            <label htmlFor="textInput"></label>
            <input
              type="text"
              name="textInput"
              placeholder="Your Name"
              value={name}
              onChange={handleName}
              className="border border-black rounded-2xl p-4"
            />
          </div>

          <div className="input flex flex-col w-3/4">
            <label htmlFor="textInput"></label>
            <textarea
              name="messageInput"
              placeholder="Your Message"
              value={message}
              onChange={handleMessage}
              className="border border-black rounded-2xl p-4 h-40"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn border bg-green-900 w-1/3 rounded-xl text-white p-3 active:scale-95 hover:scale-110 ease-in duration-200 "
            onClick={handlePrint}
          >
            Send
          </button>
        </section>
      </div>
    </div>
  );
}
