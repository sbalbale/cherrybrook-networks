import React from 'react'
import Image from 'next/image';


const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full py-32'>
            <p className='text-xl tracking-widest uppercase text-[#f00043]'>Skills</p>
            <h2>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <a className='p-6 shadow-xl rounded-xl hover:sclae-105 ease-in duration-300' href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image
                        src='/assets/skills/python.png'
                        width='64'
                        height='64'
                        alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Python</h3>
                        </div>
                    </div>
                </a>
                <a className='p-6 shadow-xl rounded-xl hover:sclae-105 ease-in duration-300' href="https://www.java.com/en/" target="_blank" rel="noopener noreferrer">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image
                        src='/assets/skills/java.png'
                        width='64'
                        height='64'
                        alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Java</h3>
                        </div>
                    </div>
                </a>
                <a className='p-6 shadow-xl rounded-xl hover:sclae-105 ease-in duration-300' href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image
                        src='/assets/skills/javascript.png'
                        width='64'
                        height='64'
                        alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Javascript</h3>
                        </div>
                    </div>
                </a>
                <a className='p-6 shadow-xl rounded-xl hover:sclae-105 ease-in duration-300' href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image
                        src='/assets/skills/node.png'
                        width='64'
                        height='64'
                        alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NodeJS</h3>
                        </div>
                    </div>
                </a>
                <a className='p-6 shadow-xl rounded-xl hover:sclae-105 ease-in duration-300' href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image
                        src='/assets/skills/react.png'
                        width='64'
                        height='64'
                        alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>ReactJS</h3>
                        </div>
                    </div>
                </a>
                <a className='p-6 shadow-xl rounded-xl hover:sclae-105 ease-in duration-300' href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image
                        src='/assets/skills/nextjs.png'
                        width='64'
                        height='64'
                        alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Next.JS</h3>
                        </div>
                    </div>
                </a>
                <a className='p-6 shadow-xl rounded-xl hover:sclae-105 ease-in duration-300' href="https://isocpp.org/" target="_blank" rel="noopener noreferrer">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image
                        src='/assets/skills/c++.png'
                        width='64'
                        height='64'
                        alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </a>
                <a className='p-6 shadow-xl rounded-xl hover:sclae-105 ease-in duration-300' href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image
                        src='/assets/skills/css.png'
                        width='64'
                        height='64'
                        alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </a>
                <a className='p-6 shadow-xl rounded-xl hover:sclae-105 ease-in duration-300' href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image
                        src='/assets/skills/tailwind.png'
                        width='64'
                        height='64'
                        alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </a>
                <a className='p-6 shadow-xl rounded-xl hover:sclae-105 ease-in duration-300' href="https://www.arduino.cc/" target="_blank" rel="noopener noreferrer">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image
                        src='/assets/skills/arduino.png'
                        width='64'
                        height='64'
                        alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Arduino</h3>
                        </div>
                    </div>
                </a>
                <a className='p-6 shadow-xl rounded-xl hover:sclae-105 ease-in duration-300' href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image
                        src='/assets/skills/git.png'
                        width='64'
                        height='64'
                        alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Git</h3>
                        </div>
                    </div>
                </a>
                <a className='p-6 shadow-xl rounded-xl hover:sclae-105 ease-in duration-300' href="https://www.twilio.com/" target="_blank" rel="noopener noreferrer">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image
                        src='/assets/skills/twilio.png'
                        width='64'
                        height='64'
                        alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Twilio</h3>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    </div>
  )
}

export default Skills