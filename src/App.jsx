import React from 'react'
import FeatureSection from './components/FeatureSection'
import CTAButton from './components/CTAButton'
import NutritionSection from './components/NutritionSection'
import GastroHealthSection from './components/GastroHealthSection'
import PrebioticsSection from './components/PrebioticsSection'

const App = () => {
  return (
    <div className='mx-auto '>
        <header className='max-w-[536px] mx-auto text-center mt-8'>
          <h2 className='text-[40px] font-semibold tracking-[0.25px] leading-[120%]'> What makes us different makes them stronger</h2>
        </header>
       <FeatureSection />
       <CTAButton />
       <NutritionSection />
       <GastroHealthSection />
       <PrebioticsSection />
    </div>
  )
}

export default App
