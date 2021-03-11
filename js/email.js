function sendMail(params){
  var tempParams={
    from_name:document.getElementById("from_name").value,
    from_email:document.getElementById("from_email").value,
    from_tel:document.getElementById("from_tel").value,
    message:document.getElementById("subject").value
  };

  emailjs.send("gmail","template_4i1c0yj",tempParams)
  .then(function(res){
    console.log("succes", res.status);
  })
}