import React, { useContext } from 'react';
import Card from './Card';
import { blogsContext } from '../App';

export default function Blogs() {
    const {posts} = useContext(blogsContext);
  return (
    <div>
        {
            posts.map((post) => {
                return <Card key={post.id} post = {post}></Card>
            })
        }
    </div>
  )
}
