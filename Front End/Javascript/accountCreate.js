// Show Password
function showPassword1() {
    var x = document.getElementById("password1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function showPassword2() {
    var x = document.getElementById("password2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// Check to make sure that the Email is valid
$("#invalidEmail").hide();
$("#eMailAddr").change(function () {
    var input = $(this).val();
    var comparitor = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (comparitor.test(input) == false) {
        $(this).css("color", "#c47171");
        console.log("false");
        $("#invalidEmail").show();
    } else {
        $(this).css("color", "ghostwhite");
        console.log("true");
        $("#invalidEmail").hide();
    }
}); 

// Check to make sure that the password is strong enough 
$("#invalidPass").hide();
$("#password1").change(function () {
    var input = $(this).val();
    var comparitor = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (comparitor.test(input) == false) {
        $(this).css("color", "#c47171");
        console.log("false");
        $("#invalidPass").show();

    } else {
        $(this).css("color", "ghostwhite");
        console.log("true");
        $("#invalidPass").hide();

    }
    passMatcher();
});

// Check to make sure password2 is the same as password1
$("#password2").change(function () {
    passMatcher();
});

$("#passMatcher").hide();
function passMatcher() {
    let a = $("#password2").val();
    let b = $("#password1").val();
    if (a == b) {
        $("#passMatcher").hide();
        console.log("hiding" + a + " - " + b);
    } else {
        $("#passMatcher").show();
        console.log("showing" + a + " - " + b);
    }
}

