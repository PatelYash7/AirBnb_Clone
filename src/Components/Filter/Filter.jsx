import React,{useState} from 'react'
import links from '../../Utils/images-links'

function Filter() {
  const [SelectedFilter,setSelectedFilter]=useState();
  return (
    <>
    <div className='px-6 py-2 overflow-hidden hover:overflow-x-auto hover:scrollbar-thin transition-all   scrollbar-track-gray-300 scrollbar-thumb-gray-400 scrollbar-thumb-thin flex w-[90%] m-auto'>
      {
         links.map((item,i)=>{
          return(
            <div key={i} onClick={()=>{
              setSelectedFilter(i);
              console.log(i)
            }}
            className={` ${i==SelectedFilter && "class1"} px-2 cursor-pointer py-6 flex flex-col justify-center items-center min-w-[85px] border-b-2 border-white mr-2 w-full opacity-70 hover:opacity-100 hover:border-b-2 hover:border-black hover: transition-all`}>
              <img src={item.imgSrc} alt="img" className='w-[1.5rem] h-[1.5rem] decoration-font-grey text-grey  object-contain'/>
              <p className={ `${i==SelectedFilter && " class2"} text-[0.7rem] w-full text-font-grey font-bold text-center hover:text-black `}>{item.label}</p>
            </div>
          )
         })
      }

    </div>
    </>
  )
}

export default Filter