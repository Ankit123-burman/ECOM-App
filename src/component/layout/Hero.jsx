import React from 'react'
import { Link } from 'react-router';
// import heroImg from '';

const Hero = () => {
  return (
   <section id='bg' className='relative' >
    <img src="../../assets/rabbit-hero.webp"  className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover'/>

    <div id='im'  className='absolute bg-opacity-5 inset-0  flex items-center justify-center' >
      <div className='text-center text-white p-6'>
        <h1 className='text-4xl md:text9xl font-bold tracking-tighter uppercase mb-4' >
          Vacation <br />Ready
        </h1>
        <p className='text-sm tracking-tighter md:text-lg mb-6' >
          Explore our vaction-ready outfits with fast worldwide shipping.
        </p>
        <Link to="#" className="bg-white text-gray-950 px-6 rounded-sm text-lg" >
           Shop Now
        </Link>
      </div>
    </div>
   </section>
  )
}

export default Hero