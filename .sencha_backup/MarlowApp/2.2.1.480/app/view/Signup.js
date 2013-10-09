Ext.define('MarlowApp.view.Signup', {
    extend: 'Ext.Container',     
    xtype:'sigupView',
	cls: 'custom-page-bg',	
    config: {
        id:'signupId',
        scrollable : 'vertical',
        items: [
        {
            xtype: 'toolbar',
            docked: 'top',            
            title: '<div class="toolbarLogo">Sign Up Now!</div>'
        },		
        {
            xtype: 'fieldset',           
            defaults : {
                labelWidth : '50%'
            },
            items: [
            {
                xtype:        'textfield',
                id:           'fnametxt',
                autoComplete: false,
                label:        'First Name *'
                
            },            
            {
                xtype: 'textfield',
                // itemId: 'lnametxt1',
                id:'lnametxt',
                //required :true,
                autoComplete: false, 
                label: '<div class="separator">Last Name *</div>',
                    keyup: function( textfield, e, eOpts ) {
                        var value = textfield.getValue()+'';
                        var length = value.length;
                        if(value == ' ' && length == 1)
                        {   
                            // alert('space') 
                           
                        }
                    }
                
            },
             {
                xtype: 'radiofield',
                id   : 'maleRadio',
                name : 'gender',
                value: 'male',
                label: 'Male:',
                checked: true
             },
            {
                xtype: 'radiofield',
                id   : 'femaleRadio',
                name : 'gender',
                value: 'female',
                label: 'Female:'
            },                           
           
            {
                    xtype: 'emailfield',
                    label: 'Email *',
                    name: 'email',
                    id:   'email'
            },
            {
                xtype: 'passwordfield',
                id:'newpasswordtxt',
                label: '<div class="separator">Create Password *</div>',
                listeners: {
                    keyup: function( textfield, e, eOpts ) {
                        var value = textfield.getValue()+'';
                        var length = value.length;
                        getPasswordlength = length
                        if(value == ' ' && length == 1)
                        {   
                        }
                    }
                }
            },
            {
                xtype: 'passwordfield',
                id:'confirmPasswordtxt',
                label: '<div class="separator">Confirm Password *</div>',
                listeners: {
                    keyup: function( textfield, e, eOpts ) {
                        var value = textfield.getValue()+'';
                        var length = value.length;
                        if(value == ' ' && length == 1)
                        {   
                        }
                    }
                }
            }
            ]
        },
         
         {
            xtype : 'container',             
            id:'signupbtns',
            items: [
            {
            xtype: 'button',
            id:'setsignupbtn',
            text: 'Sign Up',
			style: 'margin-bottom: 15px; height: 50px; margin-left: 20px; margin-right: 20px;',
            flex : 1,  
            ui: 'gray' ,            
            handler : function(){
                Ext.getCmp("fnametxt").blur(); 
                Ext.getCmp("lnametxt").blur();               
                Ext.getCmp("email").blur();                
                Ext.getCmp("newpasswordtxt").blur(); 
                Ext.getCmp("confirmPasswordtxt").blur(); 
                
                var fname = Ext.getCmp("fnametxt").getValue();
                 if(fname == '')
                 {
                    Ext.Msg.alert( 'Please enter the First Name.');
                    return false   
                 }
                 
                 
                if(/[ ,*,?,/,-,_,=,#,$,%,^,&,*,@.:,<,>,+,!,~,(,),{,},[,]]/.test(fname))
                {
                    Ext.Msg.alert( 'Empty spaces and  special characters are not allowed in First Name.');
                    return false;
                } 
         
                if(/[0-9]/.test(fname))
                    {
                    Ext.Msg.alert( 'Numbers are not allowed in First Name.');
                    return false      
                }
               var allowchracter = /^[a-zA-Z\_]+$/g;
              // console.log((allowchracter.test(lname)))
               if(!(allowchracter.test(fname))) 
                {
                    Ext.Msg.alert( 'Empty spaces and  special characters are not allowed in First Name.');
                    return false;
                }                   
              
                 
                var lname = Ext.getCmp('lnametxt').getValue();                
                if(lname == '')
                {
                    Ext.Msg.alert( 'Please enter the Last Name.');
                    return false   
                }
                      
                
               if(/[ ,*,?,/,-,_,=,#,$,%,^,&,*,@.:,<,>,+,!,~,(,),{,},[,]]/.test(lname))
                {
                    Ext.Msg.alert( 'Empty spaces and  special characters are not allowed in Last Name.');
                    return false;
                } 
         
                if(/[0-9]/.test(lname))
                    {
                    Ext.Msg.alert( 'Numbers are not allowed in Last Name.');
                    return false      
                }
               var allowchracter = /^[a-zA-Z\_]+$/g;
              // console.log((allowchracter.test(lname)))
               if(!(allowchracter.test(lname))) 
                {
                    Ext.Msg.alert( 'Empty spaces and  special characters are not allowed in Last Name.');
                    return false;
                }                   
              
                var gender           = '';                 
                var isParticipate    = '';
                var newuserName      = '';
                var newpassword      = '';
                var confirmPassword  = '';
               
               
                isParticipate    = true;
                email            = Ext.getCmp('email').getValue();
                newpassword      = Ext.getCmp('newpasswordtxt').getValue();
                confirmPassword  = Ext.getCmp('confirmPasswordtxt').getValue(); 
                if(email == '')
                {
                    Ext.Msg.alert( 'Please enter the Email.');
                    return false    
                } 
               
               
                if(/[ ]/.test(email))
                {
                    Ext.Msg.alert( 'Empty spaces and  special characters are not allowed in Email.');
                    return false;
                }
              var email_re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              if(!(email_re.test(email))) 
                {
                    Ext.Msg.alert( 'Please Enter Valid Email.');
                    return false;
                }
               
                
                               
                if(newpassword == '')
                {
                    Ext.Msg.alert( 'Please enter the Password.');
                    return false    
                } 
                
                if(getPasswordlength<7)
                {
                    Ext.Msg.alert( 'Password cannot be less than 7 characters.');
                    return false      
                }
              
                 if(confirmPassword == '')
                {
                    Ext.Msg.alert( 'Please enter the Confirm Password.');
                    return false    
                } 
                
                if(confirmPassword<7)
                {
                    Ext.Msg.alert( ' Please insert a minimum of 7 characters for the Password.');
                    return false      
                }
                
                if(newpassword != confirmPassword)
                {
                    Ext.Msg.alert( 'Confirm Password do not match.');
                    return false;
                }
                
                if(isParticipate)
                {                      
                 
                    loadMask()            
                    Ext.Ajax.request({
                        url: serviceUrl+'register',
                         headers: {
                            "Content-Type": "application/json",
                            'Accept': 'application/json',
                            "cache-control": "no-cache"
                        },                        
                        timeout : 60000,
                        method: 'POST',
                        jsonData: {"userId": newuserName, "password": newpassword, "firstName": fname, 'lastName': lname, 'emailId': email, 'gender': gender, 'ErrorCode':''}, 
                        withCredentials: false,
                        useDefaultXhrHeader: false,
                        success: function(response) { 
                             
                        response = Ext.decode(response.responseText)
                        //console.log(response[0].MESSAGE);
                       
                        if(response[0].MESSAGE)
                             {
                               
                                hideloadingMask();
                                Ext.Msg.alert( 'You have registered successfully!');
                                app.application.redirectTo('dashboard');
                                /*var userNameObj = document.getElementById('UserNameLandingpageID');
                                userNameObj.innerHTML = '';
                                userNameObj.innerHTML = newuserName;*/  
                            }
                        else
                            {
                                // Ext.Msg.alert( 'ELSE');
                                hideloadingMask();
                                Ext.Msg.alert( 'The email id already exists!');       
                                return false     
                            }     
                        },
                        failure: function(response) {
                            hideloadingMask();
                            response = Ext.decode(response.responseText)
                            Ext.Msg.alert( 'Server is not responding please try again.');     
                        }
                    });                  
                }
                else
                {
                    var url = 'setgoals'; 
                    app.application.redirectTo(url) 
                }
                       
                        
                         Ext.getCmp("email").blur(); 
                         Ext.getCmp("newpasswordtxt").blur(); 
                         Ext.getCmp("confirmPasswordtxt").blur();
            }
        },
         {
            xtype: 'button',
            id:'cancelbtn',
            text: 'Cancel',
            flex : 1,     
			style: 'height: 50px; margin-left: 20px; margin-right: 20px;',     
            ui: 'gray',
            handler:function(){
                
                Ext.Viewport.remove(Ext.getCmp('signupId'))   
                Ext.Viewport.remove(Ext.getCmp('lnametxt'))               
                Ext.Viewport.remove(Ext.getCmp('fnametxt'))
                Ext.Viewport.remove(Ext.getCmp('email'))
                Ext.Viewport.remove(Ext.getCmp('newpasswordtxt'))
                Ext.Viewport.remove(Ext.getCmp('confirmPasswordtxt'))
                Ext.Viewport.remove(Ext.getCmp('setsignupbtn'))
                Ext.Viewport.remove(Ext.getCmp('cancelbtn'))
                var url = 'login'; 
                app.application.redirectTo(url) 
                
            } 
         }]
         }    
        ]
    }
});