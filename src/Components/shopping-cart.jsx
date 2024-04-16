import { useState, useContext } from "react";
import { context } from "src/Context/context";

export default function ShoppingCart(){

    const {cart, addToCart, cartClicked, setCartClicked} = useContext(context)

    return(
        <section className={`absolute w-[400px] min-h-[250px] bg-white shadow-2xl top-[100px] rounded-lg top-[100px] right-[85px] ${cartClicked ? 'block' : 'hidden' } `}>
            <h3 className="border-b-2 text-black font-bold text-[1.5rem] p-[20px] ">Cart</h3>
            <div className="items h-[150px] relative">
                {cart.length === 0 ? <p className="text-[#68707d] font-bold absolute left-[32%] top-[45%] ">Your cart is empty.</p> : cart.map((item, index) => {
                    return(
                        <div key={index} className="h-[80px] w-full flex gap-x-[20px] ">
                            <img src={item.img} className="h-[80px] w-[80px] rounded-lg " />
                            <div>
                            <p>{item.itemName}</p>
                            <span className="flex gap-x-[15px] ">
                                <p>{item.initialPrice} x {item.quantity}</p>
                                <p>{item.initialPrice * item.quantity}</p>
                            </span>
                            </div>
                        </div>
                    )
                })}
                

            </div>
        </section>
    )
}