// Show Password
function showPassword() {
    var x = document.getElementById();
    switch (x) {
        case "password1":
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
            break;
        case "password2":
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
            break;
        default:
            break;
    }
        
    
}