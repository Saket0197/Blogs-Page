import React, { useContext } from 'react'
import { blogsContext } from '../App';

export default function Pagination() {

    const {page,totalPages,fetchPosts} = useContext(blogsContext);

    function goPrev() {
        if(page > 0)
            fetchPosts(page - 1);
    }

    function goNext() {
        if(page < totalPages)
            fetchPosts(page + 1);
    }

  return (
    <div>
        {
            (page !== 1) ? (page !== totalPages) ? 
            (<div>
                <button onClick={goPrev}>Previous</button>
                <button onClick={goNext}>Next</button>
                <span>{`${page} of ${totalPages}`}</span>
            </div>
            ) : (<div>
                <button onClick={goPrev}>Previous</button>
                <span>{`${page} of ${totalPages}`}</span>
            </div>) : (<div>
                <button onClick={goNext}>Next</button>
                <span>{`${page} of ${totalPages}`}</span>
            </div>)
        }
    </div>
  )
}
