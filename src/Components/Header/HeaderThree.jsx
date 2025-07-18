
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <div className="w-full h-auto sm:h-12 bg-slate-800 px-4 sm:px-8 py-2 flex flex-wrap justify-center sm:justify-evenly items-center text-white">
      {['Home', 'Blog',  'Contact', 'About'].map((item) => (
        <Link
          key={item}
          to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
          className="text-sm sm:text-md md:text-lg font-bold mx-2 sm:mx-4 hover:text-gray-300" 
        >
          {item}
        </Link>
      ))}
    </div>
  );
};

export default Header;
