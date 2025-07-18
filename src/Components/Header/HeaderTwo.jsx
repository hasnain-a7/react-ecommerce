
import { Search , Person , ShoppingCart , HeartBrokenOutlined } from '@mui/icons-material'
import Logo from './Logo'
import { useCart } from '../Content/CartContext'
const HeaderTwo = () => {
  const { count } = useCart();
  return (
    <div className="w-full text-white bg-slate-900 h-auto sm:h-20 flex flex-wrap sm:flex-nowrap justify-between items-center gap-4 px-4 sm:px-8 py-4 sm:py-2">
      <Logo/>
  <div className="todo w-full sm:w-2/4 flex flex-wrap sm:flex-nowrap justify-center items-center gap-2">
    <input
      type="text"
      placeholder="Search Something here.."
      className="h-10 p-2 w-full sm:w-auto flex-1 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
    />
    <button
      type="button"
      className="inline-block rounded-md bg-slate-400 text-black h-10 px-4 text-bold uppercase leading-normal shadow-md transition duration-150 ease-in-out font-bold"
    >
      <Search />
    </button>
  </div>
  <div className="h-10 w-full sm:w-1/6 flex justify-center sm:justify-end items-center gap-5 text-md">
    
   <a href="#"  className="hover:text-gray-300">
                   <Person size={24} />
                 </a>
    <div className="relative w-10">
      <div className="absolute top-0 right-0 bg-red-500 h-5 flex justify-center items-center w-5 text-xs rounded-full">
        {count}
      </div>
      <a href="#" className='hover:text-gray-300'><ShoppingCart size ={24} /></a>
      
    </div>
    <a href="#" className='hover:text-gray-300'> <HeartBrokenOutlined size ={24}/></a>
   
  </div>
</div>

      
  )
}

export default HeaderTwo
