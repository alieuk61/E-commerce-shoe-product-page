import { useState, createContext } from "react";
import * as data from 'src/ecommerce.json'

export const context = createContext()

export default function Context({children}) {

    const [itemCount, setItemCount] = useState(0);
    const [cart, addToCart] = useState([]);
    const [cartClicked, setCartClicked] = useState(false);
    const [EnlargedImageActive, activateLargeImg] = useState(false);
    const [ContentData, setContentData] = useState(data.contents);
    const [ItemImages, setItemImages] = useState(data.itemImages);
    const [activeImage, setActiveImage] = useState(ItemImages[0]);
    

    function handleImgClick(src){
        setActiveImage(src)
      }

    return(
        <context.Provider
        value={{
            itemCount,
            setItemCount,
            cart,
            addToCart,
            cartClicked,
            setCartClicked,
            handleImgClick,
            activeImage,
            setActiveImage,
            ContentData,
            setContentData,
            ItemImages,
            setItemImages,
            EnlargedImageActive, activateLargeImg
        }}>
            {children}
        </context.Provider>
    )
}