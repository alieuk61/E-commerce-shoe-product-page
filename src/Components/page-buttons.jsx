import { useContext } from "react"
import { context } from "src/Context/context"

function LeftNavigationButton (props){
    // get the src, use find() to find where it is in the array, if we click the left button, we will keep idecrementing that index by one until we reach the min index,
    // if we have reached the min index, we will then just jump to the last bit in the array 

    return(
    <div className="h-[50px] w-[50px] bg-white grid place-content-center rounded-full cursor-pointer absolute top-[40%] left-[-5%] ">
        <img src="src/images/icon-previous.svg" />
    </div>
    )
}

function RightNavigationButton(props){
// get the src, use find() to find where it is in the array, if we click the right button, we will keep incrementing that inex by one until we reach tha max index,
    // if we have reached the max index, we will then just restart to the first bit in the array 

return(
    <div className="h-[50px] w-[50px] bg-white grid justify-center items-center rounded-full cursor-pointer absolute top-[40%] right-[-5%]">
    <img src="src/images/icon-next.svg" />
    </div>
)
}

function ExitButton() {
    const {activateLargeImg} = useContext(context)

    return(
        <section className="w-full flex justify-end mb-[30px]" onClick={() => activateLargeImg(false)}>
        <div className="w-[30px] h-[30px] cursor-pointer">
            <img src="src/images/icon-close.svg" className="w-full" />
        </div>
        </section>
    )
}

export {LeftNavigationButton, RightNavigationButton, ExitButton}