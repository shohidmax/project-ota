import React from 'react';

const Outlet = () => {
    return (
        <div>
            <div>
            <div className='relative ttt flex'>
             <div className='flex md:flex-row justify-item-center border-2  rounded-lg bg-white shadow-2xl w-8/12 mx-auto absolute -mt-16  inset-x-1    overflow-visible mttb bgsub'>
                <div class="  w-full ">
                    	<div class=" flex flex-grow   w-6/12   card mx-auto rounded-box ">
                            
                            <div className='flex flex-col '>
                                <h1 className='text-xl sm:text-5xl text-white '>Subscribe To Our <br/> <span className='text-[#005f57]' >Newsletter</span></h1>
                                <p className='text-xs w-10/12 text-center m-2 text-white sm:flex  hidden'>lLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                
                            </div>
                   </div>   
                <div class="  w-12/12 card p-4 rounded-box  ">
                         
                            <div className='flex  mx-auto  my-auto '>
                                <div class="join">
                                    <input class="input sm:btn-md input-bordered join-item btn-sm w-3/5 border-red-200"    placeholder="Email to subscribe"/>
                                    <button class="btn sm:btn-md join-item rounded-r-full btn-sm border border-rose-400 ">Subscribe</button>
                                </div>
                            </div>
                </div>
                </div>
            </div>
            
        </div>
            </div>
            
        </div>
    );
};

export default Outlet;