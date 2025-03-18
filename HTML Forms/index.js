function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var topic = document.forms["contactForm"]["topic"].value;
    var message = document.forms["contactForm"]["message"].value;
    
    if (name == "") {
        alert("กรุณากรอกชื่อ");
        return false;
    }

    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email == "" || !emailPattern.test(email)) {
        alert("กรุณากรอกอีเมลที่ถูกต้อง");
        return false;
    }

    
    var phonePattern = /^[0-9]{10}$/;
    if (phone == "" || !phonePattern.test(phone)) {
        alert("กรุณากรอกเบอร์โทรศัพท์ที่เป็นตัวเลข 10 หลัก");
        return false;
    }

    
    if (topic == "") {
        alert("กรุณาเลือกหัวข้อที่ต้องการติดต่อ");
        return false;
    }

    
    if (message == "") {
        alert("กรุณากรอกข้อความ");
        return false;
    }

    return true;
}

function resetForm() {
    
    document.forms["contactForm"].reset();

    document.getElementById("name").style.borderColor = "#ddd";
    document.getElementById("email").style.borderColor = "#ddd";
    document.getElementById("phone").style.borderColor = "#ddd";
    document.getElementById("topic").style.borderColor = "#ddd";
    document.getElementById("message").style.borderColor = "#ddd";
}

function validatePhone() {
    var phoneField = document.getElementById("phone");
    var phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phoneField.value)) {
        phoneField.setCustomValidity("กรุณากรอกตัวเลขเท่านั้น");
    } else {
        phoneField.setCustomValidity("");
    }
}