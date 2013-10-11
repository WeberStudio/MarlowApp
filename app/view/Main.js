Ext.define('MarlowApp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
	cls: 'custom-page-bg',	
      config: {
		
        id:'loginId',
		fullscreen: true,
		navigationBar: {
			hidden: true
		},
       	scrollable : 'vertical',
		items: [
        {	
			
     		xtype: 'toolbar',
            docked: 'top',
            title: '<div class="toolbarLogo">Marlow Window Shopper</div>',
        }, 	
		
        {
            xtype: 'fieldset', 
			                
            items: [{
                xtype: 'textfield',
                id:'loginusername',
                autoComplete: true, 
                labelWidth : '45%',
                label: '<div class="separator">Email</div>',
				//style: 'border: 1px solid #C6C6C6; margin-bottom: 15px;',
                listeners: {
                    keyup: function(fld, e){
                        //if user hits return button or keyboard-down button
                        if (e.browserEvent.keyCode == 13 || e.browserEvent.keyCode == 10) {
                            e.stopEvent();
                            fld.element.dom.blur(); //hide keyboard
                            window.scrollTo(0,0); // Scroll to top (for android)
                        }
                    }
                }
				
            },
            {
                xtype: 'passwordfield',
                id:'loginpassword',
                labelWidth : '45%',
                autoComplete: true,   
                label: '<div class="separator">Password</div>',
				//style: 'border: 1px solid #C6C6C6;',
                listeners: {
                    keyup: function(fld, e){
                        //if user hits return button or keyboard-down button
                        if (e.browserEvent.keyCode == 13 || e.browserEvent.keyCode == 10) {
                            e.stopEvent();
                            fld.element.dom.blur(); //hide keyboard
                            window.scrollTo(0,0); // Scroll to top (for android)
                        }
                    }
                }
            }]//end fieldset items
        }, 
        {
            xtype : 'container',
            items: [
            {
                xtype: 'button',
                id: 'loginButton',      
                text: 'Login',
                // disabled : true,
                flex : 1,
                ui: 'gray',
				style: 'margin-bottom: 15px; height: 50px; margin-left: 20px; margin-right: 20px;', 
                /*handler:function(){
                   
                }   */
            },
            {
                xtype: 'button',
                itemId: 'signupbtn',
                text: 'Sign Up',
                flex : 1,                 
                ui: 'gray',
				style: 'height: 50px; margin-left: 20px; margin-right: 20px;',
                handler:function()
                {
                    Ext.Viewport.remove(Ext.getCmp('signupId'))   
                    Ext.Viewport.remove(Ext.getCmp('lnametxt'))
                    Ext.Viewport.remove(Ext.getCmp('ssntxt'))
                    Ext.Viewport.remove(Ext.getCmp('birthdaytxt'))
                    Ext.Viewport.remove(Ext.getCmp('NoOption'))
                    Ext.Viewport.remove(Ext.getCmp('companyCodetxt'))
                    Ext.Viewport.remove(Ext.getCmp('newuserNametxt'))
                    Ext.Viewport.remove(Ext.getCmp('newpasswordtxt'))
                    Ext.Viewport.remove(Ext.getCmp('confirmPasswordtxt'))
                    Ext.Viewport.remove(Ext.getCmp('setsignupbtn'))
                    Ext.Viewport.remove(Ext.getCmp('cancelbtn'))
                    Ext.Viewport.remove(Ext.getCmp('signupbtns'))
                    var url = 'signup';                    
                    Ext.getCmp('loginpassword').setValue('');
                    Ext.getCmp('loginusername').setValue('');
                    app.application.redirectTo(url);
                    
                }
            }]
        },  
        {        
                listeners  : {
                element : 'element',
                tap : function(e) {  
                   }         
               }
            }         
        ]//end panel items
    }
	
});     
