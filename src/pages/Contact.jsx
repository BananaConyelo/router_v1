import  { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xblokgbn', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: data,
      });

      if (response.ok) {
        setSubmitted(true);
        setError(null);
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        const result = await response.json();
        if (result.errors) {
          setError(result.errors.map(e => e.message).join(', '));
        } else {
          setError('Oops! There was an error submitting the form.');
        }
      }
    } catch (err) {
      setError('Oops! There was an error submitting the form.');
    }
  };


  return (
    <div className="max-w-6xl mx-auto mt-20 p-10 bg-gray-100 rounded-lg shadow-lg flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10" 
    style={{
        animation: 'windowOpen 0.8s ease forwards',
        opacity: 0,
      }}
      onAnimationEnd={e => {
        e.currentTarget.style.opacity = 1; 
      }}>
        <style>
            {`
            @keyframes windowOpen {
                0% {
                opacity: 0;
                transform: scale(0.8);
                }
                100% {
                opacity: 1;
                transform: scale(1);
                }
            }
            `}
        </style>
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 animate-bounce">Contact Me</h1>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
                placeholder="Your message"
              />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300">
              Send
            </button>
          </form>
        ) : (
          <p className="text-green-600 text-lg font-semibold text-center">Thank you for reaching out! I will get back to you soon.</p>
        )}
      </div>


      <div className="flex flex-col space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 animate-bounce">Connect with Me</h2>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/MomperoJessiee" target="_blank" rel="noopener noreferrer" 
          className="flex flex-col items-center justify-center w-32 h-32 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-transform duration-300 p-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-12 h-12 mb-2" />
            <span 
            className="text-gray-700 font-medium">Facebook</span>
          </a>
          <a href="https://www.instagram.com/eissejr/" target="_blank" rel="noopener noreferrer" 
          className="flex flex-col items-center justify-center w-32 h-32 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-transform duration-300 p-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className="w-12 h-12 mb-2" />
            <span className="text-gray-700 font-medium">Instagram</span>
          </a>
          <a href="https://github.com/BananaConyelo" target="_blank" rel="noopener noreferrer" 
          className="flex flex-col items-center justify-center w-32 h-32 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-transform duration-300 p-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="w-12 h-12 mb-2" />
            <span className="text-gray-700 font-medium">GitHub</span>
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="tel:+639107725120"rel="noopener noreferrer" 
            className="flex flex-col items-center justify-center w-35 h-32 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-transform duration-300 p-4">
              <img src="https://www.freeiconspng.com/uploads/contact-icons-png-15.png" alt="GitHub" className="w-12 h-12 mb-2" />
              <span className="text-gray-700 font-medium">0910 772 5120</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
