import React from "react";


const Contact = () => {
  return (
    <div id="contact">
   <section className="text-gray-600 body-font relative bg-[#fae3c9]">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 rounded-lg bg-amber-50 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7305.500154442888!2d90.37705809541201!3d23.720617367544335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8d978efa9c9%3A0x2acce8895eeb57e!2sLalbagh%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1750346173557!5m2!1sen!2sbd"
        style={{ filter: "contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-[#fae3c9] relative flex flex-wrap py-6 px-7 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
            Dhaka, Bangladesh
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-indigo-500 leading-relaxed">aminaislam1912@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">019981387**</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-[#fae3c9] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-5">
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Contact
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600 ">
        Feel free to reach out to me for any inquiries, collaborations, or just to say hello!
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full rounded border border-black-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full  rounded border border-black-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full  rounded border border-black-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Send Message
      </button>
     
    </div>
  </div>
</section>
</div>

  );
};

export default Contact;


