<?php include('main_header.php');?>  

<body>

	<!-- Themer (Remove if not needed) -->  
	<!--<div id="mws-themer">
        <div id="mws-themer-content">
        	<div id="mws-themer-ribbon"></div>
            <div id="mws-themer-toggle">
                <i class="icon-bended-arrow-left"></i> 
                <i class="icon-bended-arrow-right"></i>
            </div>
        	<div id="mws-theme-presets-container" class="mws-themer-section">
	        	<label for="mws-theme-presets">Color Presets</label>
            </div>
            <div class="mws-themer-separator"></div>
        	<div id="mws-theme-pattern-container" class="mws-themer-section">
	        	<label for="mws-theme-patterns">Background</label>
            </div>
            <div class="mws-themer-separator"></div>
            <div class="mws-themer-section">
                <ul>
                    <li class="clearfix"><span>Base Color</span> <div id="mws-base-cp" class="mws-cp-trigger"></div></li>
                    <li class="clearfix"><span>Highlight Color</span> <div id="mws-highlight-cp" class="mws-cp-trigger"></div></li>
                    <li class="clearfix"><span>Text Color</span> <div id="mws-text-cp" class="mws-cp-trigger"></div></li>
                    <li class="clearfix"><span>Text Glow Color</span> <div id="mws-textglow-cp" class="mws-cp-trigger"></div></li>
                    <li class="clearfix"><span>Text Glow Opacity</span> <div id="mws-textglow-op"></div></li>
                </ul>
            </div>
            <div class="mws-themer-separator"></div>
            <div class="mws-themer-section">
	            <button class="btn btn-danger small" id="mws-themer-getcss">Get CSS</button>
            </div>
        </div>
        <div id="mws-themer-css-dialog">
        	<form class="mws-form">
            	<div class="mws-form-row">
		        	<div class="mws-form-item">
                    	<textarea cols="auto" rows="auto" readonly="readonly"></textarea>
                    </div>
                </div>
            </form>
        </div>
    </div>  --> 
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
                	
                    <!-- Statistic Item -->
                	<a class="mws-stat" href="#">
                    	<!-- Statistic Icon (edit to change icon) -->
                    	<span class="mws-stat-icon icol32-building"></span>
                        
                        <!-- Statistic Content -->
                        <span class="mws-stat-content">
                        	<span class="mws-stat-title">Floors Climbed</span>
                            <span class="mws-stat-value">324</span>
                        </span>
                    </a>

                	<a class="mws-stat" href="#">
                    	<!-- Statistic Icon (edit to change icon) -->
                    	<span class="mws-stat-icon icol32-sport"></span>
                        
                        <!-- Statistic Content -->
                        <span class="mws-stat-content">
                        	<span class="mws-stat-title">Calories Burned</span>
                            <span class="mws-stat-value down">74%</span>
                        </span>
                    </a>

                	<a class="mws-stat" href="#">
                    	<!-- Statistic Icon (edit to change icon) -->
                    	<span class="mws-stat-icon icol32-walk"></span>
                        
                        <!-- Statistic Content -->
                        <span class="mws-stat-content">
                        	<span class="mws-stat-title">Kilometers Walked</span>
                            <span class="mws-stat-value">14</span>
                        </span>
                    </a>
                    
                	<a class="mws-stat" href="#">
                    	<!-- Statistic Icon (edit to change icon) -->
                    	<span class="mws-stat-icon icol32-bug"></span>
                        
                        <!-- Statistic Content -->
                        <span class="mws-stat-content">
                        	<span class="mws-stat-title">Bugs Fixed</span>
                            <span class="mws-stat-value up">22%</span>
                        </span>
                    </a>
                    
                	<a class="mws-stat" href="#">
                    	<!-- Statistic Icon (edit to change icon) -->
                    	<span class="mws-stat-icon icol32-car"></span>

                        <!-- Statistic Content -->
                        <span class="mws-stat-content">
                        	<span class="mws-stat-title">Cars Repaired</span>
                            <span class="mws-stat-value">77</span>
                        </span>
                    </a>
                </div>
                
                <!-- Panels Start -->
                
            	<div class="mws-panel grid_5">
                	<div class="mws-panel-header">
                    	<span><i class="icon-graph"></i> Charts</span>
                    </div>
                    <div class="mws-panel-body">
                        <div id="mws-dashboard-chart" style="height: 222px;"></div>
                    </div>
                </div>
                
            	<div class="mws-panel grid_3">
                	<div class="mws-panel-header">
                    	<span><i class="icon-book"></i> Website Summary</span>
                    </div>
                    <div class="mws-panel-body no-padding">
                        <ul class="mws-summary clearfix">
                            <li>
                                <span class="key"><i class="icon-support"></i> Support Tickets</span>
                                <span class="val">
                                    <span class="text-nowrap">332</span>
                                </span>
                            </li>
                            <li>
                                <span class="key"><i class="icon-certificate"></i> Commision</span>
                                <span class="val">
                                    <span class="text-nowrap">71% <i class="up icon-arrow-up"></i></span>
                                </span>
                            </li>
                            <li>
                                <span class="key"><i class="icon-shopping-cart"></i> This Week Sales</span>
                                <span class="val">
                                    <span class="text-nowrap">144 <i class="down icon-arrow-down"></i></span>
                                </span>
                            </li>
                            <li>
                                <span class="key"><i class="icon-install"></i> Cash Deposit</span>
                                <span class="val">
                                    <span class="text-nowrap">$6,421</span>
                                </span>
                            </li>
                            <li>
                                <span class="key"><i class="icon-key"></i> Last Sign In</span>
                                <span class="val">
                                    <span class="text-nowrap">September 21, 2012</span>
                                </span>
                            </li>
                            <li>
                                <span class="key"><i class="icon-windows"></i> Operating System</span>
                                <span class="val">
                                    <span class="text-nowrap">Debian Linux</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                
            	<div class="mws-panel grid_8">
                	<div class="mws-panel-header">
                    	<span><i class="icon-magic"></i> Registration Wizard</span>
                    </div>
                    <div class="mws-panel-body no-padding">
                        <form id="mws-wizard-form" class="mws-form" action="http://www.youxithemes.com/live_previews/mws-admin/dashboard.html">
                            
                            <fieldset id="step-1" class="mws-form-inline">
                                <legend class="wizard-label"><i class="icol-accept"></i> Member Profile</legend>
                                <div id class="mws-form-row">
                                    <label class="mws-form-label">Fullname <span class="required">*</span></label>
                                    <div class="mws-form-item">
                                        <input type="text" name="fullname" class="required large">
                                    </div>
                                </div>
                                <div class="mws-form-row">
                                    <label class="mws-form-label">Email <span class="required">*</span></label>
                                    <div class="mws-form-item">
                                        <input type="text" name="email" class="required email large">
                                    </div>
                                </div>
                                <div class="mws-form-row">
                                    <label class="mws-form-label">Address <span class="required">*</span></label>
                                    <div class="mws-form-item">
                                        <textarea name="address" rows="" cols="" class="required large"></textarea>
                                    </div>
                                </div>
                                <div class="mws-form-row">
                                    <label class="mws-form-label">Gender <span class="required">*</span></label>
                                    <div class="mws-form-item">
                                        <ul class="mws-form-list">
                                            <li><input type="radio" id="male" name="gender" class="required"/> <label for="male">Male</label></li>
                                            <li><input type="radio" id="female" name="gender"> <label for="female">Female</label></li>
                                        </ul>
                                        <label class="error plain" generated="true" for="gender" style="display:none"></label>
                                    </div>
                                </div>
                            </fieldset>
                            
                            <fieldset id="step-2" class="mws-form-inline">
                                <legend class="wizard-label"><i class="icol-delivery"></i> Membership Type</legend>
                                <div id class="mws-form-row">
                                    <label class="mws-form-label">Membership Plan <span class="required">*</span></label>
                                    <div class="mws-form-item">
                                        <select class="required large">
                                        	<option>Free</option>
                                        	<option>Standard</option>
                                        	<option>Premium</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="mws-form-row">
                                    <label class="mws-form-label">Subscription Period <span class="required">*</span></label>
                                    <div class="mws-form-item">
                                        <select class="required large">
                                        	<option>One Month</option>
                                        	<option>Six Months</option>
                                        	<option>Twelve Months</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="mws-form-row">
                                    <label class="mws-form-label">Payment Method <span class="required">*</span></label>
                                    <div class="mws-form-item">
                                        <ul class="mws-form-list">
                                            <li><input type="radio" id="cc" name="pm" class="required"> <label for="cc">Credit Card</label></li>
                                            <li><input type="radio" id="pp" name="pm"> <label for="pp">PayPal</label></li>
                                        </ul>
                                        <label class="error plain" generated="true" for="pm" style="display:none"></label>
                                    </div>
                                </div>
                            </fieldset>
                            
                            <fieldset id="step-3" class="mws-form-inline">
                                <legend class="wizard-label"><i class="icol-user"></i> Confirmation</legend>
                                <div class="mws-form-row">
                                    <label class="mws-form-label">Message <span class="required">*</span></label>
                                    <div class="mws-form-item">
                                        <textarea name="address" rows="" cols="" class="required large"></textarea>
                                    </div>
                                </div>
                                <div class="mws-form-row">
                                    <label class="mws-form-label">Subscribe Newsletter <span class="required">*</span></label>
                                    <div class="mws-form-item">
                                        <ul class="mws-form-list inline">
                                            <li><input type="radio" id="sn_yes" name="sn" class="required"> <label for="sn_yes">Yes</label></li>
                                            <li><input type="radio" id="sn_no" name="sn"> <label for="sn_no">No</label></li>
                                        </ul>
                                        <label class="error plain" generated="true" for="sn" style="display:none"></label>
                                    </div>
                                </div>
                                <div class="mws-form-row">
                                    <label class="mws-form-label">I agree to the TOS <span class="required">*</span></label>
                                    <div class="mws-form-item">
                                        <ul class="mws-form-list inline">
                                            <li><input type="checkbox" id="tos_y" name="tos" class="required"> <label for="tos_y">Yes</label></li>
                                        </ul>
                                        <label class="error plain" generated="true" for="tos" style="display:none"></label>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>

                <div class="mws-panel grid_8 mws-collapsible">
                	<div class="mws-panel-header">
                    	<span><i class="icon-table"></i> Browser Engines</span>
                    </div>
                    <div class="mws-panel-body no-padding">
                        <table class="mws-table mws-datatable">
                            <thead>
                                <tr>
                                    <th>Rendering engine</th>
                                    <th>Browser</th>
                                    <th>Platform(s)</th>
                                    <th>Engine version</th>
                                    <th>CSS grade</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Trident</td>
                                    <td>Internet Explorer 4.0</td>
                                    <td>Win 95+</td>
                                    <td>4</td>
                                    <td><span class="badge badge-info">X</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trident</td>
                                    <td>Internet Explorer 5.0</td>
                                    <td>Win 95+</td>
                                    <td>5</td>
                                    <td><span class="badge badge-success">C</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trident</td>
                                    <td>Internet Explorer 5.5</td>
                                    <td>Win 95+</td>
                                    <td>5.5</td>
                                    <td><span class="badge badge-important">A</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trident</td>
                                    <td>Internet Explorer 6</td>
                                    <td>Win 98+</td>
                                    <td>6</td>
                                    <td><span class="badge badge-warning">A</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trident</td>
                                    <td>Internet Explorer 7</td>
                                    <td>Win XP SP2+</td>
                                    <td>7</td>
                                    <td><span class="badge badge-success">A</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trident</td>
                                    <td>AOL browser (AOL desktop)</td>
                                    <td>Win XP</td>
                                    <td>6</td>
                                    <td><span class="badge badge-warning">A</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Gecko</td>
                                    <td>Firefox 1.0</td>
                                    <td>Win 98+ / OSX.2+</td>
                                    <td>1.7</td>
                                    <td><span class="badge badge-info">A</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Gecko</td>
                                    <td>Firefox 1.5</td>
                                    <td>Win 98+ / OSX.2+</td>
                                    <td>1.8</td>
                                    <td><span class="badge">A</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Gecko</td>
                                    <td>Camino 1.5</td>
                                    <td>OSX.3+</td>
                                    <td>1.8</td>
                                    <td><span class="badge badge-info">A</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Gecko</td>
                                    <td>Netscape 7.2</td>
                                    <td>Win 95+ / Mac OS 8.6-9.2</td>
                                    <td>1.7</td>
                                    <td><span class="badge badge-important">A</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trident</td>
                                    <td>Internet Explorer 4.0</td>
                                    <td>Win 95+</td>
                                    <td>4</td>
                                    <td><span class="badge badge-warning">X</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trident</td>
                                    <td>Internet Explorer 5.0</td>
                                    <td>Win 95+</td>
                                    <td>5</td>
                                    <td><span class="badge badge-success">C</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trident</td>
                                    <td>Internet Explorer 5.5</td>
                                    <td>Win 95+</td>
                                    <td>5.5</td>
                                    <td><span class="badge badge-warning">A</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trident</td>
                                    <td>Internet Explorer 6</td>
                                    <td>Win 98+</td>
                                    <td>6</td>
                                    <td><span class="badge badge-info">A</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trident</td>
                                    <td>Internet Explorer 7</td>
                                    <td>Win XP SP2+</td>
                                    <td>7</td>
                                    <td><span class="badge">A</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trident</td>
                                    <td>AOL browser (AOL desktop)</td>
                                    <td>Win XP</td>
                                    <td>6</td>
                                    <td><span class="badge badge-warning">A</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Gecko</td>
                                    <td>Firefox 1.0</td>
                                    <td>Win 98+ / OSX.2+</td>
                                    <td>1.7</td>
                                    <td><span class="badge badge-success">A</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Gecko</td>
                                    <td>Firefox 1.5</td>
                                    <td>Win 98+ / OSX.2+</td>
                                    <td>1.8</td>
                                    <td><span class="badge badge-warning">A</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Gecko</td>
                                    <td>Camino 1.5</td>
                                    <td>OSX.3+</td>
                                    <td>1.8</td>
                                    <td><span class="badge badge-info">A</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Gecko</td>
                                    <td>Netscape 7.2</td>
                                    <td>Win 95+ / Mac OS 8.6-9.2</td>
                                    <td>1.7</td>
                                    <td><span class="badge">A</span></td>
                                    <td>
                                        <span class="btn-group">
                                            <a href="#" class="btn btn-small"><i class="icon-search"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-pencil"></i></a>
                                            <a href="#" class="btn btn-small"><i class="icon-trash"></i></a>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <!-- Panels End -->
            </div>
            <!-- Inner Container End -->
                       
            <!-- Footer -->
<?php include('footer.php');?>