const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {
    Email.send({
        Host: 'smtp.mailtrap.io',
        Username: '3ce6581ad2e5e1',
        Password: '582c6cbecdbd60',
        To : 'k.leandersson@live.se',
        From : inputs.elements['email'].value,
        Subject : "Ny kontakt",
        Body : inputs.elements['message'].value + '<br>' + inputs.elements['name'].value + '<br>' + inputs.elements['email'].value
        
    })
    .then(message=>alert('Meddelandet har skickats!')
    );
  })