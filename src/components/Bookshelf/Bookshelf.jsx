import { useState } from 'react';


const Bookshelf = () => {

    let initialState = {

        title:'',
        author: '',

    }

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);

      const [newBook, setNewBooks] = useState ({initialState});

      const handleInputChange = (event) => {
            const newBookData = {...newBook, [event.target.name]: event.target.value}
            setNewBooks (newBookData)
      }

      const handleSubmit = (event) => {
        event.preventDefault()
        setBooks ([...books,{title : newBook.title , author:newBook.author}])
        setNewBooks({author:'', title: ''})
      }



      return (
            <>
            <div className='bookshelfdDiv'>
                <div className='formDiv'>
                    <h2>Add Book</h2>
                <form onSubmit={handleSubmit}>
                <label htmlFor='title'> Title:</label>
                <input
  
                id='title'
                name='title'
                type='text'
                value={newBook.title}
                onChange={handleInputChange}
                />


                    <label htmlFor='author'> Author:</label>
                <input
                
                    id='author'
                    name='author'
                    type='text'
                    value={newBook.author}
                    onChange={handleInputChange}
        
                />

              
                <button type='submit'>Add Book</button>

                </form>

     </div>

            <div className='bookCardsDiv'>

                <ul>
                    {books.map((book,index)=> (
                        <li className='bookCard' 
                          key={index}>

                            <h2>{book.title}</h2>
                            <p>{book.author}</p>

                        </li>
                    
                    ))}
                </ul>
            </div>

         </div>            
            </>

      )

}


export default Bookshelf;