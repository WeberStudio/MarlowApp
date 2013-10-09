  <div id="mws-header" class="clearfix">
    
        <!-- Logo Container -->
        <div id="mws-logo-container">
        
            <!-- Logo Wrapper, images put within this wrapper will always be vertically centered -->
            <div id="mws-logo-wrap">
                <img src="<?php echo CSS.'images/marlow.gif';?>" alt="mws admin">
            </div>
        </div>
        
        <!-- User Tools (notifications, logout, profile, change password) -->
        <div id="mws-user-tools" class="clearfix" >
        <div id="mws-user-message" class="mws-dropdown-menu">
                <a href="#" data-toggle="dropdown" class="mws-dropdown-trigger"><i class="icon-android"></i>Profile</a>
                <!-- Messages dropdown -->
                <div class="mws-dropdown-box" style="width: 400px;">
                    <div class="mws-dropdown-content">
                        <ul class="mws-messages">
                            <li class="">
                                <a href="#" style="font-size: 17px; padding-left: 3px;">
                                    <span class="sender">
                                    <?php 
                                    $authinfo = $this->session->userdata('auth-info');
                                    
                                    echo 'Name:'.'<b style="margin-left: 13px;">'.ucfirst ( $authinfo['name']).'</b>';
                                    
                                    ?></span>
                                    <span class="sender">
                                       <?php echo 'Email:'.'<b style="margin-left: 13px;">'. $authinfo['email'].'</b>';?> 
                                    </span>
                                    <span class="sender">
                                        <?php echo 'Status:'.'<b style="margin-left: 13px;">'.ucfirst ( $authinfo['status']).'</b>';?>   
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                     
            <!-- User Information and functions section -->
            <div id="mws-user-info" class="mws-inset" >
            
                <!-- User Photo -->
  
                <!-- Username and Functions -->
                <div id="mws-user-functions" style="margin-left:4px;">
                    <div id="mws-username">
                        Hello, <?php echo ucfirst ( $authinfo['name']);?>
                    </div>
                    <ul>
                        <li><a href="#">Change Password</a></li>
                        <li><a href="<?php echo URL.'index.php/pages/logout';?>">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
