import React ,{useState}from 'react'
import Card from './Card'



function CardFlex({images}) {
  const data=images.map((item,i)=>{
      return item.urls
  })
  const desc=images.map((item,i)=>{
    return item.alt_description;
  })

  const groupedData=[];
  for (let i = 0; i < data.length; i += 5) {
    groupedData.push(data.slice(i, i + 5).map(obj=>obj.regular));
  }

  // For description
  const groupedDesc=[];
  for (let i = 0; i < desc.length; i+=5) {
    groupedDesc.push(desc.slice(i,i+5).map(obj=>obj))
  }

  return (
    <>
    <div className='flex justify-center items-start flex-wrap'>
     {
        groupedData.map((card,i)=>{
            return(
                <Card card={card} key={i}/>
            )
        })
     }
    </div>
    
    </>
  )
}

export default CardFlex