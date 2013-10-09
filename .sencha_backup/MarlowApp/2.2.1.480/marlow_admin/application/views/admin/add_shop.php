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
                        <span><i class="icon-ok"></i>You Can Add Shop Here</span>
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
                                    <label class="mws-form-label">Address</label>
                                    <div class="mws-form-item">
                                        <input type="text" name="address" value="<?php echo $address;?>" class="required large">
                                    </div>
                                </div>
                                <div class="mws-form-row">
                                    <label class="mws-form-label">Email </label>
                                    <div class="mws-form-item">
                                        <input type="text" name="email" value="<?php echo $email;?>" class="required email large">
                                    </div>
                                </div>
                                <div class="mws-form-row">
                                    <label class="mws-form-label">Description</label>
                                    <div class="mws-form-item">
                                        <input type="text" name="des" value="<?php echo $des;?>" class=" large">
                                    </div>
                                </div>
                                
                            </div>
                            <div class="mws-button-row">
                                <input type="submit" name="submit" <?php if($id == ''){echo 'value="Save"';}else{echo 'value="Edit"';}?> class="btn btn-danger">
                            </div>
                        </form>
                    </div>        
                </div>
                
                <!-- Panels End -->

            
            <!-- Inner Container End -->
             </div>          
            <!-- Footer -->
           <?php include('footer.php');?>