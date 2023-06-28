import {createContext, useEffect,useState} from 'react';
import './App.css';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';

export const blogsContext = createContext();

export default function App() {

  const [loading,setLoading] = useState(false);
  const [posts,setPosts] = useState([]);
  const [page,setPage] = useState(null);
  const [totalPages,setTotalPages] = useState(null);

    async function fetchPosts(pageNo=1) {
        setLoading(true); 
        const url = `https://codehelp-apis.vercel.app/api/get-blogs?page=${pageNo}`;
        const response = await fetch(url);
        const result = await response.json();
        setPage(result.page);
        setPosts(result.posts);
        setTotalPages(result.totalPages);
        setLoading(false);
    }

  useEffect(() => {
    fetchPosts();
  },[]);

  return (
    <div>
        <header className='border-b-2 border-black'>
          <h1>Blogs Page</h1>
        </header>

        <blogsContext.Provider value={{posts,page,setPage,totalPages,fetchPosts}}>
            <main className='border-b-2 border-black'>
                {
                  loading ? <div className='spinner'></div> : <Blogs></Blogs>
                }
              </main>

              <footer>
                <Pagination></Pagination>
              </footer>
        </blogsContext.Provider>
    </div>
  );
}