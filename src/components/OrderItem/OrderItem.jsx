import React from 'react'
import Button from '../Button/Button'

function OrderItem({text, image, title}) {
  return (
    <div className="flex flex-col justify-center items-center space-y-14 flex-1">
          <div
            className="h-[300px] w-[300px] "
            style={{ boxShadow: "8px 8px #fdc500" }}
          >
            <img src={image} alt="" className='h-full w-full' />
          </div>
          <div className="text-center w-[50%]">
            <h1 className="p__cormorant">{title}</h1>
            <p className="body_text text-center">
             {text}
            </p>
          </div>
          <Button text="Add To Cart" />
        </div>
  )
}

export default OrderItem