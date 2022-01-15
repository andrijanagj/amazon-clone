import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/81pXJW9qztL.jpg"></img>
            
            <div className="home__row">
                <Product id='1258596' title='The lean startup' price={29.99} image='https://m.media-amazon.com/images/I/51WIKlio9qL.jpg' rating={5}/> 
                <Product id='1254896' title='The lean startup' price={29.99} image='https://m.media-amazon.com/images/I/51WIKlio9qL.jpg' rating={4} />

            </div>

            <div className="home__row">
            <Product id='229896' title='The lean startup' price={29.99} image='https://m.media-amazon.com/images/I/51WIKlio9qL.jpg' rating={5} />
            <Product id='369896' title='The lean startup' price={29.99} image='https://m.media-amazon.com/images/I/51WIKlio9qL.jpg' rating={2} />
            <Product id='178896' title='The lean startup' price={29.99} image='https://m.media-amazon.com/images/I/51WIKlio9qL.jpg' rating={3} />


                </div>

                <div className="home__row">
                <Product id='125896' title='The lean startup' price={29.99} image='https://m.media-amazon.com/images/I/51WIKlio9qL.jpg' rating={4} />
        
            </div>
            </div>
        </div>
    )
}

export default Home
