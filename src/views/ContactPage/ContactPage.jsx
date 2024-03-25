import Footer from "../../components/Footer/Footer";
import React, { useState } from 'react';

export default function PersonPage() {
  const [message , setMessage] = useState("")
  const [name , setName] = useState("")

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }
  const handleName = (e) => {
    setName(e.target.value)
  }

  const handlePrint = (e) => {
    e.preventDefault();
    // console.log(message)
    // console.log(name)
    setMessage("")
    setName("")
  }
  return (
    <div className="contact flex flex-col items-center">
      <section className="input mt-8 p-4 flex flex-col gap-6 items-center">
        <div className="title text-3xl text-center ">
          We are here for you for anything, write to us!
        </div>

        <div className="input flex flex-col w-3/4">
          <label htmlFor="textInput"></label>
          <input
            type="text"
            name="textInput"
            placeholder="Your Name"
            value={name}
            onChange={handleName}
            className="border border-black rounded-2xl p-1"
          />
        </div>

        <div className="input flex flex-col w-3/4">
          <label htmlFor="textInput"></label>
          <textarea
            name="messageInput"
            placeholder="Your Message"
            value={message}
            onChange={handleMessage}
            className="border border-black rounded-2xl p-1"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn border bg-green-400 w-1/3 rounded-xl "
          onClick={handlePrint}
        >
          Send
        </button>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
