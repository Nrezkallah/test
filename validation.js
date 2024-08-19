const form = document.getElementById("form")
const firstname = document.getElementById("FIRSTNAME")
const password = document.getElementById("PASSWORD")
const email = document.getElementById("EMAIL")
const confpass = document.getElementById("CONF-PASSWORD")
const Err = document.getElementById("err")

form.addEventListener('submit', (e) => {
    let errors = []
    // Check if the 'firstname' element exists (i.e., we're on the signup page)
    if (firstname) {
        errors = getsignupformserrors(firstname.value, email.value, password.value, confpass.value)
    } else {
        // We're on the login page (because signup page has no 'firstname' field)
        errors = getloginformerrors(email.value, password.value)
    }
    if (errors.length > 0) {
        // Prevent form submission if there are any errors
        e.preventDefault()
        Err.innerHTML= errors.join(" .")
    }
})

function getsignupformserrors(fname, mail, pass, confp) {
    let errors = []

    if (fname === '' || fname == null) {
        errors.push("First name is required")
        firstname.parentElement.classList.add("incorrect")
    }

    if (mail === '' || mail == null) {
        errors.push("Email is required")
        email.parentElement.classList.add("incorrect")
    }

    if (pass === '' || pass == null) {
        errors.push("Password is required")
        password.parentElement.classList.add("incorrect")
    }

    if (confp === '' || confp == null ) {
        errors.push("Password confirmation is required")
        confpass.parentElement.classList.add("incorrect")
    }
    if (confp !== pass){
        errors.push("Passwords do not match")
        confpass.parentElement.classList.add("incorrect")
        password.parentElement.classList.add("incorrect")
    }
    if(pass.length < 8){
        errors.push("Password must be at least 8 characters long")
        password.parentElement.classList.add("incorrect")
    }

    return errors
}
function getloginformerrors(mail, pass) {
    let errors = []

    if (mail === '' || mail == null) {
        errors.push("Email is required")
        email.parentElement.classList.add("incorrect")
    }

    if (pass === '' || pass == null) {
        errors.push("Password is required")
        password.parentElement.classList.add("incorrect")
    }

    return errors
}

const allinputs = [firstname, email, password, confpass].filter(input => input != null)

allinputs.forEach(input => {
    input.addEventListener('input', () =>{
        if(input.parentElement.classList.contains('incorrect')) {
          input.parentElement.classList.remove('incorrect')
          
        }
    })
})
 
