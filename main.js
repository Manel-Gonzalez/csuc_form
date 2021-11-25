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


    regex(firstname, 0, /^[A-Za-zÀ-ÿ]{2,30}$/, " *El nom ha de contenir entre 2 i 30 lletres.");
    regex(lastname, 1, /^[A-Za-zÀ-ÿ\s]{2,30}$/," *Els cognoms han de contenir entre 2 i 30 lletres.");
    regex(identification, 2, /^[0-9]{8}[A-Z]{1}$/, " *El DNI ha de ser del tipus 00000000X.");
    regex(email, 3, /^[A-Za-z0-9+_.-]+@(.+)$/, " *No és un email vàlid.");
    regex(phone, 4, /^[0-9+]{9,13}$/, " *El telèfon ha de ser numèric.");
    
});

let regex = (id, serial, rgx, message ) => {

    if (!rgx.test(id.value)){

        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
    }else{
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
    }
}


