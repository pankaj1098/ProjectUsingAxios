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
    const childHTML = `<li id='${user.email}'> '${user.name}' - '${user.email}' - '${user.PhoneNumber}'</li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}