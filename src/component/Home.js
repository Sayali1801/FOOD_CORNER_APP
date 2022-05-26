import React from 'react';
import '../styles/Home.css';
import background from '../images/background.jpg';
function Home()
{
    return(
        <div className='home'  style={{backgroundImage: `url(${background}) `}}>
            <div className='headerContainer'>
                <h1>FOOD CORNER</h1>
                <p>Indian Food At Your Click</p>
                 <button>Order Now</button>

                </div>
            </div>
    )
}
export default Home;
