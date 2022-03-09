import React from 'react';
import ReactDOM from 'react-dom';
//css

import './index.css';

function Booklist() {
  return (
  <section className='booklist'>
    <Book/>
  </section>
  );
}

const Book = () =>{
  return <article className='book'>
    <Image></Image>
    <Title></Title>
    <Author></Author>
  </article>
}

const Image = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/617ni21vHsL._AC_UL302_SR302,200_.jpg" alt=''/>
const Author = () => <h4 style={{color:"#617d98",fontSize:"0.75rem",marginTop:"0.25rem",letterSpacing:"0.2rem"}}>Rao N,D,V,Prasada</h4>
const Title = () => <h1>Wren & Martin High School English Grammar</h1>

ReactDOM.render(<Booklist/>,document.getElementById('root'));
