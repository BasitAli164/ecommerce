'use client'
import Hero from "@/components/Hero/Hero"
import Slider from "@/components/Slider/Slider"


function Home() {
  return (
    <div className="flex gap-2 md:gap-14">
      <Slider/>
      <Hero/>
    </div>
  )
}

export default Home
