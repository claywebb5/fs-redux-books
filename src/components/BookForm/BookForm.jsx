import {useState} from 'react';
import axios from 'axios';


// Pass fetchBookList as a prop
function BookForm({ fetchBookList }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Adding book`, {title, author});
    // =======<POST>================================================
    // TODO - axios request to server to add book
     // When we add a new book, we need to send it to the server
    axios.post('/books', {title, author})
      .then(response => {
        // Clear the form inputs
        setTitle('');
        setAuthor('');
        // Fetch the latest book list data from the server
        fetchBookList();
      })
      .catch(error => {
        console.log('The POST error is:', error);
        alert('No book for you!!!');
      });
  };

  return (
    <section>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input 
          required 
          placeholder="Title" 
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input 
          required 
          placeholder="Author" 
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <button type="submit">
          Add Book
        </button>
      </form>
    </section>
  );
}

export default BookForm;