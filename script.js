//logic to update the table

// logic to copy the text (website,username,password)

function copyText(text){
  navigator.clipboard.writeText(text).then(
    ()=>{
      alert("Copied the text")
    },
    ()=>{
      alert("Failed")
    }
  )
}

//logic to hide the password
function hidePassword(password){
  let str = ""
  for (let index = 0; index < password.length; index++) {
    str +="*"
    
  }
  return str
}

// logic to delete the website
const deletepassword= (website)=>{
  let data = localStorage.getItem("passwords");
  let arr = JSON.parse(data);
  arrupdated = arr.filter((e)=>{
    return e.website != website

  })
  localStorage.setItem("passwords", JSON.stringify(arrupdated))
  alert(`Sucessfully Deleted ${website}s password`)
  showpasswords()

}

const showpasswords = ()=>{
let tb= document.querySelector("table")
let data = localStorage.getItem("passwords")
if (data==null || JSON.parse(data).length ==0)
  {tb.innerHTML=" Password Not Added:Enter Your Password Below"
}
else{
  tb.innerHTML=` <tr>
          <th>Website</th>
          <th>Username</th>
          <th>Password</th>
          <th>Delete</th>
        </tr>`
  let arr =JSON.parse(data)
  let str = ""
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    
str +=
  `<tr>
            <td>${element.website} <span  onclick="copyText('${element.website}')"class="material-symbols-outlined copybutton">
        content_copy
      </span></td>
            <td>${element.username} <span onclick="copyText('${element.username}')" class="material-symbols-outlined copybutton">
        content_copy
      </span> </td>
            <td>${hidePassword(element.password) }  <span onclick="copyText('${element.password}')" class="material-symbols-outlined copybutton">
        content_copy
      </span></td>
            <td><button class =" d_button" onclick="deletepassword('${element.website}')">Delete</button></td>
  </tr>`
}
tb.innerHTML= tb.innerHTML+str
}
website.value=""
username.value=""
password.value=""

}
showpasswords()


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
    //console.log('if part of the program')
    localStorage.setItem("passwords",JSON.stringify(json))
  }
  else{
    let json = JSON.parse(localStorage.getItem("passwords"))
    json.push({website:website.value,username:username.value,password:password.value})
    //console.log('else part of the program')
    localStorage.setItem("passwords",JSON.stringify(json))   
  }
  showpasswords()
})

