import React from 'react'
import ReactDom from 'react-dom'

//import CSS
import './index.css'

const book = [

  {
    title : 'Ikigai: The Japanese secret to a long and happy life',
    author : 'Héctor García',
    img: 'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg'
    
  },
  
  {
    title : 'The Alchemist',
    author : 'Paulo Coelho',
    img: 'https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg'
    
  }
]
const names= ['himanshu', 'bhardwaj']
  function BookList() {
  return (
    <section className='booklist'>
      {names}
    </section>
  )
}



const Book = (props) => {
  const {title, img, author, children} = props
  // const title = 'Ikigai: The Japanese secret to a long and happy life';
  // const author = 'Héctor García'
  return (
    <article className='book'>
      <img
        src={img}
        alt=' BOOK'
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
