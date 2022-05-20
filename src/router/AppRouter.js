import React from 'react'
import { BrowserRouter , Route, Routes, Navigate } from 'react-router-dom';
import BooksList from '../components/BooksList';
import AddBook from '../components/AddBook';
import Header from '../components/Header';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../components/EditBook';


function AppRouter() {
    const [books, setBooks] = useLocalStorage('books',[])


    return (
        
        
            <BrowserRouter>
               <div>
               <Header />
                <div className='main-content'>

                    <Routes>
                        <Route 
                        exact="true" element={<BooksList 

                            books={books} setBooks={setBooks}
                        />} path="/">
                      
                        </Route>
                        <Route       
                            exact="true" element={<AddBook
                            books={books} setBooks={setBooks} 

                            />}
                            path="/add"
                            >
                        </Route>
                        <Route exact="true" element={<EditBook
                            books={books} setBooks={setBooks} />}
                            path="/edit/:id"
                        ></Route>
                        <Route element={()=> <Navigate to='/' replace/>}
                        >
                        </Route>
                    </Routes>
                </div>
               </div>
            </BrowserRouter>
        
    )
}

export default AppRouter