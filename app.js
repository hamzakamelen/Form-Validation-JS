var box = document.getElementById("box");
box.style.display = "none";
function validation() {
    
    var first = document.getElementById('first').value;
    var last = document.getElementById('last').value;
    var phone = document.getElementById('phone').value;

    var emaial = document.getElementById('emaial').value;
    var zip = document.getElementById('zip').value;


    if (first === "") {
        document.getElementById('firstname').innerHTML = "First name is required"
        return false;
    }
    if (!isNaN(first)) {
        document.getElementById('firstname').innerHTML = "Only Characters are Acceptable."
        return false;
    }




    if (last === "") {
        document.getElementById('lastname').innerHTML = "Last name is required"
        return false;
    }
    if (!isNaN(last)) {
        document.getElementById('lastname').innerHTML = "Only Characters are Acceptable."
        return false;
    }




    if (phone === "") {
        document.getElementById('phoneNo').innerHTML = "Phone no is required"
        return false;
    }
    if (isNaN(phone)) {
        document.getElementById('phoneNo').innerHTML = "Enter Correct Mobile Number."
        return false;
    }
    if (phone.length != 11) {
        document.getElementById('phoneNo').innerHTML = "Enter Correct Mobile Number."
        return false;
    }



    if (emaial === "") {
        document.getElementById('email').innerHTML = "Email is required"
        return false;
    }
    if (emaial === "") {
        document.getElementById('email').innerHTML = "Email is required"
        return false;
    }
    if (emaial.indexOf(".") - emaial.indexOf("@") < 2 ||emaial.indexOf(".") > emaial.length - 3) {
        document.getElementById('email').innerHTML = "Please enter correct Email."
        return false;
    }



    if (zip === "") {
        document.getElementById('zipcode').innerHTML = "ZIP CODE is required"
        return false;
    }

    if (zip.length != 5) {
        document.getElementById('zipcode').innerHTML = "Enter Correct ZIP CODE "
        return false;
    }

    if ((zip.length < 4) || (zip.length > 5)) {
        document.getElementById('zipcode').innerHTML = "ZIP CODE Must contain 5 characters"
        return false;
    }
    if (isNaN(zip)) {
        document.getElementById('zipcode').innerHTML = "Enter Correct ZIP CODE."
        return false;
    }

    swal("Registration SuccessFully!", "You clicked the button!", "success");
    container.style.display = "none";
    box.style.display = "block";
    box.style.display = "flex";
    box.style.justifyContent = "center";
    box.innerHTML = `
    <div class="get_values">
                <i id="font" onclick="back()" class="fa-solid fa-arrow-left"></i>
                <h2>Your Data</h2>
                <p><span>First Name :</span> ${first}</p>
                <p><span>Last Name :</span> ${last}</p>
                <p><span class="phone">Phone :</span> ${phone}</p>
                <p><span class="email">Email :</span> ${emaial}</p>
                <p><span class="zip_code">Zip Code :</span> ${zip}</p>
            </div>
    `
}

function back() {
box.style.display = "none";
container.style.display = "block";
container.style.display = "flex";
container.style.justifyContent = "center";
}