import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


const CartItems = () => {
	const cartArr = [0,1]
  return (
    <>
            <div className='row justify=content-center m-0'>
                <div className='col-md-8 mt-5 mb-5 cartItems '>
				<div className='card'>
					<div className='card-header bg-light p-3'>
						<h5 className='text-black m-0'>Shopping Cart (01)</h5>
						{
							cartArr.length>0 ? <button className='btn btn-danger  mt-0 btn-sm'><FontAwesomeIcon icon={faTrashCan} /> Empty Cart</button>
							: ""
						}
					</div>
				</div>
                </div>
            </div>
    </>
  )
}

export default CartItems
