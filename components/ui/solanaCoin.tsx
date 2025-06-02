
'use client'

import dynamic from 'next/dynamic'


const Spline = dynamic(() => import('@splinetool/react-spline').then(mod => mod.default), {
  ssr: false,
})



export default function Home() {
  return (
    <main>
      <Spline
        scene="https://prod.spline.design/dAdgigAj9dwps0ou/scene.splinecode" 

        className='min-w-[1200px] h-[600px] bg-transparent'
        style={{ scale: "0.45",}}
      />
    </main>
  );
}
