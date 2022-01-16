import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket,user}, dispatch] = useStateValue()

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/01/prime/PrimeDeals/Test/vxd-737_Prime_Deals_Test_OS_SP_Hero_v1_3000x600_2x.jpg' />
                <div>
                    <h3> Hello, {user?.email}</h3>
                    <h2 className='checkout__title'>Your shopping basket</h2>
               
                {basket.map(item => (
                    <CheckoutProduct 
                    id= {item.id}
                    title= {item.title}
                    image={item.image}
                    price= {item.price}
                    rating= {item.rating}
                    />
                )
                )}
                    
                
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
            
        </div>
    )
}

export default Checkout
