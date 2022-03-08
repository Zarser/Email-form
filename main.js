function sendEmail(){
    Email.send({
        Host : "smtp.live.se",
        Username : "k.leandersson@live.se",
        Password : "password",
        To : 'k.leandersson@live.se',
        From : document.getElementbyID("email").value,
        Subject : "Ny kontakt form",
        Body : "name: " + document.getElementbyID("name").value
             + "<br> Email: " + document.getElementbyID("email").value
             + "<br> message: " + document.getElementbyID("message").value
    }).then(
      message => alert(message)
    );
}