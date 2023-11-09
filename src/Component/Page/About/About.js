import React from 'react';

const About = () => {
    return (
        <div className=' ggt bgcolor  ' >
             <div className='bg-no-repeat bg-center   scale-75'    >
                <h1 className='text-2xl   ' style={{'color':'#005f57'}}> About</h1>
             <div class="  flex w-full  h-auto h-fit   ">
                <div class="grid  flex-grow card rounded-box place-items-center">
                    <h1 className='text-6xl text-bold text-white aaa'>What We Do</h1>
                    <p className='text-xs text-bold w-8/12 my-6 text-white'>Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private</p>
                    <div className=' p-2 m-4 my-12'>
                         
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
                <div class="divider  lg:divider-horizontal p-2 color-black"></div> 
                <div class="grid h-20 flex-grow card  rounded-box place-items-center mx-12">
                    <h1 className='text-6xl text-bold text-white'>Who We Are</h1>
                    <p className='text-xs text-bold w-8/12 my-6  text-white'>Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private</p>

                    <div>
                        <div className='flex'>
                            <div className='p-2 m-2'><img src="https://i.ibb.co/C80Hzkg/Rectangle-17.png" alt="" /></div>
                            <div className='p-2  m-2'>
                                <h1 className='text-2xl text-start  p-1 m-1  text-white'>Topic</h1>
                                <p className='text-xs w-8/12  text-white '>Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='p-2 m-2'><img src="https://i.ibb.co/p1mzpHr/Rectangle-18-8.png" alt="" /></div>
                            <div className='p-2  m-2'>
                                <h1 className='text-2xl text-start  p-1 m-1 text-white'>Topic</h1>
                                <p className='text-xs w-8/12  text-white '>Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private</p>
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