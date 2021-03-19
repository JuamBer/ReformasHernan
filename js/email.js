
function enviarCorreo() {
  const serviceID = 'gmail';
  var url = window.location.pathname;
  var templateID;
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var tel = document.getElementById("tel");
  var asunto = document.getElementById("asunto");
  var msg = document.getElementById("msg");
  var servicio = url;
  
  if(url=="/pages/contacto.html"){
    templateID = 'template_xla9nsd';
  }else{
    templateID = 'template_b1n98l6';
  }

  emailjs.send(serviceID, templateID, {
    name: name.value,
    email: email.value,
    tel: tel.value,
    asunto: asunto.value,
    msg: msg.value,
    servicio: servicio
  })
  .then(() => {
    alert('¡El Mensaje Se Ha Enviado Correctamente!');
  }, (err) => {
    alert(JSON.stringify(err));
  });

  name.value = "";
  email.value = "";
  tel.value = "";
  asunto.value = "";
  msg.value = "";

};

