import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div>


      <div  className="grid xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 max-w-5xl  p-2 mx-auto space-y-10 space-x-5 min-h-[50vh]">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-row items-center justify-evenly pt-2 ">

        <div className="px-10">
          <div className="text-green-600 font-semibold">Your Cart</div>
          <div className="text-green-600 font-bold text-[30px] ">Summary</div>
          <p className="font-bold">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="py-5 gap-[2px]">
          <p className="font-bold mb-2"><p className="font-semibold">Total Amount:</p> ${totalAmount}</p>
          <button className="focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div>
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
