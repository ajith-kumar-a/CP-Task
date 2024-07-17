
function checkAll() {
    //   get value by naming convention  second time uploading
    let ufname = document.myform.fname.value;
    const regName = "^[a-zA-Z]{3,15}$";

    if (ufname.trim() === "") {
        window.alert("* Name field is required");
        return false;
    }

    if (!ufname.trim().match(regName)) {
        window.alert("User Name must contain only character min-3 and max - 15");
        return false;
    }


    // for Password
    let ufpass = document.myform.fpass.value;
    const regPass = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

    if (ufpass.trim() === "") {
        window.alert("* Password field is required");
        return false;
    }

    if (!ufpass.trim().match(regPass)) {
        window.alert("User Password must contain min-8 and [a-z] [A-Z] [@#$%^&*!] [0-9]");
        return false;
    }

    // for email validation 

    let uemail = document.myform.uemail.value;
    const regemail = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
    console.log(uemail+"  jihioj")
    if (uemail.trim() === "") {
        console.log("hi")
        window.alert("* Email field is required");
        return false;
    } 
    
    if (!uemail.trim().match(regemail)) {
        window.alert("* User Email must be valid eg : abc@gmail.com");
        return false;
    }

    let ucontact = document.myform.contact.value;
    const regContact = "^[0-9]{10}$"


    if (ucontact.trim() === "") {
        console.log("hi")
        window.alert("* Contact field is required");
        return false;
    } 
    
    if (!ucontact.trim().match(regContact)) {
        window.alert("User Contact must 10-digit only be valid eg : 9874561230");
        return false;
    }

    const radios = document.getElementsByName('gender');
    let isChecked = false;

    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        isChecked = true;
        break;
      }
    }

    if (!isChecked) {
        window.alert("* Please Select Gender");
      return false;
    }

}

function checkData(data) {


    switch (data) {

        case "name":
            let ufname = document.myform.fname.value;
            let regName = "^[a-zA-Z]{3,15}$";

            if (ufname.trim() === "") {
                console.log("hi")
                document.getElementById("errorName").innerHTML = "* Name field is required"
                return false;
            } else if (!ufname.trim().match(regName)) {
                document.getElementById("errorName").innerHTML = "* user name must contain only character min-3 and max - 15"

                return false;
            } else {
                document.getElementById("errorName").innerHTML = null;
            }
            break;

        case "email":
            let uemail = document.myform.uemail.value;
            const regemail = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";


            if (uemail.trim() === "") {
                console.log("hi")
                document.getElementById("erroeEmail").innerHTML = "* email field is required";
                return false;
            } else if (!uemail.trim().match(regemail)) {
                document.getElementById("erroeEmail").innerHTML = "* user email must be valid eg : abc@gmail.com";
                return false;
            } else {
                document.getElementById("erroeEmail").innerHTML = null;
            }
            break;

    }

}