let id = (id) => document.getElementById(id);


let classes = (classes) => document.getElementsByClassName(classes)

let username = id("firstname"),
    lastname = id("lastname"),
    identification = id("identification"),
    email = id("email"),
    phone = id("phone"),
    form = id("form")
    error = classes("error");

let errorMsg = document.getElementsByClassName('error');

form.addEventListener("submit", (e) => {
    e.preventDefault();


    regex(firstname, 0, " *El nom no pot estar buit");
    regex(lastname, 1, " *El cognom no pot estar buit");
    regex(identification, 2, " *El DNI no pot estar buit");
    regex(email, 3, " *El email no pot estar buit");
    regex(phone, 4, " *El telefon no pot estar buit");
});

let regex = (id, serial, message) => {

    if (id.value === ""){
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
    }else{
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
    }
}


