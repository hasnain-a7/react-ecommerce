const About = () => {
  return (
    <div className="container mx-auto p-5 bg-slate-100">
      <h2 className="text-2xl font-semibold mb-4 text-center">About Us</h2>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h3>
        <p className="text-gray-700">
          Our mission is to provide high-quality products at affordable prices,
          making it easy for everyone to shop for the products they love. We
          strive to offer a seamless shopping experience with excellent customer
          service.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-slate-900  mb-4">Our Values</h3>
        <ul className="list-inside list-disc text-gray-700">
          <li className="mb-2">
            Customer Satisfaction: We always prioritize our customers needs and
            feedback.
          </li>
          <li className="mb-2">
            Quality: We aim to offer only the best products from trusted
            manufacturers.
          </li>
          <li className="mb-2">
            Integrity: We are committed to being honest and transparent with our
            customers.
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-bold text-slate-900  mb-4">Our Story</h3>
        <p className="text-gray-700">
          We started this journey with the goal of creating a one-stop shop for
          all your needs. From our humble beginnings, we’ve grown into a trusted
          brand, and we are committed to continuing our growth and improving our
          services to meet the ever-changing needs of our customers.
        </p>
      </div>
    </div>
  );
};

export default About;
