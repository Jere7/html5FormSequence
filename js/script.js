$(document).ready(function() {

 $("#account-creation").validate({
     rules: {
         name: "required",
         email: {
             required: true,
             minlength: 5
         },
         password {
             equired: true,
             minlength: 5
         }
     }
}
 
});