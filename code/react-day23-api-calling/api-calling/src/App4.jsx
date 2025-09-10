// // import React from 'react'
// // import { useState } from 'react'
// // import { useEffect } from 'react'


// // const App4 = () => {

// //   // const [data, setData] = useState([]);
// //   // useEffect(()=>{
// //   //   fetch("https://jsonplaceholder.typicode.com/product")
// //   //   .then((result)=>{
// //   //     result.json().then((res)=>{
// //   //       console.log(res);
// //   //       console.log("Data Fetched...!!");
// //   //     });

// //   //   }).catch((err)=>{
// //   //     console.log(err);
// //   //     console.log("Data failed to fetch....!!");
      
// //   //     setData(res);
// //   //   })
// //   // }, [])

// //   // console.log(data);


// //   const [data, setData] = useState([]);



// //   const fetchUsers = async() => {
// //     const res = await fetch("https://fakestoreapi.com/products");
// //     const data = await res.json();
// //     setData(data);
// //     console.log("Data is fetched successfully");
// // }


// // useEffect(()=> {
// //   fetchUsers();
// // })

  
// //   return (
// //     <>
    
// //  <div className="container mt-5">
// //       <div className="row">
// //         {data.map((item) => (
// //           <div className="col-md-4 mb-4" key={item.id}>
// //             <div className="card h-100">
// //               <img src={item.img} className="card-img-top" alt={item.title} />
// //               <div className="card-body">
// //                 <h5 className="card-title">{item.title}</h5>
// //                 <p className="card-text">Album ID: {item.albumId}</p>
// //                 <a href={item.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
// //                   View Full Image
// //                 </a>
// //               </div>

// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       </div>
    




// //     </>
// //   )
// // }

// // export default App4



// import React, { useState, useEffect } from 'react';

// const App4 = () => {
//   const [data, setData] = useState([]);

//   const fetchUsers = async () => {
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const jsonData = await res.json();
//       setData(jsonData);
//       console.log("Data is fetched successfully");
//     } catch (error) {
//       console.error("Failed to fetch data", error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []); 

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         {data.map((item) => (
//           <div className="col-md-4 mb-4" key={item.id}>
//             <div className="card h-100 w-100  ">
//               <img src={item.image} className="card-img-center "style={{width:"400px", height:"400px"}} alt={item.title} />
//               <div className="card-body">
//                 <h5 className="card-title">{item.title}</h5>
//                 <p className="card-text">${item.price}</p>
//                 <a href="#" className="btn btn-primary">
//                   Buy Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App4;



import React from "react";
import { useState, useEffect } from "react";

const App4 = () =>{

  const[data, setData] = useState([])

  useEffect(()=>{
    fetch("https://fakestoreapi.com/users")
    .then((result)=> result.json())
    .then((res)=>{
      console.log(res);
      console.log("data is fetched");
      setData(res);
    }).catch((err)=>{
      console.log("data not fetched...!!" , err);
      
    })
  }, [])
return(
  <>
  {/* <div className="container">
  <div className="row">
    {data.map((val) => (
      <div className="col-md-2">
        <div className="card h-100">
          <img src={val.image} alt={val.title} className="card-img-top" />

          <div className="card-body">
            <h5 className="card-title">{val.title}</h5>
            <p className="card-text">{val.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div> */}


<div className="container">
  <div className="row">
    {data.map((user, index) => (
      <div className="col-md-12 mb-4" key={index}>
        <h2>User ID: {user.id}</h2>
        <p><strong>Name:</strong> {user.name.firstname} {user.name.lastname}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address.number}, {user.address.street}, {user.address.city} - {user.address.zipcode}</p>
        <p><strong>Geo Location:</strong> Lat: {user.address.geolocation.lat}, Long: {user.address.geolocation.long}</p>
        <hr />
      </div>
    ))}
  </div>
</div>



  </>
)
}

export default App4;