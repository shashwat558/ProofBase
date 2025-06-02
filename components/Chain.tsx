
'use client'

import dynamic from 'next/dynamic'


const Spline = dynamic(() => import('@splinetool/react-spline').then(mod => mod.default), {
  ssr: false,
})

export default function Unchain() {
  return (
    <main>
      <Spline
        scene="https://prod.spline.design/hcFbTgeftE4jkout/scene.splinecode" 
        style={{ width: '100%', height: '100%', minHeight: '600px', rotate: "100deg"}}
      />
    </main>
  );
}