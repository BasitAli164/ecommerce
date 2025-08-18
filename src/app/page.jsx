'use client'
import Hero from "@/components/Hero/Hero"
import Slider from "@/components/Slider/Slider"


function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-8 xl:gap-14">
      <Slider/>
      <Hero/>
    </div>
  )
}

export default Home
