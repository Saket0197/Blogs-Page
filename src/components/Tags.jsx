import React from 'react'

export default function Tags({tags}) {
  return (
    <div>
        {
            tags.map((tag,index) => {
                return <span key={index}>`#${tag}`</span>
            })
        }
    </div>
  )
}
