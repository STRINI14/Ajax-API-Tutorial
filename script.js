// ! get request in Ajax

// let getData=document.getElementById("getData");
// //console.log("getData");
// getData.addEventListener('click',()=>{
//     let xhr=new XMLHttpRequest();
//     xhr.open('GET','ajaxdata.txt',true);
//    // console.log("I am get request");
//     xhr.onprogress=function(){
//         console.log("I am progress request");
//     }
//     xhr.onreadystatechange=function(){
//         console.log("Ready state is"+xhr.readyState);
//     }
//     xhr.onload=function(){
//         if(this.status===200){
//             console.log(this.responseText);
//         } else {
//             console.log("Page not found");
//         }
       
//     }
//     xhr.send();
//     console.log("I am last line");
// })



// ! post request in Ajax

// let getData=document.getElementById("getData");

// getData.addEventListener('click',()=>{
//     let xhr=new XMLHttpRequest();
//     xhr.open('POST','https://fakestoreapi.com/products',true);
  
//     xhr.onprogress=function(){
//         console.log("I am progress request");
//     }
//     xhr.onreadystatechange=function(){
//         console.log("Ready state is"+xhr.readyState);
//     }
//     xhr.onload=function(){
//         if(this.status===200){
//             console.log(this.responseText);
//         } else {
//             console.log("Page not found");
//         }
       
//     }
//     data={"title":"Ajax tutorial"};
//     xhr.send(data);
//     console.log("I am last line");
// })