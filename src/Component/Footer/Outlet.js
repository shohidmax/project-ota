import React from 'react';

const Outlet = () => {
    return (
        <div>
            <div>
            <div className='relative ttt' style={{'margin-top':'-60px'}}>
             <div className='flex justify-item-center border-2  rounded-lg bg-white shadow-2xl w-8/12 mx-auto absolute  inset-x-1    overflow-visible mttb' style={{'background-color':'#37464691'}}>
                <div class="flex flex-row  w-full ">
                    	<div class="grid flex-grow h-32 w-6/12 card  rounded-box ">
                            
                            <div className='flex flex-col'>
                                <h1 className='text-4xl text-white'>Subscribe To Our <br/> Newsletter</h1>
                                <p className='text-xs w-10/12 m-2 text-white'>lLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                
                            </div>
                        </div>   
                <div class="grid flex-grow h-32 w-6/12 card  rounded-box ">
                         
                            <div className='flex  mx-auto my-auto'>
                                <div class="join">
                                    <input class="input input-bordered join-item" placeholder="Email"/>
                                    <button class="btn join-item rounded-r-full">Subscribe</button>
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