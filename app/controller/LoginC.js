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
        // models: ['AboutMe'],
        //stores: ['aboutme'],     
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
            Ext.Msg.alert('Please enter the Username and Password.', 'Please enter the Username and Password.');  
            return false; 
        }
        else if(username =='' ) 
            {
            Ext.Msg.alert('Please enter the Username.', 'Please enter the Username.');  
            return false; 
        }
        else if(password == '')
            {
            Ext.Msg.alert('Please enter the Password.', 'Please enter the Password.');
            return false;  
        }
        if (username != '' && password!='' ){
            //loadMask() 
            Ext.Ajax.request({
                url: serviceUrl+'login',
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',                    
                    "cache-control": "no-cache"
                },
                callbackKey: 'callback', 
                timeout : 6000,
                method: 'POST',                
               /* jsonData: 'email='+username+'&password='+password,//{"userName": username ,"password": password}, */
                jsonData: {
                            "email":       username ,
                            "password":    password
                        }, 
                withCredentials: false,
                useDefaultXhrHeader: false,
                success: function(response) {      
                    try{
                        response = Ext.decode(response.responseText)
                         console.log(response);
                       

                    }catch(err){
                        // console.log(err)
                        Ext.Msg.alert('No internet connection available', 'No internet connection available')
                    }
                },                     
                failure: function(response) {
                    //response = Ext.decode(response.responseText)
                    Ext.Msg.alert('Server is not responding please try again', 'Server is not responding please try again');     
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
    
    
    setGoalsView:function(){ 
        if(Ext.Viewport.getComponent('setgoalId') == undefined)
            {    
            Ext.Viewport.setActiveItem({
                xtype: 'setgoalView'                 
            }); 
        }
        else
            {
            Ext.Viewport.setActiveItem(Ext.getCmp('setgoalId'));     
        }  
        var lname     = Ext.getCmp('lnametxt').getValue();
        var birthday  = Ext.getCmp('birthdaytxt').getValue();
        var gender    = '';
        var ssnNumber = Ext.getCmp('ssntxt').getValue();
        var isParticipate = '';
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
        }
        var companyCode      = Ext.getCmp('companyCodetxt').getValue();
        var newpassword      = Ext.getCmp('newpasswordtxt').getValue();
        var newuserName      = Ext.getCmp('newuserNametxt').getValue();
        var confirmPassword  = Ext.getCmp('confirmPasswordtxt').getValue(); 
        Ext.getCmp('setlnametxt').setValue(lname); 
        Ext.getCmp('setusernametxt').setValue(newuserName); 
        Ext.getCmp('setpasswordtxt').setValue(newpassword); 
        Ext.getCmp('setconfirmtxt').setValue(confirmPassword); 
    },
    
    
    setcaloriesView:function(){ 
        if(Ext.Viewport.getComponent('setcaloriesId')== undefined)
            {    
            Ext.Viewport.setActiveItem({
                xtype: 'setcaloriesView'                 
            }); 
        }
        else
            {
            Ext.Viewport.setActiveItem(Ext.getCmp('setcaloriesId'));     
        } 

    },
    
    
    onButtonTapsignup:function()
    {
        ///// signup  initial
        var birthday  = Ext.getCmp('birthdaytxt').getValue();
        var gender    = '';
        var ssnNumber = Ext.getCmp('ssntxt').getValue();
        var isParticipate = '';
        var companyCode = ''
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
        // alert()
        /*   loadMask()            
        Ext.Ajax.request({
        url: signonServiceUrl+'SignUp',
        headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        "cache-control": "no-cache"
        },
        callbackKey: 'callback',
        timeout : 60000,
        method: 'POST',
        jsonData: {"userId": setusername ,"password": setpassword,"firstName":fname,'lastName':setlname,'emailId':email,'gender':gender,'lastFourSSNDigits':ssnNumber,'birthDate':birthday,'participatedInScreeningProcess':isParticipate,'companyCode':companyCode,'weight':weight,'height':height,'isDeleted':true}, 
        withCredentials: false,
        useDefaultXhrHeader: false,
        success: function(response) {      
        response = Ext.decode(response.responseText)
        //  console.log(response)
        //if(response.errorMessage =='Successfully login' && response.errorCode == 0)
        //  {
        /*  var url = 'landing/MainTabPanel'; 
        app.application.redirectTo(url) 
        var userNameObj = document.getElementById('UserNameLandingpageID')
        userNameObj.innerHTML = ''
        userNameObj.innerHTML = setusername      
        // }
        else
        {
        Ext.Msg.alert('', response.errorMessage);
        return false     
        }     
        },
        failure: function(response) {
        response = Ext.decode(response.responseText)
        Ext.Msg.alert('', 'Server is not responding please try again');     
        }
        });   */                     
    }
});