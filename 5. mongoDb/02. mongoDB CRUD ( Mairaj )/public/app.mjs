
/** imports  */
import axios from 'axios'
/** --- */





// const

























// let name = "alice"

// window.getWeather = function (event) {


//     let cityName = document.querySelector("#cityName").value;

//     axios.get(`/weather/${cityName}`)
//         .then(function (response) {
//             // handle success
//             console.log(response.data);
//             // {
//             //     city: 'Beijing',
//             //     tempInC: 30,
//             //     humidity: 56,
//             //     high: 32,
//             //     low: 18
//             // }

//             document.querySelector("#result").innerHTML =
//                 `current temperature is ${response.data.tempInC}°C`

//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error.data);
//             document.querySelector("#result").innerHTML = "error in getting weather data"
//         })



// }


// document
//     .querySelector("#postCommentForm")
//     .addEventListener("submit", async (event) => {
//         event.preventDefault();

//         let nameInput = document.querySelector("#nameInput").value;
//         let commentInput = document.querySelector("#commentInput").value;

//         try {
//             const axiosResponse = await axios.post(`/comment/${nameInput}`, {
//                 comment: commentInput
//             })

//             // {
//             //     message: "comment posted successfully"
//             // }
//             console.log(axiosResponse.data);

//             document.querySelector("#previousComments").innerHTML +=
//                 `<div class="comment">
//                 <h4 class="commentName">${nameInput}:</h4>
//                 <p class="commentText">${commentInput}</p>
//             </div>`

//         } catch (error) {
//             // handle error
//             console.log(error.data);
//             document.querySelector("#result").innerHTML = "error in getting weather data"
//         }


//     })


// const getAllComments = async () => {
//     const axiosResponse = await axios.get("/comments");

//     console.log("axiosResponse", axiosResponse); // []

//     axiosResponse?.data?.data.map((eachComment) => {
//         document.querySelector("#previousComments").innerHTML +=
//             `<div class="comment">
//                 <h4 class="commentName">${eachComment.name}:</h4>
//                 <p class="commentText">${eachComment.comment}</p>
//             </div>`
//     })



// }
// setTimeout(() => {
//     getAllComments();
// }, 100)

