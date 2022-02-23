import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';

import './App.css';
import axios from 'axios';

function App() {

  // ** Declare 'dispatch' and set it equal
  // to useDispatch invoked ** 
  const dispatch = useDispatch();

  // ** Trigger fetchBookList on page load **
  useEffect(() => {
    fetchBookList();
  }, []);

  // =============<GET Book List from server>============================
    // ** We want to get the books from the server **
    // ** when the application loads and when a new **
    // ** book is added **
  const fetchBookList = () => {
    axios.get('/books')
      .then(response=> {
        dispatch({
          type: `SET_BOOK_LIST`,
          payload: response.data 
        }); // End dispatch
      }) // End .then
      .catch(error => {
        console.log('The error in the fetchBookList GET is:', error);
        alert(`Could not GET books.`);
      })
  } 
  // =========<END GET>==========================================================

  return (
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        {/* Pass fetchBookList as a prop */}
        <BookForm fetchBookList={fetchBookList}/>
        <BookList />
      </main>
    </div>
  );
}

export default App;