



// // *Promises

// // function getUserData(userId){
// //     return new Promise((resolve , reject)=>{
// //       setTimeout(() => {
// //         resolve({id:userId , name:"Jhon Doe"})
// //       }, 1000);  
// //     })
// // }



// function getPosts(userId){
//     return new Promise((resolve , reject)=>{
//        setTimeout(() => {
//         resolve([{id:1 , title:"Post-1"} , {id:2 , title:"Post 2"}])
//        }, 1000); 
//     })
// }

// function getComments(postId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(["Comment 1", "Comment 2"]), 1000);
//     });
// }


// // getUserData(1).then((user)=>{
// //     console.log("User:" , user);
// //     return getPosts(user.id)
// // })
// // .then((post)=>{
// //     console.log("Post" , post)
// //     return getComments(post[0].id)
// // }).then((comments)=>{
// //     console.log("Comments" , comments)
// // }).catch((error)=>{
// //     console.log("Error" , error)
// // })



// // promise ---> then().catch() , async/ await

// function getUserData(userId){
//     return new Promise((resolve , reject)=>{
//       setTimeout(() => {
//         resolve({id:userId , name:"Jhon Doe"})
//       }, 1000);  
//     })
// }



// async function fetchData(){
//     const user = await getUserData(1);
//     console.log("User" , user);
//     const posts = await getPosts(user.id)
//     console.log("posts" , posts)
//     const comment = await getComments(posts[0].id)
//     console.log(comment)
// }

// fetchData()

fetch("https://api.githubasdlasdlisalkd.com/users/Aestheticsuraj234").then((value) => {
    return value.json()
}).then((result)=>{
    console.log(result)
})
.catch((err) => {
    console.log(err)
}).finally(()=>{
    console.log("Always Run")
})





async function fetchGithubData(){
    const res = await fetch("https://api.github.com/users/Aestheticsuraj234");
    const data = await res.json();

    console.log(data)
}

fetchGithubData();