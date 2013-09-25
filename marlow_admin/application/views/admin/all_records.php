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
                    	<span><i class="icon-table"></i>All Records</span>
                    </div>
                    <div class="mws-panel-toolbar">
                        <div class="btn-toolbar">
                            <div class="btn-group">
                                <a href="<?php echo URL.'index.php/pages/add_product'?>" class="btn"><i class="icol-accept"></i> Add New Product</a>
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
                                    <th>Product ID</th>
                                    <th>User ID</th>
                                    <th>Brand ID</th>
                                    <th>Note</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    
                                <!--<th>Status</th>-->
                                    <th>Status</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                   <?php 
                                   if($listings !=""){
                                   foreach($listings as $listing){    
                                       
                                   ?>
                                <tr>
                                    <td><?php echo $listing->id;?></td>
                                    <td><?php   $user_namee = $this->Admin_model->get_records('user_info',$listing->user_id) ;
                                                if(!empty($user_namee)){ echo $user_namee['0']->fname; }
                                                ?>
                                    </td>
                                    <td><?php   $shop_name = $this->Admin_model->get_records('shops',$listing->brand_id); 
                                                if($shop_name){ echo $shop_name['0']->name ;}?>
                                     </td>
                                    <td><?php echo substr($listing->note, 0, 20).'...';?></td>
                                    <td><?php echo $listing->price;?></td>
                                    <td><img src="<?php echo (URL.'uploads/'.$listing->image);?>" alt="image" align="center"style="width: 97px; height: 50px;"></td>
                                    
                                    <!--<td><?php echo $listing->status;?></td>-->
                                    <td>
                                    <a href="<?php echo URL.'index.php/pages/status_up/'.$listing->id."/".$listing->status.'/products';?>" class="btn btn-success btn-small"><?php if($listing->status=='1'){echo 'Active';}else{echo 'Inactive';}?></a>
                                     <a href="<?php echo URL.'index.php/pages/add_product/'.$listing->id;?>" class="btn btn-primary btn-small"> <i class="icon-pencil"></i> Edit</a>
                                    <a href="<?php echo URL.'index.php/pages/delete/'.$listing->id."/products";?>" class="btn btn-danger btn-small"> <i class="icon-fire"></i> Delete</a>
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
