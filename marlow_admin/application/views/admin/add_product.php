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
                        <span><i class="icon-ok"></i>You Can Add Product Here</span>
                    </div>
                    <div class="mws-panel-body no-padding">
                        <form id="mws-validate" class="mws-form" method="post" action="<?php echo URL.'index.php/pages/add_shop/'.$id?>">
                            <div id="mws-validate-error" class="mws-form-message error" style="display:none;"></div>
                            <div class="mws-form-inline">
                                <div class="mws-form-row">
                                    <label class="mws-form-label">Name</label>
                                    <div class="mws-form-item">
                                        <input type="text" name="name" value="<?php echo $name;?>" class="required large">
                                    </div>
                                </div>
                                <div class="mws-form-row">
                                    <label class="mws-form-label">Gender</label>
                                    <div class="mws-form-item">
                                        <ul class="mws-form-list">
                                            <li><input id="gender_male" type="radio" name="gender" class="required"> <label for="gender_male">Male</label></li>
                                            <li><input id="gender_female" type="radio" name="gender"> <label for="gender_female">Female</label></li>
                                        </ul>
                                        <label for="gender" class="error plain" generated="true" style="display:none"></label>
                                    </div>
                                </div>                                <div class="mws-form-row">
                                    <label class="mws-form-label">Join Date</label>
                                    <div class="mws-form-item">
                                        <input type="text" class="mws-datepicker large" readonly="readonly">
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
                                        <input type="text" name="password" value="<?php echo $address;?>" class="required large">
                                    </div>
                                </div>
                                 <!--<div class="mws-form-row">
                                    <label class="mws-form-label">Description</label>
                                    <div class="mws-form-item">
                                        <input type="text" name="des" value="<?php echo $des;?>" class="required large">
                                    </div>
                                </div>-->
                                
                            </div>
                            <div class="mws-button-row">
                                <input type="submit" name="submit" class="btn btn-danger">
                            </div>
                        </form>
                    </div>        
                </div>
                
                <!-- Panels End -->

            
            <!-- Inner Container End -->
             </div>          
            <!-- Footer -->
           <?php include('footer.php');?>