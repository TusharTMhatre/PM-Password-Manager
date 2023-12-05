//logic to update the table 
let tb =document.querySelector("table")
tb.innerHTML= tb.innerHTML+str
let data = localStorage.getItem("passwords")
if (data==null){
  tb.innerHTML="No data to show"
}
else{
  let arr = JSON.parse(data);





  for (let index =0;index<arr.length;index++ ){
    const element = arr[index];
    let str = ` <tr>

          <td>${element.website}</td>
          <td>${element.username}</td>
          <td>${element.password}</td>
         <td>${"Delete"}</td>
         
  </tr>`
  }
  tb.innerHTML= tb.innerHTML+str
}





// logic to save password on button click
document.querySelector(".btn").addEventListener("click",(e)=>{
  // e taking as argument in eventlistner and  e.preventDefault() to prevent the submission of form,
  e.preventDefault()
  //console.log("Clicked")
  // id is directly use as a variable in Javascript so we get values
  console.log(website.value,username.value,password.value)

  // logic to saved data in local storage

  //creates passwords variable
  let passwords =localStorage.getItem("passwords")
  console.log(passwords)

  if (passwords==null){
    //console.log("No record found")
    let json =[]
    json.push({website:website.value,username:username.value,password:password.value})
    console.log('if part of the program')
    localStorage.setItem("passwords",JSON.stringify(json))

  }
  else{
    let json = JSON.parse(localStorage.getItem("passwords"))
    
    
    json.push({website:website.value,username:username.value,password:password.value})
    console.log('else part of the program')
    localStorage.setItem("passwords",JSON.stringify(json))

    

  }
})