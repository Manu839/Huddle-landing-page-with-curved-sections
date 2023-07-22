import React from 'react'
import mobile5 from '../assets/mobile5.png'
import email from '../assets/email.png'
import phone from '../assets/phone.png'
import desktop5 from '../assets/desktop5.png'
import iconmessages from '../assets/iconmessages.png'

function SectionTwo() {
  return (
    <div>


<div className='pt-5 md:pl-10 md:pr-10'>
    <img alt="img" className='sm:hidden' src={mobile5}></img>
    <img alt="img" className='sm:block hidden ' src={desktop5}></img>
    </div>
    <div className='md:flex flex-row-reverse md:pl-10 md:pr-10'>
    <div className='bg-veryDarkCyan text-white p-5 xl:pl-32 xl:pr-32 xl:pt-20'>
      <p className='font-bold pb-4 text-2xl font-Poppins'>NEWSLETTER</p>
      <p className='pb-4'>To recieve tips on how to grow your community, sign up to our weekly newsletter. We'll never send you span or pass on your email address</p>
      <div className='md:flex md:gap-5'>
      <textarea className='rounded-md w-full'></textarea><br></br><br></br>
      <button className='bg-pink border-pink border-2 hover:bg-lightPink text-white font-semibold p-2 pr-5 pl-5 float-right rounded-md '>Subscribe </button></div>
    </div>
    <div>
    <div className='text-white pl-5 pr-5 py-16 bg-veryDarkCyan xl:pl-32 xl:pr-32 xl:pt-20'>
      <div className='flex'>
      <img alt="img" src={iconmessages}></img>
      <p className='text-3xl'>Huddle</p></div>
      <p className='py-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis itaque repellat laboriosam! Rem quo facilis earum nisi eum minus blanditiis dolores autem molestiae, esse, voluptatum iste. Facilis, sed eos.</p>
    </div>
    <div className='bg-veryDarkCyan pl-5 pb-5 xl:pl-32 xl:pr-32 text-white'>
      <div className='flex gap-5 pb-5'>
    <img alt="img" src={phone}></img> 
    <p>Phone: +1-543-123-4567</p></div>
    <div className='flex gap-5 pb-5'>
    <img alt="img" src={email}></img>
    <p>example@company.com</p>
    </div>
    </div>
    </div>

    </div>
    <div>
    </div>

    </div>
  )
}

export default SectionTwo