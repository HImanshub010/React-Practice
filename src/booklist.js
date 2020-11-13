import React from 'react'
import ReactDom from 'react-dom'

//import CSS
import './index.css'



// #####CREATING book, author, image, title as seperate components

// const Book = () => {
//   return (
//     <article>
//       <Image></Image>
//       <Title></Title>
//       <Author></Author>
//     </article>
//   )
// }

// const Image = () => (
//   <img
//     src='https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg'
//     alt='IKIGAI BOOK'
//   />
// )

// const Title = () => (
//   <h1>Ikigai: The Japanese secret to a long and happy life</h1>
// )
// const Author = () => <h4  style={{color:'#617d988', fontSize:'0.75rem', marginTop: '0.25rem'}}>Héctor García</h4>



const firstbook = {
  title : 'Ikigai: The Japanese secret to a long and happy life',
  author : 'Héctor García',
  img: 'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg'

}

const seconedBook = {
  title : 'The Alchemist',
  author : 'Paulo Coelho',
  img: 'https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg'

}
function BookList() {
  return (
    <section className='booklist'>
      <Book 
      author = {firstbook.author}
      img= {firstbook.img}
      title = {firstbook.title}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolores accusamus nisi beatae soluta mollitia repudiandae quod maxime provident reiciendis quam, doloribus nihil ratione in enim. Aliquid quo possimus cupiditate!
        </p>
      </Book>
      <Book 
      author = {seconedBook.author}
      img= {seconedBook.img}
      title = {seconedBook.title}/>
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
