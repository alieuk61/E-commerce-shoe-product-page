import { useState, useContext } from 'react'
import 'src/App.css'
import Header from './Components/Header.jsx'
import * as data from 'src/ecommerce.json'
import CartAdder from 'src/Components/cart-adder.jsx'
import EnlargedImage from 'src/Components/englarged-img.jsx'
import {context} from 'src/Context/context';

function PrimaryPage() {
  
  const [bigImageClicked, setBigImageClicked] = useState(false);
  const {handleImgClick, activeImage, setActiveImage, ContentData, setContentData, ItemImages, setItemImages, EnlargedImageActive, activateLargeImg} = useContext(context)

  return (
    <section className={`${EnlargedImageActive ? ('bg-black opacity-75') : 'bg-white'} h-lvh max-w-[75rem] box-border mx-auto font-Khumb`}>
      <Header/>
      <div className='grid grid-cols-2 mt-[2.5rem] px-[80px] py-[40px]'>
        <div className='flex flex-col w-fit gap-y-[40px]'> {/*interactive images*/}
          <img src={activeImage} className='w-[450px] h-[450px] rounded-2xl cursor-pointer' onClick={() => activateLargeImg(true)} /> {/*big img, add an onclick eventlistener*/} 
        <div className='flex flex-row space-evenly justify-between '>
        {ItemImages.map((src, index)=>{
          return(
            <div key={index} className='cursor-pointer'>
              <img className='rounded-lg w-[100px] h-[100px]' key={index} src={src} onClick={() => handleImgClick(src)} />
            </div>
          )
        })}
        </div>{/*smaller images*/}
      </div>

        <div className='w-[26.5rem] h-[21.0625rem] ml-[45px] ' > {/*this is the purchase side*/} {/*mt-[50px]*/}
          <h5 className='mb-[1rem] text-[1.2rem] uppercase text-[#ff7d1a] tracking-widest '>{ContentData.companyName}</h5>
          <h2 className='text-[2.8rem] mb-[2.8rem] leading-[1.2] font-bold capitalize '>{ContentData.itemName}</h2>
          <p className='mb-[2rem] w-[410px] text-[#68707d] tracking-wide '>{ContentData.description}</p>
          <div>
            <div className='flex items-center gap-x-[20px]'>
              <h3 className='inline-block text-[2rem] '>${JSON.parse(ContentData.price)[0]}.00</h3>
              <h6 className='inline-block text-[1.2rem] bg-[#ffede0] text-[#ff7d1a] rounded-md py-[2px] px-[10px] '>{JSON.parse(ContentData.price)[1]}%</h6>
            </div>
            <h6 className='text-[1.2rem] text-[#b6bcc8] line-through '>${JSON.parse(ContentData.price)[2]}.00</h6>
          </div>
            <CartAdder/>
        </div>
      </div>
      <EnlargedImage />
    </section>
  )
}

export default PrimaryPage
