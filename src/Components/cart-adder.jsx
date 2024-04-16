import { useState, useContext } from "react";
import Cart from 'src/images/icon-cart.svg';

import Increase from 'src/images/icon-plus.svg';
import Decrease from 'src/images/icon-minus.svg';
import {context} from 'src/Context/context';


export default function CartAdder () {
    const {itemCount, setItemCount, cart, addToCart} = useContext(context)

    const decrement = () => {
        console.log("Clicked decrease");
        itemCount > 0 ? setItemCount(prev => prev - 1) : null;
    }

    const increment = () => {
        setItemCount(prev => prev + 1);
        console.log("Clicked increase");

    }

    const handleAddToCart = () => {
        if (cart.length == 0){
           const viewingItem = { id: 0, itemName: 'Fall Limited Edition Sneakers', quantity: itemCount, initialPrice: 125, img: "src/images/image-product-1.jpg" }
           addToCart(prevCart => [...prevCart, viewingItem])
        } else if(cart.length === 1 && itemCount > cart.quantity || itemCount < cart.quantity){
            cart.quantity = itemCount;
        }
        console.log(cart)
        //if cart == 1, we dont want to add anymore, we want to check if the person cicking add to basket wants to increase the quantity, if they do we will update the quantity amount in the basket otherwise we wount update the basket
    }

    return(
        <div className="flex gap-x-[25px] mt-[30px]  ">
            <div className="flex bg-[#f7f8fd] px-[40px] py-[15px] rounded-lg justify-evenly gap-x-[20px] ">
                <span className="flex items-center cursor-pointer" onClick={decrement}><img src={Decrease} /></span>
                <p>{itemCount}</p>
                <span className="flex items-center cursor-pointer" onClick={increment}><img src={Increase} /></span>
            </div>
            <button className="bg-[#ff7d1a] text-white py-[15px] px-[70px] flex rounded-lg "
            onClick={handleAddToCart}
            >
                <img src={Cart} className="fill-white" />
                <span>Add to cart</span>
            </button>
        </div>
    )
}