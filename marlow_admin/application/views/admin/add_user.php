<?php include('main_header.php');?> 

<body>

    <!-- Themer (Remove if not needed) -->  
    
    <!-- Themer End -->

    <!-- Header -->
    <?php include('header.php');?>      
    <!-- Start Main Wrapper -->
    <div id="mws-wrapper">
    
        <!-- Necessary markup, do not remove -->
        <div id="mws-sidebar-stitch"></div>
        <div id="mws-sidebar-bg"></div>
        
        <!-- Sidebar Wrapper -->
         <?php include('leftbar.php');?>         
        <!-- Main Container Start -->
        <div id="mws-container" class="clearfix">
        
            <!-- Inner Container Start -->
            <div class="container">
            
                <!-- Statistics Button Container -->
                <div class="mws-stat-container clearfix">

                </div>
                
                
                
                <div class="mws-panel grid_8">
                    <div class="mws-panel-header">
                        <span><i class="icon-ok"></i>You Can Add User Here</span>
                    </div>
                    <div class="mws-panel-body no-padding">
                        <form id="mws-validate" class="mws-form" method="post" action="<?php echo URL.'index.php/pages/add_user/'.$id?>">
                            <div id="mws-validate-error" class="mws-form-message error" style="display:none;"></div>
                            <div class="mws-form-inline">
                                <div class="mws-form-row">
                                    <label class="mws-form-label">First Name</label>
                                    <div class="mws-form-item">
                                        <input type="text" name="f_name" value="<?php echo $firstname;?>" class="required large">
                                    </div>
                                </div>
                                <div class="mws-form-row">
                                    <label class="mws-form-label">Last Name</label>
                                    <div class="mws-form-item">
                                        <input type="text" name="l_name" value="<?php echo $lastname;?>" class="required large">
                                    </div>
                                </div>
                                <div class="mws-form-row">
                                    <label class="mws-form-label">Gender</label>
                                    <div class="mws-form-item">
                                        <ul class="mws-form-list">
                                            <li><input id="gender_male" type="radio" name="gender" class="required" value="Male" <?php if($gender == 'Male'){echo 'checked=checked';}?>> <label for="gender_male">Male</label></li>
                                            <li><input id="gender_female" type="radio" name="gender" value="Female" <?php if($gender == 'Female'){echo 'checked=checked';}?>> <label for="gender_female">Female</label></li>
                                        </ul>
                                        <label for="gender" class="error plain" generated="true" style="display:none"></label>
                                    </div>
                                </div>                                
                                <div class="mws-form-row">
                                    <label class="mws-form-label">Email </label>
                                    <div class="mws-form-item">
                                        <input type="text" name="email" value="<?php echo $email;?>" class="required email large">
                                    </div>
                                </div>
                                <div class="mws-form-row">
                                    <label class="mws-form-label">Password</label>
                                    <div class="mws-form-item">
                                        <input type="text" name="password" value="<?php echo $password;?>" class="required large">
                                    </div>
                                </div>

                                
                            </div>
                            <div class="mws-button-row">
                                <input type="submit" name="submit"<?php if($id == ''){echo 'value="Save"';}else{echo 'value="Edit"';}?> class="btn btn-danger">
                            </div>
                        </form>
                    </div>        
                </div>
                
                <!-- Panels End -->

            
            <!-- Inner Container End -->
             </div>          
            <!-- Footer -->
           <?php include('footer.php');?>