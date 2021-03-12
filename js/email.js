//REFORMANDOMIVIDA
function sendMail(params){
  console.log("finmcion");

  var tempParams={
    to_name: document.getElementById("to_name").value,
    from_name: document.getElementById("from_name").value,
    message: document.getElementById("msj").value
  };

  emailjs.send('gmail','template_4i1c0yj',tempParams)
  .then(function(res){
    console.log("succes",  res.status);
  })
  console.log("semd");

}