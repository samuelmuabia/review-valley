import React from 'react';

const Home = () => {
    return (
       <div>
            <div className='mx-4 d-flex align-items-center'>
         <div className='col-lg-6 '>
            <h1>It is a high time For Laptop</h1>
            <p>It’s here. Our first chip designed specifically for this one. Packed with an astonishing 16 billion transistors, the Apple M1 system on a chip (SoC) integrates the CPU, GPU, Neural Engine, I/O, and so much more onto a single tiny chip. With incredible performance, custom technologies, and industry-leading power efficiency,1 M1 is not just a next step for Mac — it’s another level entirely.</p>
        </div>
        <div className='col-lg-6'>
            <img className='img-fluid' src="images/Laptop.png" alt=""  />
        </div>
        </div>
        <div className='text-center'>
            <h1>Customer Reviews</h1>
        </div>
       </div>
    );
};

export default Home;