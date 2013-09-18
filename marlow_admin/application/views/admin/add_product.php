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
                        <form id="mws-validate" class="mws-form" enctype="multipart/form-data" method="post" action="<?php echo URL.'index.php/pages/add_product/'.$id?>">
                            <div id="mws-validate-error" class="mws-form-message error" style="display:none;"></div>
                            <div class="mws-form-inline">
                                <div class="mws-form-row">
                                        <label class="mws-form-label">Select User</label>
                                        <div class="mws-form-item">
                                            <select name="user" class="mws-select2 small">
                                                <option>Select User</option>
                                                  <?php
                                                  if(!empty($user))
                                                  {
                                                       foreach($user as $users)
                                                       {
                                                       ?>
                                                       <option value="<?php echo $users->id; ?>" <?php if($user_id == $users->id){echo 'selected';}?>><?php echo $users->fname; ?></option> 
                                                       <?php
                                                       }
                                                  }
                                                  ?>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="mws-form-row">
                                        <label class="mws-form-label">Select Shop</label>
                                        <div class="mws-form-item">
                                            <select name="shop" class="mws-select2 small">
                                                <option>Select Shop</option>
                                                  <?php
                                                  if(!empty($shop))
                                                  {
                                                       foreach($shop as $shops)
                                                       {
                                                       ?>
                                                       <option value="<?php echo $shops->id; ?>"<?php if($brand_id==$shops->id){echo 'selected';}?>><?php echo $shops->name; ?></option> 
                                                       <?php
                                                       }
                                                  }
                                                  ?>
                                            </select>
                                        </div>
                                    </div>                                  
                                    <div class="mws-form-row">
                                        <label class="mws-form-label">Note</label>
                                        <div class="mws-form-item">
                                            <textarea name="note" id="cleditor" class="large"><?php echo $note;?></textarea>
                                        </div>
                                    </div>
                                    
                                <div class="mws-form-row">
                                    <label class="mws-form-label">Price</label>
                                    <div class="mws-form-item">
                                        <input name="price" value="<?php echo $price;?>" type="text" name="ageField" class="required digits large">
                                    </div>
                                </div>
                                
                                <div class="mws-form-row">
                                        <label class="mws-form-label">Select Image</label>
                                        <div class="mws-form-item">
                                            <input type="file" name="image" >
                                            <?php if($image!=""){?>
                                            <img src="<?php echo URL.'uploads/'.$image?>" style="height: 30px; width: 30px;">
                                            <?php }?>
                                        </div>
                                </div>
                                
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