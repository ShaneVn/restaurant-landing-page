import React from 'react'
import Button from '../Button/Button'

function OrderItem({desc, image, name, price, alt}) {
  return (
    <div className="flex flex-col justify-center items-center space-y-6 flex-1 mt-5">
          <div
            className="h-[300px] w-[300px] "
            style={{ boxShadow: "8px 8px #fdc500" }}
          >
            <img src={image} alt={alt} className='h-full w-full' />
          </div>
          <div className="text-center w-[50%]">
            <h1 className="p__cormorant mt-5">{name}</h1>
            <p className="body_text text-center">
             {desc}
            </p>
          </div>
          <h1 className='p__cormorant '>{price}</h1>
          <Button text="Add To Cart" />
        </div>
  )
}

export default OrderItem