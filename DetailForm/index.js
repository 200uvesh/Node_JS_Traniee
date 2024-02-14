function submit(){
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
  
    // Set Data from Local Storage

  localStorage.setItem("username" , username);
  localStorage.setItem("email" , email)
  localStorage.setItem("password"     , password)

 // alert(username + "  " + email +" "+ password+" ");

  // Retrive data from Local storage 
// Check The data is correct POr not

const checkUsername =  "Uvesh";
const checkEmail = "uveshahmad30@gmail.com"
const checkPassword = "@123"

if(checkEmail && checkUsername && checkPassword){

    alert( "User details sucessfully matched");
}






}