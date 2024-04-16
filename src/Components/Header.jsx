import {useState, useContext} from 'react';
import Logo from 'src/images/logo.svg';
import Cart from 'src/images/icon-cart.svg';
import Profile from 'src/images/image-avatar.png';
import ShoppingCart from 'src/Components/shopping-cart.jsx';
import {context} from 'src/Context/context';

export default function Header(){

    const pages = ['Collections', 'Men', 'Women', 'About', 'Contact'];
    const { cartClicked, setCartClicked } = useContext(context);
    const [ pageHover, setPageHover ] = useState(null);

    function CartActive (){
        setCartClicked(prev => !prev)
    }

    function handleBtnHover(e) {
        console.log(e)
        setPageHover(e.target.innerHTML)
    }

    return(
        <section className='flex border-b border-solid px-[1.8rem] pb-[2rem] justify-between items-center mt-[1rem] h-[112px]'>
            <div className='flex gap-x-[4rem] h-[25px] '>
            <div className=''>
            <img src={Logo} alt="" />
            </div>
            <div className='flex flex-row gap-x-[1.7rem]'>
                    {pages.map((page, index) => {
                        return(
                            <button 
                            key={index}
                            onMouseOver={handleBtnHover}
                            className={`${page == pageHover ? 'border-b-[2px] border-solid' : null}`}
                            >{page}</button>
                        )
                    })}
            </div>
            </div>

            <div className='flex flex-row gap-x-[30px] '>
                    <div 
                    className='flex items-center cursor-pointer'
                    onClick={CartActive}
                    >
                    <img src={Cart} className='h-[1.5rem] '  />
                    </div>
                    <div 
                    className='cursor-pointer '
                    onClick={CartActive}
                    >
                    <img src={Profile} className='h-[3.5rem] ' />
                    </div>
            </div>
            <ShoppingCart />
        </section>
    )
}

//we want to click on the shopping cart and profile pic and have the cart show up/disappear 