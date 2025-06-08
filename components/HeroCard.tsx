
'use client'

import Spline from '@splinetool/react-spline';









export default function NftCard() {
  return (
    <main className="min-w-full h-[40pc] flex items-center justify-center">
      <div className="lg:w-[30pc] lg:h-[50pc] h-[26pc] w-[19pc]  animate-spin-z">
        <Spline
          scene="https://prod.spline.design/MRUQhEU2o70Bnln9/scene.splinecode"
          
          className='scale-90 w-[100%] h-[100%] max-sm:w-[50%] max-sm:h-[50%]'
        />
      </div>
    </main>
  );
}
