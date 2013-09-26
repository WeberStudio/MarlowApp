 <!DOCTYPE html>
<!--[if lt IE 7]> <html class="lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--><html lang="en"><!--<![endif]-->

<!-- Mirrored from www.youxithemes.com/live_previews/mws-admin/index.html by HTTrack Website Copier/3.x [XR&CO'2013], Tue, 13 Aug 2013 07:22:19 GMT -->
<head>
<meta charset="utf-8">

<!-- Viewport Metatag -->
<meta name="viewport" content="width=device-width,initial-scale=1.0">

<!-- Required Stylesheets -->
<link rel="stylesheet" type="text/css" href="<?php echo(CSS.'bootstrap/css/bootstrap.min.css'); ?>" media="screen">
<link rel="stylesheet" type="text/css" href="<?php echo(CSS.'css/fonts/ptsans/stylesheet.css'); ?>" media="screen">
<link rel="stylesheet" type="text/css" href="<?php echo(CSS.'css/fonts/icomoon/style.css'); ?>" media="screen">

<link rel="stylesheet" type="text/css" href="<?php echo(CSS.'css/login.min.css'); ?>" media="screen">

<link rel="stylesheet" type="text/css" href="<?php echo(CSS.'css/mws-theme.css'); ?>" media="screen">

<title><?php echo $title;?></title>

</head>

<body>
<script >
function emptyFieldError()
{
    var userName = document.getElementById("user_name").value;
    if(userName == '')
    {
      document.getElementById('errorDiv').innerText='Enter The Email First';  
      document.getElementById('errorDiv').style.display = "block"; 
    }
    return false;
    
}
</script>

    <div id="mws-login-wrapper">
        <div id="mws-login">
        
        <div class="mws-form-message error" id="errorDiv"  style=" display: none;"> </div>
            <h1>Login <?php //echo URL;?></h1>
            <div class="mws-login-lock"><i class="icon-lock"></i></div>
            <div id="mws-login-form">
                <form class="mws-form" action="<?php echo URL.'index.php/Auth/login';?>" method="post">
                    <div class="mws-form-row">
                        <div class="mws-form-item">
                            <input type="text" name="email" id='user_name' class="mws-login-username required" placeholder="username">
                        </div>
                    </div>
                    <div class="mws-form-row">
                        <div class="mws-form-item">
                            <input type="password" name="password" class="mws-login-password required" placeholder="password">
                        </div>
                    </div>
                    <div class="mws-form-row">
                        <input type="submit" value="Login" class="btn btn-success mws-login-button">
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- JavaScript Plugins -->
    <script src="js/libs/jquery-1.8.3.min.js"></script>
    <script src="js/libs/jquery.placeholder.min.js"></script>
    
    <!-- jQuery-UI Dependent Scripts -->
    <script src="jui/js/jquery-ui-effects.min.js"></script>

    <!-- Plugin Scripts -->
    <script src="plugins/validate/jquery.validate-min.js"></script>

    <!-- Login Script -->
    <script src="js/core/login.js"></script>

</body>

<!-- Mirrored from www.youxithemes.com/live_previews/mws-admin/index.html by HTTrack Website Copier/3.x [XR&CO'2013], Tue, 13 Aug 2013 07:22:20 GMT -->
</html>
