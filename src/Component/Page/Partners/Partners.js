import React from 'react';

const Partners = () => {
    return (
        <div class="relative h-fit flex flex-col justify-center bg-slate-900 overflow-hidden" style={{ backgroundImage: `url("https://i.ibb.co/TH0X4w7/Ellipse-61.png")`  }}>
            <div className='mt-20'>
                <h1 className='text-xl' style={{'color':'#005f57'}}>partner</h1>
                <h1 className='text-5xl text-white mt-12'> Our Key Partnership</h1>
            </div>
            <div className='flex  justify-around mt-20 mb-80 banglof'>
                    <img className='imgs'  src="https://i.ibb.co/1T44DcV/1200px-Amadeus-CRS-Logo-1.png"  alt="Itvfalian Trulli"/>
                    <img className='imgs'  src=" https://i.ibb.co/yXWgGHt/Galileo-Travelport-1.png "  alt="Itvfalian Trulli"/>
                    <img className='imgs'  src="https://i.ibb.co/XtrvGqQ/Vector-8.png" alt="Itvfalian Trulli"/>
            </div>
            
            
        </div>
    );
};

export default Partners;