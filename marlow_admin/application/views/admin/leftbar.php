<div id="mws-sidebar">
        
            <!-- Hidden Nav Collapse Button -->
            <div id="mws-nav-collapse">
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <!-- Searchbox -->
            <div id="mws-searchbox" class="mws-inset">
                <form action="">
                    <input type="text" class="mws-search-input" placeholder="Search...">
                    <button type="submit" class="mws-search-submit"><i class="icon-search"></i></button>
                </form>
            </div>
            
            <!-- Main Navigation -->
            <div id="mws-navigation">
                <ul>
                    <li <?php if( $left_bar == "dashboard" ){ echo 'class="active"';}?> ><a href="<?php echo URL.'index.php/pages/dashboard';?>"><i class="icon-home"></i> Dashboard</a></li>

                    <li <?php if( $left_bar == "user" ){ echo 'class="active"';}?>><a href="<?php echo URL.'index.php/pages/all_user';?>"><i class="icon-table"></i> Users</a></li>
                    <li <?php if( $left_bar == "product" ){ echo 'class="active"';}?>><a href="<?php echo URL.'index.php/pages/all_records';?>"><i class="icon-table"></i>Products</a></li>
                    <li <?php if( $left_bar == "shop" ){ echo 'class="active"';}?>><a href="<?php echo URL.'index.php/pages/all_shops';?>"><i class="icon-table"></i>Shop</a></li>
                   <!-- 
                     <li><a href="charts.html"><i class="icon-graph"></i> Charts</a></li>
                    <li><a href="calendar.html"><i class="icon-calendar"></i> Calendar</a></li>
                    <li><a href="files.html"><i class="icon-folder-closed"></i> File Manager</a></li>
                   
                   <li>
                        <a href="#"><i class="icon-list"></i> Forms</a>
                        <ul>
                            <li><a href="form_layouts.html">Layouts</a></li>
                            <li><a href="form_elements.html">Elements</a></li>
                            <li><a href="form_wizard.html">Wizard</a></li>
                        </ul>
                    </li>
                    <li><a href="widgets.html"><i class="icon-cogs"></i> Widgets</a></li>
                    <li><a href="typography.html"><i class="icon-font"></i> Typography</a></li>
                    <li><a href="grids.html"><i class="icon-th"></i> Grids &amp; Panels</a></li>
                    <li><a href="gallery.html"><i class="icon-pictures"></i> Gallery</a></li>
                    <li><a href="error.html"><i class="icon-warning-sign"></i> Error Page</a></li>
                    <li>
                        <a href="icons.html">
                            <i class="icon-pacman"></i> 
                            Icons <span class="mws-nav-tooltip">2000+</span>
                        </a>
                    </li>  -->
                </ul>
            </div>         
        </div>