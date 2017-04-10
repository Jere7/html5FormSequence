$(document).ready(function() {

 $("#account-creation").validate({
     rules: {
         name: "required",
         email: {
             required: true,
             email: true 
         },
         password {
             equired: true,
             minlength: 5
         }
     }
}
 
});