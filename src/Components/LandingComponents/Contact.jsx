import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/mnnqplbn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Try again later.");
    }
  };

  return (
    <section className="flex flex-col md:flex-row p-8 border-b border-b-black dark:border-b-[#f6f4ef]">
      {/* Left Section - Contact Info */}
      <div className="md:w-1/2 p-6 flex flex-col gap-5">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <div className="flex flex-col gap-2 text-xl">
          <a href="#">
            <strong>Email:</strong> lexi@example.com
          </a>
          <a href="#">
            <strong>Phone:</strong> +123 456 7890
          </a>
          <a href="#">
            <strong>Website:</strong> www.lexi.com
          </a>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="md:w-1/2 p-6">
        <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded placeholder:text-[grey] dark:placeholder:text-[#f6f4ef6d] outline outline-[#6c3baa]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded placeholder:text-[grey] dark:placeholder:text-[#f6f4ef6d] outline outline-[#6c3baa]"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 rounded placeholder:text-[grey] dark:placeholder:text-[#f6f4ef6d] h-24 resize-none outline outline-[#6c3baa]"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#6c3baa] text-white px-4 py-2 rounded"
          >
            Send
          </button>
          {status && <p className="text-sm mt-2 text-gray-600">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
