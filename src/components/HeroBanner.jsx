import React from 'react'

const HeroBanner = () => {
  return (
    <div>
      <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src="https://media.licdn.com/dms/image/v2/C4D16AQFWkm6nBOQrkQ/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1516923271017?e=2147483647&v=beta&t=lx0HhvxQDHseCMiDfkWHaa29EjMEORPT76k6PJJYt40"
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://img.freepik.com/free-photo/observation-urban-building-business-steel_1127-2397.jpg"
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://media.istockphoto.com/id/1696781145/photo/modern-building-in-the-city-with-blue-sky.jpg?s=612x612&w=0&k=20&c=POfayTyDe06tGX4CeJgS8-fb896MUC46dl3ZbHXBqN4="
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
  </div>
</div>
<div className="flex w-full justify-center gap-3 py-5">
  <a href="#item1" className="btn btn-lg">1</a>
  <a href="#item2" className="btn btn-lg">2</a>
  <a href="#item3" className="btn btn-lg">3</a>
  <a href="#item4" className="btn btn-lg">4</a>
</div>
    </div>
  )
}

export default HeroBanner
