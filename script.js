// let filterarray = [];

// let galleryarrary = [

//     {
//         id: 1,
//         name : "Chill",
//         src : "8 Online Courses Guaranteed To Level Up Your Music Production Skills.jpg",
//         pricee: "20$"
//     },

//     {
//         id: 2,
//         name : "HipHop",
//         src : "8 Online Courses Guaranteed To Level Up Your Music Production Skills.jpg",
//         pricee: "25$"
//     },

//     {
//         id: 3,
//         name : "Affro Beat",
//         src : "8 Online Courses Guaranteed To Level Up Your Music Production Skills.jpg",
//         pricee: "15$"
//     },

//     {
//         id: 4,
//         name : "Old-School",
//         src : "8 Online Courses Guaranteed To Level Up Your Music Production Skills.jpg",
//         pricee: "35$"
//     },

//     {
//         id: 5,
//         name : "POP",
//         src : "8 Online Courses Guaranteed To Level Up Your Music Production Skills.jpg",
//         pricee: "40$"
//     },

//     {
//         id: 6,
//         name : "Trap",
//         src : "8 Online Courses Guaranteed To Level Up Your Music Production Skills.jpg",
//         pricee: "25$"
//     }
// ]

// showgallery(galleryarrary);

// function showgallery(currarray){

//     document.getElementById("para").innerText = "";

//     for (var i=0;i<currarray.length;i++){
//         document.getElementById("card").innerHTML += `
//             <div class="item" id="card">
//              <img src="${currarray[i].src}">
//                 <h2>${currarray[i].name}</h2>
//                 <div class="price">${currarray[i].pricee}</div>
//                 <button class="addCart">
//                     Add To Cart
//                 </button>
//             </div>`
//     }
// }

// document.getElementById("myinput").addEventListener("keyup",function(){
//     let text = document.getElementById("myinput").value;

//     filterarray = galleryarrary.filter(function(a){
//         if(a.name.includes(text)){
//             return a.name
//         }
//     });
//     if(this.value ==""){
//         showgallery(galleryarrary);
//     }
//     else{
//         if(filterarray == ""){
//             document.getElementById("para").style.display = 'block';
//             document.getElementById("card").innerHTML = "";
//         }
//         else{
//             showgallery(filterarray);
//             document.getElementById("para").style.display = 'none';
//         }
//     }
// })

