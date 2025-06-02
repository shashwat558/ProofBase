
'use client'

import dynamic from 'next/dynamic'


const Spline = dynamic(() => import('@splinetool/react-spline').then(mod => mod.default), {
  ssr: false,
})



export default function Home() {
  return (
    <main>
      <Spline
        scene="https://prod.spline.design/MRUQhEU2o70Bnln9/scene.splinecode" 
        className='scale-125'
      />
    </main>
  );
}
