import { useCart } from "./CartContext";

const Card = (props) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-200 w-full sm:w-auto lg:w-72 xl:w-72 h-auto rounded-lg shadow-md mb-4 flex flex-col">
      <img
        src={props.image}
        alt={props.title}
        className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-t-lg"
      />
      <div className="w-full flex-1 flex-col bg-slate-900">
        <div className="p-4 flex flex-col items-center">
          <p className="text-yellow-100 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
            {props.title}
          </p>
          <p className="text-blue-500 font-semibold text-sm sm:text-base lg:text-lg">
            {props.price}
          </p>
        </div>
        <div className="flex justify-center items-center p-4">
          <button
            type="button"
            onClick={addToCart}
            className="rounded-md bg-slate-400 text-black px-4 py-2 uppercase text-sm md:text-base lg:text-lg leading-normal shadow-md transition duration-150 ease-in-out font-bold hover:bg-slate-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
