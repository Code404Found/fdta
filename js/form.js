function placeholderIsSupported() {
    test = document.createElement('input');
    return ('placeholder' in test);
}

$(document).ready(function(){
placeholderSupport = placeholderIsSupported() ? 'placeholder' : 'no-placeholder';
$('html').addClass(placeholderSupport);  
});


    
      
            function myFunction() {
                window.location.href="img/ticket.png"
            }
      
   
