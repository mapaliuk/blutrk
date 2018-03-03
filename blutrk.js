$(document).ready(function() {

    
// Get cookie function
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }


// Set the variables
    var session = getCookie('PHPSESSID');
    var email = getCookie('email');
    var product = $('#tTitle').html();

    
// Send the ajax call
    if (product) {
    
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        
        $.ajax({
            type: 'POST',
            async: true,
            url: 'http://www.bluerp.mapali.co.uk/tracking/ajax.php',
            data: "email=" + email + "&product=" + product + "&session=" + session
        });
    
    }
    

});
