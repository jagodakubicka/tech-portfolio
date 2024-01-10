import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen flex items-center justify-center relative'>
      {/* <div className='bg-none  xl:bg-cover xl:bg-no-repeat h-screen w-screen absolute translate-z-0 bg-opacity-20 '>
        <div className='xl:absolute  xl:left-0 xl:top-0 xl:w-screen xl:h-screen xl:bg-primary/90 xl:z-5'></div>
      </div> */}
      <h2 className='text-center text-4xl md:text-5xl xl:text-9xl z-10'>The <span className='text-accent'>Art</span> of Layers. <br />
      <span className='text-xl xl:text-2xl'>Exploring 3D Printing's Creative Depths</span>
      </h2>
      
    </div>
  )
}
