import React from 'react'
import './Checkout.css'

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/01/prime/PrimeDeals/Test/vxd-737_Prime_Deals_Test_OS_SP_Hero_v1_3000x600_2x.jpg' />
                <div>
                    <h2 className='checkout__title'>your shopping basket</h2>
                </div>
            </div>
            <div className='checkout__right'>
                <h2>the subtotal</h2>
            </div>
            
        </div>
    )
}

export default Checkout
