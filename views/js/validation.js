const form = document.querySelector("form")
const email = document.querySelector("input[type=email]")
const password = document.querySelector("input[type=password]")



form.addEventListener("submit", onSubmitFunction);


function onSubmitFunction(){
    if(email.value==="" || password.value===""){
        Event.preventDefault()
        alert("Please Fill the Form")
        return false
    }
}