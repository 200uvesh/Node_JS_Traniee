 
function submit(){


const username = document.getElementById("username")
const email = document.getElementById("email")
const message = document.getElelmentBYId("message")

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : username,
        Password : "password",
        To : email,
        From : "uveshahmad30@gmail.com",
        Subject : "ContactForm",
        Body :message
    }).then(
      message => alert(message)
    );

     

 
    }
  