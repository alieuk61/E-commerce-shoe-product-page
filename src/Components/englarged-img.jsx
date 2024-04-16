import { useState, useContext } from "react";
import * as data from 'src/ecommerce.json'
import { LeftNavigationButton, RightNavigationButton, ExitButton } from "./page-buttons";
import { context } from "src/Context/context";

export default function EnlargedImage(){
    
  const {activeImage, setActiveImage, ItemImages, setItemImages, EnlargedImageActive} = useContext(context)

    function handleImgClick(src){
        setActiveImage(src)
      }

      return(
    <div className={`wrapper ${EnlargedImageActive ? 'flex' : 'hidden' }  flex-col mt-[2.5rem] absolute z-10 top-[10%] left-[30%]`}>
      <div className="relative">
        <ExitButton />
        <div><img src={activeImage} className="w-[560px] rounded-2xl" /></div>
        <div className='flex flex-row space-evenly justify-between mt-[2.5rem] px-[40px]  '>
        {ItemImages.map((src, index)=>{
          return(
            <div key={index} className='cursor-pointer'>
              <img className='rounded-lg w-[80px] h-[80px]' key={index} src={src} onClick={() => handleImgClick(src)} />
            </div>
          )
        })}
        </div>{/*smaller images*/}

        <LeftNavigationButton />
        <RightNavigationButton />
        </div>
    </div>
      )

}