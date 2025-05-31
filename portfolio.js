function sendMail(){
    var params = {
        name: document.getElementsByClassName("namebox").value ,
        name: document.getElementsByClassName("emailbox").value ,
        name: document.getElementsByClassName("messagebox").value ,
    };
    const serviceID = "service_hdazgg3";
const templateID = "template_0r2xi5p"

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementsByClassName("namebox").value = "";
        document.getElementsByClassName("emailbox").value = "";
        document.getElementsByClassName("messagebox").value = "";
        console.log(res);
        alert("Your message send successsful");
    })
.catch((err) => console.log(err));
}