import React from 'react';

const Partners = () => {
    return (
        <div class="relative h-fit flex flex-col justify-center bgcolorpartner   ggt2  bg-[#3a3838] " style={{ backgroundImage: `url("https://i.ibb.co/TH0X4w7/Ellipse-61.png")`, 'background-position':'center'  }}>
            <div className='bg-[#00000065] pb-32  '>
            <div className='p-12 '>
                <h1 className='text-xl text-[#005f57]' >Partner</h1>
                <h1 className='text-5xl text-white mt-6'> Our Key Partnership</h1>
            </div>
            <div className='flex   justify-around  sm:my-12 my-auto mt-20 mb-60 banglof w-12/12 mx-auto'>
                    <img className='imgs m-2 p-2   mx-auto '   src="https://i.ibb.co/1T44DcV/1200px-Amadeus-CRS-Logo-1.png"  alt="partner"/>
                    <img className='imgs m-2 p-2   mx-auto '  src=" https://i.ibb.co/yXWgGHt/Galileo-Travelport-1.png "  alt="partner"/>
                    <img className='imgs m-2 p-2   mx-auto '  src="https://i.ibb.co/XtrvGqQ/Vector-8.png" alt="partner"/>
            </div>
            </div>
            
            
        </div>
    );
};

export default Partners;