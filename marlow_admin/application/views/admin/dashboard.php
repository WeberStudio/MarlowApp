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
                
                <!-- Panels Start -->

                
            	<div class="mws-panel grid_8">
                	<div class="mws-panel-header">
                    	<span><i class="icon-book"></i> Website Summary</span>
                    </div>
                    <div class="mws-panel-body no-padding">
                        <ul class="mws-summary clearfix">
                            <li>
                                <a href="<?php echo URL.'index.php/pages/all_user';?>">
                                <span class="key"><i class="icon-certificate"></i> User View</span>
                                <span class="val">
                                    <span class="text-nowrap"></span> 
                                </span>
                                </a>
                            </li>
                            <li>
                                <a href="<?php echo URL.'index.php/pages/add_user';?>">
                                <span class="key"><i class="icon-certificate"></i> Add User View</span>
                                <span class="val">
                                    <span class="text-nowrap"></span> 
                                </span>
                                </a>
                            </li>
                            <li>
                            <a href="<?php echo URL.'index.php/pages/all_records';?>">
                                <span class="key"><i class="icon-shopping-cart"></i> Products view</span>
                                <span class="val">
                                    <span class="text-nowrap"></span>  
                                </span>
                                </a>
                            </li>
                            <!--<li>
                            <a href="#">
                                <span class="key"><i class="icon-shopping-cart"></i> Add Products view</span>
                                <span class="val">
                                    <span class="text-nowrap"></span>  
                                </span>
                                </a>
                            </li>-->
                            <li>
                                <a href="<?php echo URL.'index.php/pages/all_shops';?>"> 
                                <span class="key"><i class="icon-install"></i> Shops view</span>
                                <span class="val">
                                    <span class="text-nowrap"></span>
                                </span>
                                </a>
                            </li>
                             <li>
                                <a href="<?php echo URL.'index.php/pages/add_shop';?>"> 
                                <span class="key"><i class="icon-install"></i> Add Shops view</span>
                                <span class="val">
                                    <span class="text-nowrap"></span>
                                </span>
                                </a>
                            </li>
                     </ul>
                    </div>
                </div>
                
            	<div class="mws-panel grid_8">

                </div>

                <div class="mws-panel grid_8 mws-collapsible">
                
                </div>
                
                <!-- Panels End -->
            </div>
            <!-- Inner Container End -->
                       
            <!-- Footer -->
<?php include('footer.php');?>