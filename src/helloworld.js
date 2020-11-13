import React from 'react'
import ReactDom from 'react-dom'





//#### Creating a component with simple function and returning HTML
// function Greeting(){
//   return <h1> Hello world started React </h1>;
// }

//###### Creating component with arrow function and returning JSX
// const Greeting  = () => {
//   return React.createElement('h1', {}, 'hello Worl dfrom react JSX')
// }

//  ** JSX RULES ***//

//return a single element from a component
//use camelCase for HTML elements for eg onclick -> onClick
//className insted of Class 
// close every element even tags like img and input
//formating



// function Greeting(){
//   return (
//     <div>
//       <h3> Hello World</h3>
//       <ul>
//         <li>
//           <a href="#">hello world from 1 page</a>
//         </li>
//       </ul>
//     </div>
//   )
// }


//### Creating component with nested Elements

function Greeting(){
  return(
    <div>
      <Person/>
      <Message/>
    </div>
  )
}

const Person = () => <h2>Himanshu Bhardwaj</h2>

const Message = () => <p>Keep Going .............</p>

ReactDom.render(<Greeting/>, document.getElementById('root'))