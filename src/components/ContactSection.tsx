import { useState } from 'react';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    companyType: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Aqui você pode integrar com backend ou serviço de e-mail
  };

  return (
    <section id="contact" className="bg-black py-16 md:py-24 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Contact Us</h2>
        <p className="text-gray-300 mb-8 text-center">Fill out the form and our team will get in touch with you.</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-200 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-hoopr-blue-light focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-200 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-hoopr-blue-light focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-200 mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-hoopr-blue-light focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="companyType" className="block text-gray-200 mb-2">Company Type</label>
            <select
              id="companyType"
              name="companyType"
              required
              value={form.companyType}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-hoopr-blue-light focus:outline-none"
            >
              <option value="">Select...</option>
              <option value="Team">Team</option>
              <option value="Agency">Agency</option>
              <option value="Agent">Agent</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-hoopr hover:bg-hoopr-blue text-white font-bold py-3 rounded transition-colors"
          >
            Send
          </button>
          {submitted && (
            <p className="text-green-400 text-center mt-4">Thank you! We will contact you soon.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
