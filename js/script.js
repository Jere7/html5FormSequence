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
     },
     messages: {
         name: "Please enter your name",
         email: "Please enter a valid email",
         password: {
             required: "Please provide a password",
             minlength: "Your password must have a 5 characters long"
         }
     },
     errorClass: "invalid",

     submitHandler: function() {
         $("#form-step-1").removeClass("animate-in");
         $("#form-step-2").addClass("animate-in");
         $("#step1").removeClass("selected");
         $("#step2").addClass("selected");
     }
}
 
});