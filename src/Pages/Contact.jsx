import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container bg-slate-100 mx-auto p-4">
      <h2 className="text-center text-2xl mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-slate-900 p-4 text-white font-bold rounded shadow">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm mb-2">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm mb-2">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-slate-400 text-white py-2 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;