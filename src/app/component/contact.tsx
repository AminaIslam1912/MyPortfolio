"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      // Using FormSubmit.co - free email service, no API key needed
      // The form will send to aminaislam1912@gmail.com
      const response = await fetch(
        "https://formsubmit.co/ajax/aminaislam1912@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Portfolio Contact from ${formData.name}`,
            _template: "table",
          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact">
      <section className="bg-background py-16 sm:py-20">
        <div className="container px-4 sm:px-6 py-12 sm:py-20 mx-auto flex sm:flex-nowrap flex-wrap gap-8">
          <div className="lg:w-2/3 md:w-1/2 w-full rounded-lg bg-card overflow-hidden sm:mr-10 p-6 sm:p-10 flex items-end justify-start relative shadow-lg min-h-[300px] sm:min-h-[400px]">
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
            <div className="bg-card relative flex flex-wrap py-6 px-6 sm:px-7 rounded-lg shadow-md border border-border text-sm sm:text-base">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-foreground tracking-widest text-xs uppercase">
                  ADDRESS
                </h2>
                <p className="mt-1 text-muted-foreground">Dhaka, Bangladesh</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-foreground tracking-widest text-xs uppercase">
                  EMAIL
                </h2>
                <a
                  href="mailto:aminaislam1912@gmail.com"
                  className="text-primary leading-relaxed hover:underline"
                >
                  aminaislam1912@gmail.com
                </a>
                <h2 className="title-font font-semibold text-foreground tracking-widest text-xs mt-4 uppercase">
                  PHONE
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  019981387**
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 w-full bg-card flex flex-col md:ml-auto mt-0 sm:mt-8 px-6 sm:px-8 py-8 rounded-lg shadow-lg">
            <h2 className="title-font text-3xl sm:text-4xl mb-4 font-bold text-foreground leading-tight">
              Contact
            </h2>
            <p className="leading-relaxed mb-5 text-muted-foreground text-sm sm:text-base">
              Feel free to reach out to me for any inquiries, collaborations, or
              just to say hello!
            </p>

            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-xs sm:text-sm text-foreground font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background rounded border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-base outline-none text-foreground py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-xs sm:text-sm text-foreground font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background rounded border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-base outline-none text-foreground py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-xs sm:text-sm text-foreground font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-background rounded border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 h-32 text-base outline-none text-foreground py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground border-0 py-3 px-6 sm:px-8 focus:outline-none hover:opacity-90 rounded-lg text-base sm:text-lg font-medium transition-all shadow-lg hover:shadow-xl disabled:opacity-50 w-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="mt-4 text-green-600 font-medium text-center">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-red-600 font-medium text-center">
                  Failed to send message. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
