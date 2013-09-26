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
                        <span><i class="icon-users"></i>All Users</span>
                    </div>
                    <div class="mws-panel-toolbar">
                        <div class="btn-toolbar">
                            <div class="btn-group">
                                <a href="<?php echo URL.'index.php/pages/add_user';?>" class="btn"><i class="icol-accept"></i>Add New User</a>
                                <!--<a href="#" class="btn"><i class="icol-cross"></i> Reject</a>
                                <a href="#" class="btn"><i class="icol-printer"></i> Print</a>
                                <a href="#" class="btn"><i class="icol-arrow-refresh"></i> Renew</a>
                                <a href="#" class="btn dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
                                <ul class="dropdown-menu pull-right">
                                    <li><a href="#"><i class="icol-disconnect"></i> Disconnect From Server</a></li>
                                    <li class="divider"></li>
                                    <li class="dropdown-submenu">
                                        <a href="#">More Options</a>
                                        <ul class="dropdown-menu">
                                            <li><a href="#">Contact Administrator</a></li>
                                            <li><a href="#">Destroy Table</a></li>
                                        </ul>
                                    </li>
                                </ul>-->
                            </div>
                        </div>
                    </div>
                    <div class="mws-panel-body no-padding">
                        <table class="mws-datatable-fn mws-table">
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>name</th>
                                    <th>Email</th>
                                    <th>Status/Action</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                   <?php 
                                   if($listings !=""){
                                   foreach($listings as $listing){    
                                       
                                   ?>
                                <tr>
                                    <td><?php echo $listing->id;?></td>
                                    <td><?php echo $listing->fname;?></td>
                                    <td><?php echo $listing->email;?></td>
                                    <td>
                                    <a href="<?php echo URL.'index.php/pages/status_up/'.$listing->id."/".$listing->status."/user_info";?>" class="btn btn-success btn-small"> <?php if($listing->status=='1'){echo 'Active';}else{echo 'Inactive';}?></a>
                                    <a href="<?php echo URL.'index.php/pages/add_user/'.$listing->id;?>" class="btn btn-primary btn-small"> <i class="icon-pencil"></i> Edit</a>
                                    <a href="<?php echo URL.'index.php/pages/delete/'.$listing->id."/user_info";?>" class="btn btn-danger btn-small" onclick="return confirm('Are you sure want to delete');"> <i class="icon-fire"></i> Delete</a>
                                    </td>
                                </tr>
                                <?php }}?>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <!-- Panels End -->
            </div>
            <!-- Inner Container End -->
                       
            <!-- Footer -->
 <?php include('footer.php');?>
