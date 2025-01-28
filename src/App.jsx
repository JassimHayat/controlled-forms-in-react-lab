// src/App.jsx
import { use, useState } from 'react';
import './App.css';
import Bookshelf from './components/Bookshelf/Bookshelf.jsx';

const App = () => {

  let initialState = {

        title : '',
        author : '',
      }

     const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },

  ]);
  

  const [newBook,setNewBooks] = useState ({initialState})
 
  const handleInputChange = (event) => {
    const newBookData = {...newBook,[event.targt.name]:event.targt.value}
    
  }
  // const handleInputChange = (event)=> {

  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </>
  );
};

export default App;
