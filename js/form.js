function placeholderIsSupported() {
    test = document.createElement('input');
    return ('placeholder' in test);
}

$(document).ready(function(){
placeholderSupport = placeholderIsSupported() ? 'placeholder' : 'no-placeholder';
$('html').addClass(placeholderSupport);  
});

<<<<<<< HEAD
=======

    
      
            function myFunction() {
                window.location.href="img/ticket.png"
            }
      
   
>>>>>>> 4e7af412932a032849d7e745a09297b016684089
