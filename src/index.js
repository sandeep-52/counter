

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"



ReactDOM.render(<App />, document.getElementById("root"));



  
























// import "./index.css";

// let currDate = new Date(2020, 5, 5, 5);
// currDate = currDate.getHours();
// let greeting = "";
// const cssStyle = {};

// if (currDate >= 1 && currDate < 12) {
//   greeting = "good morning"
//   cssStyle.color = "green";
// }
// else if (currDate >= 12 && currDate < 19) {
//   greeting = "good afternoon";
//   cssStyle.color = "orange";
// }
// else {
//   greeting = "good night";
//   cssStyle.color = "black";
// }

// ReactDOM.render(
//   <>
//     <div>
//       <h1>Hello sir,<span style={cssStyle}> {greeting}</span></h1>
//     </div>
//   </>,
//    document.getElementById('root')
// );





















// const name = "sandeep";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// // inline css
// const heading = {
//   color: "blue",
//   TextTransform: "capitalize",
//   TextAlign: "center",
// }
// ReactDOM.render(
//   <>
//     <h1 style={heading}> my name is {name}</h1>
//     <div class="img-div">
// <img src={img1} alt="randomImage" />
// <img src={img2} alt="randomImage" />
// <img src={img3} alt="randomImage" />
// </div>
//   //</>,
//   document.getElementById('root')
// );
















// const name = "sandeep";
// const currTime = new Date().toLocaleTimeString();
// const currDate = new Date().toLocaleDateString();

// ReactDOM.render(
//   <>
// <h1>Hello, my name is {name}</h1>
// <p>current time is = {currTime} </p>
// <p>current Date is = {currDate} </p>

// </>,
// document.getElementById('root')
// );
// // // const arr = ['sandeep', 'yadav','student']
// // // In React v16 it's possible for render()
// // // to return an array of element
// // const flname = "sandeep yadav"
// // ReactDOM.render(
// // <>
// //   <h1>my name is {flname}</h1>
// //   <p>my lucky number is {3+3}</p>

// // {/* //   <React.Fragment>
// // // <h1> hello sandeep !!</h1>
// // // <p>plz like and share the link</p>
// // // </React.Fragment>, */}
// // </>,
// //   document.getElementById("root"));

// //   // var h1 = document.createElement("h1");
// //   // h1.innerHTML = "sandeep yadav";
// //   // document.getElementById("root").appendChild(h1);