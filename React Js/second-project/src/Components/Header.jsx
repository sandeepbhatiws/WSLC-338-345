import React from 'react'

// // Method 1
// export default function Header(props) {
//   return (
//     <div>
//       <h1>{ props.head }</h1>
//       <p>{ props.tag }</p>
//       <p>{ props.description }</p>
//     </div>
//   )
// }

// // Method 2
// export default function Header(props) {
//     console.log(props);
//     return (
//       <div>
//         <h1>{ props.head }</h1>
//         <p>{ props.children }</p>
//         <p>{ props.description }</p>
//       </div>
//     )
// }

// Method 3
export default function Header({ head, description, children }) {
    return (
      <div>
        <h1>{ head }</h1>
        <p>{ children }</p>
        <p>{ description }</p>
      </div>
    )
}
