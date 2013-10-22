/*==================================================

Author         : Weprosolutions.
Date           : 15/Aug/2013.

Type           : Login Controller.
Summary        : Making the Login Page Validation, Redirecting the login To their corresponding screens(Landing Screens). 

Parameter1     : NULL. 
Parameter2     : NULL.


return value   : NULL. 
==================================================*/
Ext.define('MarlowApp.controller.LoginC', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.data.JsonP','Ext.Ajax'],
    config: {
        // models: ['SignupInfoM'],
        //stores: ['SignupInfoS'],     
        views : ['Signup'],        
        refs: {
            // Default Controllers refering to the unique elements in the app
            loginButton:    '#loginButton',
            signupButton:    '#signupbtn'
            //  forgotButton:   '#forgotButton',
        },
        control: {
            loginButton: {
                tap: 'onButtonTapLogin',
            },
            signupButton: {
                tap: 'onButtonTapsignup',
            },
        },
        routes : {
            'signup' : 'signupView',            
            'login':'loginView'
        }                                    
    },
    
    /*****---tap to make the user login----******/
    onButtonTapLogin: function(button, e, options) {
        // alert("shahid")
        var username = Ext.getCmp('loginusername').getValue();
        var password = Ext.getCmp('loginpassword').getValue();

        if( username =='' && password == '' ) 
            {
            Ext.Msg.alert( 'Please enter the Username and Password.');  
            return false; 
        }
        else if(username =='' ) 
            {
            Ext.Msg.alert( 'Please enter the Username.');  
            return false; 
        }
        else if(password == '')
            {
            Ext.Msg.alert( 'Please enter the Password.');
            return false;  
        }
        if (username != '' && password!='' ){
            finalEmailFrom   = username;
            loadMask();
            Ext.Ajax.request({ 
                
                url: serviceUrl+'login',
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                    "cache-control": "no-cache"
                },
                callbackKey: 'callback',
                timeout : 60000,
                method: 'POST',
                jsonData: {"email": username ,"password": password},
                withCredentials: false,
                useDefaultXhrHeader: false,
                success: function(response) 
                {      
                     
                    //response = Ext.decode(response.responseText);
                    //console.log(response[0].email);      
                    try{
                        
                        response = Ext.decode(response.responseText);
                        Ext.getStore("SignupInfoStore").setData(response[0]);
                        finalUserId = response[0].user_id; 
                           
                           // console.log(response[0]);                        
                           //console.log(Ext.getStore("SignupInfoStore"));
                          //  app.application.redirectTo('dashboard');
                        if(response[0].user_id == 'YOU ENTERED INVALID EMAIL OR PASSWORD')
                        {
                            
                            hideloadingMask();
                            Ext.Msg.alert('ENTERED INVALID RECORD');    
                            app.application.redirectTo('login');
                        }
                       else
                        {      
  
                            var date = new Date;
                            var minutes = date.getMinutes();
                            var hours = date.getHours();
                                  
                            setInterval(function(){

                                hideloadingMask(); 
                                Ext.getCmp('loginusername').reset();
                                Ext.getCmp('loginpassword').reset();
                                
                                if((hours >= 0 && hours <= 11) && (minutes >= 1 || minutes <= 59)) {

                                    Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                    app.application.redirectTo('dashboardd'); 

                                }
                                else {

                                    Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                                    app.application.redirectTo('dashboard'); 
                                    //alert('Time: ' + hours + ':' + minutes);
                                }     

                            }, 5000);
                        }
                                                    
                    }
                    catch(err)
                    {
                        hideloadingMask();      
                       // Ext.Msg.alert('No internet connection available', 'No internet connection available')
                    }
                },                     
                failure: function(response) {
                    //response = Ext.decode(response.responseText)
                    hideloadingMask();      
                    Ext.Msg.alert( 'Server is not responding please try again');     
                },
                callback:function(response)
                {
                    //Ext.Msg.alert('', 'Server is not responding please try again'); 
                }                  
            });                   
        }
    },
    
    
    onButtonTapForgot: function(button, e, options) {
    },
    signupView:function(){ 
        // console.log(Ext.Viewport.getCmp('sigupId'))

        if(Ext.Viewport.getComponent('sigupId') == undefined)
            {    
            Ext.Viewport.setActiveItem({
                xtype: 'sigupView'                 
            }); 
        }
        else
            {
            Ext.Viewport.setActiveItem(Ext.getCmp('sigupId'));     
        } 
        //Ext.getCmp("ssntxt").blur(); 
    } ,
    
    
    loginView:function(){ 
        if(Ext.Viewport.getComponent('loginId') == undefined)
            {    
            Ext.Viewport.setActiveItem({
                xtype: 'loginView'                 
            }); 
        }
        else
            {
            Ext.Viewport.setActiveItem(Ext.getCmp('loginId'));     
        } 
    } ,
    
        
    onButtonTapsignup:function()
    {
        ///// signup  initial
        var gender    = '';
        var isParticipate = '';
        var companyCode = ''
        var birthday  = Ext.getCmp('birthdaytxt').getValue();       
        var ssnNumber = Ext.getCmp('ssntxt').getValue(); 
               
        if(document.getElementById("maleRadio").checked == true)
        {
            gender = 'Male'  
        }
        else if(document.getElementById("femaleRadio").checked == true)
        {
            gender = 'Female'  
        } 
        if(document.getElementById("yesRadio").checked == true)
        {
            isParticipate = true
        }
        else if(document.getElementById("noRadio").checked == true)
        {
            isParticipate = false 
            companyCode      = Ext.getCmp('companyCodetxt').getValue(); 
        }
        ///////Set goals
        var fname         = Ext.getCmp('fnametxt').getValue();
        var setlname      = Ext.getCmp('setlnametxt').getValue();
        var email         = Ext.getCmp('emailtxt').getValue();
        var setusername   = Ext.getCmp('setusernametxt').getValue(); 
        var setpassword   = Ext.getCmp('setpasswordtxt').getValue();
        var setconfirm    = Ext.getCmp('setconfirmtxt').getValue();
        var height        = Ext.getCmp('heighttxt').getValue();
        var weight        = Ext.getCmp('weighttxt').getValue();     
        //////// set calories 
        var  caloriesval  =   Ext.getCmp("slidervalue").getValue()
       
    }
});
