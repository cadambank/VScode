import React from 'react';
import ReactDOM from 'react-dom';
//css

import './index.css';
const booklist = [
  {
    id : 1,
    title : "Wren & Martin High School English Grammar",
    author : "Rao N,D,V,Prasada",
    img : "https://images-eu.ssl-images-amazon.com/images/I/617ni21vHsL._AC_UL302_SR302,200_.jpg"
  },
  {
    id:2,
    title : "How to Catch a Leprechaun",
    author : "Adam Wallace",
    img : "https://images-na.ssl-images-amazon.com/images/I/81hSK0bkkFL._AC_UL604_SR604,400_.jpg"
  },
  {
    id:3,
    title : "The Wok: Recipes and Techniques",
    author : "J. Kenji López-Alt",
    img : "https://images-na.ssl-images-amazon.com/images/I/51lKcHdQvJL._AC_UL604_SR604,400_.jpg"
  },
]



function Booklist() {
  return (
  <section className='booklist'>
    
    {
      booklist.map((book,index)=>{
          return <Book
          key = {book.id}
          {...book}
          />
        }
      )
    }  
  </section>
  );
}

const clickHandler = () =>{
    alert("Hello World");
  };

  
const Book = (props) =>{
  const {img,title,author} = props
  return <article className='book'>
    <img src={img} alt=''/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    <button type='button' onClick={()=>clickHandler(title)}>
      AlertTitle
    </button>
    <button type='button' onClick={()=>clickHandler(author)}>
      AlertAuthor
    </button>
  </article>
}


ReactDOM.render(<Booklist/>,document.getElementById('root'));
