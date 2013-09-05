Ext.define('MarlowApp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    
      config: {
        id:'loginId',
       // scrollable : 'vertical',
        items: [
        {
            docked: 'top',
            xtype: 'titlebar',            
            title: '<div class="toolbarLogo">Welcome To Marlow</div>'
        },
        {
            xtype: 'fieldset',                 
            items: [{
                xtype: 'textfield',
                id:'loginusername',
                autoComplete: true, 
                labelWidth : '45%',
                label: '<div class="separator">Email</div>',
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
            layout: 'hbox',              
            items: [{
                xtype: 'button',
                id: 'loginButton',      
                text: 'Login',
                // disabled : true,
                flex : 1,
                ui: 'gray',
                handler:function(){
                   
                }
            },
            {
                xtype: 'button',
                itemId: 'signupbtn',
                text: 'Sign Up',
                flex : 1,                 
                ui: 'gray',
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
                    app.application.redirectTo(url);
                    
                }
            }]
        },  
        {
                xtype : 'panel',               
                listeners  : {
                element : 'element',
                tap : function(e) {  
                   }         
               }
            }         
        ]//end panel items
    }
});     