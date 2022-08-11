import React, { useState, useEffect } from "react";
import HeroContact from "../components/HeroContact";

const Contact = () => {
  return (
    <div className=" mt-6 body grid grid-cols-1 sm:grid-col-2 h-screen w-full">
      <div className=" bg-black block h-20">
        <h1 className=" my-4 text-white text-2xl text-center font-bold">
          Contact Form
        </h1>
      </div>
      <div>
        <form
          action="mailto:opeyemisanni65@gmail.com"
          method="get"
          className=" max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
        >
          <div className="flex flex-col text-gray-400 py-3">
            <label htmlFor="">Your Name</label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Full Name"
              className="rounded-lg bg-gray-700 mt-2 p-2 
            focus:border-blue-500 focus:bg-grey-800 "
            />
          </div>

          <div className="flex flex-col text-gray-400 py-3">
            <label htmlFor="">Message</label>
            <textarea
              name=""
              id="message"
              cols="30"
              rows="10"
              className="rounded-lg bg-gray-700 mt-2 p-2 
            focus:border-orange-500 focus:bg-grey-800"
            ></textarea>
          </div>
          <button
              type="submit"
              className="w-full mt-5 py-2 text-white bg-black-300 rounded border border-orange-500 shadow-md shadow-orange-900 hover:bg-orange-400 hover:text-black"
            >
              Submit
            </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
