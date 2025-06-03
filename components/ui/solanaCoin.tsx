
'use client'

import dynamic from 'next/dynamic'


const Spline = dynamic(() => import('@splinetool/react-spline').then(mod => mod.default), {
  ssr: false,
})



export default function Cube() {
  return (
    <main>
      <Spline
        scene="https://prod.spline.design/dAdgigAj9dwps0ou/scene.splinecode" 

        className='max-w-[200px] max-h-[600px] bg-transparent'
        style={{ scale: "0.25",}}
      />
    </main>
  );
}
