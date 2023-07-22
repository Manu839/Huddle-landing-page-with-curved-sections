import React from 'react'
import desktop1 from '../assets/desktop1.png'
import desktop2 from '../assets/desktop2.png'
import desktop3 from '../assets/desktop3.png'
import mobile1 from '../assets/mobile1.png'
import mobile2 from '../assets/mobile2.png'
import mobile3 from '../assets/mobile3.png'
import screen from '../assets/screen.png'
import iconcommunities from '../assets/iconcommunities.png'
import iconmessages from '../assets/iconmessages.png'
import logo from '../assets/logo.png'
import CountUp from "react-countup";
import desktop4 from '../assets/desktop4.png'
import together from '../assets/together.png'
import conversation from '../assets/conversation.png'
import user from '../assets/user.png'
import mobile4 from '../assets/mobile4.png'

function SectionOne() {
  return (
    <div>

<div className=' font-Open Sans p-5 md:p-10'>
    <div className='flex gap-20 sm:gap-96  lg:mr-72 md:gap-x-96 my-3'>
      <img alt="img" className='h-5 md:h-7 my-4 md:ml-auto md:mr-auto' src={logo}></img> 
      <button className='text-pink border-pink hover:bg-lightPink hover:text-white hover:duration-500 border-2 border-pink-400 rounded-full  pl-4 pr-4 my-2 font-semibold '>Try It Free</button>
    </div>
    <div className='pt-28 pb-16 p-6 text-center text-2xl md:text-5xl'>
      <p className='font-bold font-Poppins'>Build The Community Your Fans Will Love </p>
    </div>
    <div className='text-center pb-14' >
      <p className='xl:pl-96 md:pl-32 md:pr-32 xl:pr-96 pb-12 sm:text-lg  text-center'>Huddle re-imagines the way we build communities. You have a voice , but so does your audience. Create connections with your user as you engage in genunine discussion. </p>
      <button className='bg-pink border-pink border-2 hover:bg-lightPink text-white font-semibold p-2 pr-5 pl-5 rounded-3xl '>Get Started for Free </button>
    </div>
    <div className='pb-14 '>
      <img alt="img" className=' md:w-2/4 ml-auto mr-auto h-auto' src={screen}></img>
    </div>
    <div className='md:flex justify-center'>
    <div className='text-center pb-14'>
      <img alt="img" className='mx-24 pb-4' src={iconcommunities}></img>
      <p className='text-4xl md:text-5xl font-bold'>          
      <CountUp
            duration={1.9}
            decimals={1}
            decimal="."
            start={0}
            end={1.4}
            enableScrollSpy={true}
            scrollSpyDelay={0}
          />k+</p>
      <p className='md:text-lg'>Communities Formed</p>
    </div>
    <div className='text-center'>
      <img alt="img" className='mx-24 pb-4 ' src={iconmessages}></img>
      <p className='text-4xl md:text-5xl font-bold'>
        <CountUp
            duration={1.9}
            decimals={1}
            decimal="."
            start={0}
            end={2.7}
            enableScrollSpy={true}
            scrollSpyDelay={0}
          />m+</p>
      <p className='md:text-lg'>Message Sent</p>
    </div>
    </div>
    <div className=''>
    <img alt="img" className='md:hidden' src={mobile1}></img>
    <img alt="img" className='md:block hidden' src={desktop1}></img>
    </div>
    <div className='md:flex flex-row-reverse'>
    <div className='bg-veryPaleBlue py-5'>
      <img alt="img" src={together}></img>
    </div>
    <div className='text-center bg-veryPaleBlue  p-2 md:py-20 xl:py-44'>
      <p className='font-bold py-5 text-xl md:text-4xl font-Poppins'>Grow Together</p>
      <p className='pb-5 xl:pl-36 md:pl-10 md:text-lg md:pr-10 xl:pr-36'>Generate meaningfull discussions with your audience and biuld a strong, loyal community. Think of the insightful conversation you miss out on with a feedback form.</p>
    </div>
    </div>
    <div>
      <img alt="img" className='md:hidden' src={mobile2}></img>
      <img alt="img" className='md:block hidden' src={desktop2}></img>
    </div>
    <div className='md:flex'>
    <div className='py-5'>
    <img alt="img" src={conversation}></img>
    </div>
    <div className='text-center p-2 md:py-20 xl:py-44'>
      <p className='font-bold py-5 text-xl md:text-4xl font-Poppins'>Flowing Conservation</p>
      <p className='pb-5 xl:pl-36 md:pr-10 md:text-lg md:pl-10 xl:pr-36 '>You wouldn't paginate a conservation in real life,so why do it online? Our threads have just-in-time loading for a more natural flow.
      </p>
    </div>
    </div>
    <div>
    <img alt="img" className='md:hidden' src={mobile3}></img>
    <img alt="img" className='md:block hidden' src={desktop3}></img>
    </div>
    <div className='md:flex flex-row-reverse'>
    <div className='py-5 bg-veryPaleBlue '>
    <img alt="img" src={user}></img>
    </div>
    <div  className='text-center bg-veryPaleBlue  p-2 md:py-20  xl:py-44'>
      <p className='font-bold py-5 text-xl md:text-4xl font-Poppins'>Your Users</p>
      <p className='pb-5 xl:pl-36 md:pl-10 md:text-lg md:pr-10 xl:pr-36'>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
    </div>
    </div>
    <div>
    <img alt="img" className='md:hidden' src={mobile4}></img>
    <img alt="img" className='md:block hidden' src={desktop4}></img>
    </div>
    <div className='py-5 text-center font-bold '>
      <p className='pb-5 md:pb-12 p-12 text-xl md:text-4xl font-Poppins '>Ready To Build Your Community?</p>
      <button className='bg-pink border-pink border-2 hover:bg-lightPink text-white font-semibold p-2 pr-5 pl-5 rounded-3xl '>Get Started for Free </button>
    </div>
    </div>


    </div>
  )
}

export default SectionOne