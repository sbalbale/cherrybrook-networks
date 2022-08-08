import React from 'react'

const ProjectItem = ({title, description, link, status}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#f00043] to-[##5E4E92]">
    <div className="py-5 overflow-y-hidden space-y-3">
        <div className="text-2xl font-bold text-[#353238]">{title}</div>
        <div className="text-md mx-2 text-[#353238]">
          {description}
          <br />
          <a className='font-bold underline' href={link} target="_blank" rel="noopener noreferrer">Check it out on Github!</a>
        </div>
        <div class="text-sm text-gray-500">{status}</div>
      </div>
  </div>



  )
}

export default ProjectItem