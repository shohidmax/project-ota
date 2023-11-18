import React from 'react';

const About = () => {
    return (
        <div className=' ggt'>
             <div className=' bg-[#353434]'>
             <h1 className='text-2xl  text-[#005f57] py-4'> About</h1>
            <div className='sm:flex'>
                    <div>
                                <div class="  card rounded-box place-items-center">
                                <h1 className='text-xl sm:text-5xl text-bold text-white '>What We Do ?</h1> 
                                <p className='text-xs text-bold w-10/12 my-6 text-white'>Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private</p>
                                <div className=' p-2  my-2'>
                                    
                                    <div className='flex g-1 p-1 mx-auto'>
                                    <input type="checkbox" checked="checked" class="checkbox checkbox-secondary p-1 m-1" />
                                        <h2 className=' text-white'>Travel Agency problem solucatiom</h2>
                                    </div>
                                    <div className='flex g-1 p-1'>
                                    <input type="checkbox" checked="checked" class="checkbox checkbox-secondary p-1 m-1" />
                                        <h2 className=' text-white'>Travel Agency problem solucatiom</h2>
                                    </div>
                                    <div className='flex g-1 p-1'>
                                    <input type="checkbox" checked="checked" class="checkbox checkbox-secondary p-1 m-1" />
                                        <h2 className=' text-white'>Travel Agency problem solucatiom</h2>
                                    </div>
                                    <div className='flex g-1 p-1'>
                                    <input type="checkbox" checked="checked" class="checkbox checkbox-secondary p-1 m-1" />
                                        <h2 className=' text-white'> Travel Agency problem solucatiom</h2>
                                    </div>
                                </div>
                            </div>

                    </div>
                     {/* devider part  */}
                    <div>
                    <div class="divider  divider-horizontal p-2 color-black"></div>
                    
                    </div>
                    {/* next part  */}
                    <div>
                    <div class="grid  flex-grow card  rounded-box place-items-center mx-12">
                    
                    <h1 className='text-xl  sm:text-5xl text-bold text-white'>Who We Are ?</h1>
                    <p className='text-xs text-bold w-full my-6  text-white'>Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private</p>

                    <div>
                        <div className='flex'>
                            <div className='p-2 m-2'><img src="https://i.ibb.co/C80Hzkg/Rectangle-17.png" alt="" /></div>
                            <div className='p-2  m-2'>
                                <h1 className='text-2xl text-start  p-1 m-1  text-white'>Topic</h1>
                                <p className='text-xs w-10/12  text-white '>Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='p-2 m-2'><img src="https://i.ibb.co/p1mzpHr/Rectangle-18-8.png" alt="" /></div>
                            <div className='p-2  m-2'>
                                <h1 className='text-2xl text-start  p-1 m-1 text-white'>Topic</h1>
                                <p className='text-xs w-10/12  text-white '>Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private</p>
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

export default About;