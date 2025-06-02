
'use client'

import dynamic from 'next/dynamic'


const Spline = dynamic(() => import('@splinetool/react-spline').then(mod => mod.default), {
  ssr: false,
})





export default function NftCard() {
  return (
    <main className="min-w-full h-[40pc] flex items-center justify-center">
      <div className="w-[30pc] h-[50pc] animate-spin-z">
        <Spline
          scene="https://prod.spline.design/MRUQhEU2o70Bnln9/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
          className='scale-90'
        />
      </div>
    </main>
  );
}
