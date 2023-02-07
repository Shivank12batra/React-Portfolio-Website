import React from 'react'

const About = () => {
  return (
  <div className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
        Hello and welcome to my world! I am Shivank Batra, a curious soul with a fascination for uncovering abstractions. I am currently on a journey to master the frontend ecosystem, specifically with React JS, and I'm continuously honing my skills by tackling algorithm problems on LeetCode.
        </p>
        <br/>
        <p className='text-xl'>
        When I'm not coding, I love to indulge in some sports and games like football and chess. And when I need to energize my mind and soul, I listen to some heavy metal songs, which are a blast! So, if you're looking for someone who's passionate, driven, and always eager to learn, I'm your guy. Let's create some magic together!
        </p>
    </div>
  </div>)
}

export default About