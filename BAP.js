function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const PhoneNumber=event.target.PhoneNumber.value;
    const obj = {
        name,
        email,
        PhoneNumber
    }
    // localStorage.setItem(obj.email,JSON.stringify(obj));
    // showNewUserOnScreen(obj)

    axios.post("https://crudcrud.com/api/6d66a0ab48e044ad9c8bbec1fbc2979f/appoinmentData",obj)
    .then((response)=>{
        showNewUserOnScreen(response.data)
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
}

function showNewUserOnScreen(user){
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    document.getElementById('PhoneNumber').value = '';
    const parentNode= document.getElementById('users');
    const childHTML = `<li id='${user._id}'> '${user.name}' - '${user.email}' - '${user.PhoneNumber}' <button onclick=deleteUser('${user._id}')>Delete</button></li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/6d66a0ab48e044ad9c8bbec1fbc2979f/appoinmentData")
    .then((response) => {
    console.log(response)
    for(var i=0; i< response.data.length; i++){ 
        showNewUserOnScreen(response.data[i])
    }
    })
    .catch((error) => { console.log(error)
    })
})

function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/6d66a0ab48e044ad9c8bbec1fbc2979f/appoinmentData/${userId}`)
    .then((response)=>{
        removeUserFromScreen(userId);
    })
    .catch((error)=>{
        console.log(error)
    })
    // localStorage.removeItem(email);
    
}

function removeUserFromScreen(userId){
    const parentNode = document.getElementById("users");
    const childNodeToBeDeleted= document.getElementById(userId);
   if(childNodeToBeDeleted){
    parentNode.removeChild(childNodeToBeDeleted)
   }
}