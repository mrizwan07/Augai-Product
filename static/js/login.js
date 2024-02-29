$(".alert").hide();
jQuery('body').css('opacity', '1');
async function loginForm() {
  jQuery('body').css('opacity', '0.6');
  var loginData = $('.loginFormData').serialize();
  $.ajax({
    type: "POST",
    url: "/signin_user/",  
    data: loginData,
    success: function(data){
      if (data.status === "login"){
        jQuery('body').css('opacity', '1');
        window.location.href = "/diffuse-image/";
        return;
      }
      $("#message").text(null);
      $(".alert").hide(10);
      $("#message").text(data.message);
      $(".alert").show(100);
      jQuery('body').css('opacity', '1');
    }
  });
}  

async function signupForm(){
  jQuery('body').css('opacity', '0.6');
  var signupData = $('#signup').serialize();
  $.ajax({
    type: "POST",
    url: "/signup_user/",  
    data: signupData,
    success: function(data)
    {
        if (data.status === "success"){
            jQuery('body').css('opacity', '1');
            window.location.href = "/diffuse-image/";
            return;}
        $("#message").text(null);
        $(".alert").hide(10);
        $("#message").text(data.message);
        $(".alert").show(100);
        jQuery('body').css('opacity', '1');
    }
  });

}