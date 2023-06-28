import React from 'react';
import Tags from './Tags';

export default function Card({post}) {
  return (
    <div>
        <h1 className='font-bold text-xl'>{post.title}</h1>
        <p>{`By ${post.author} on ${post.category}`}</p>
        <p>`Posted on ${post.date}`</p>
        <p>{post.content}</p>
        <Tags tags = {post.tags}></Tags>
    </div>
  )
}
