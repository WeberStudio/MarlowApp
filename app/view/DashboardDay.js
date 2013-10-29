Ext.define('MarlowApp.view.DashboardDay', {
    extend: 'Ext.Container', 
    requires: ['Ext.Img'],
    xtype:'dashboarddayView',
    id: 'dashboard-day',
    config: {
    style: 'background: url("resources/images/marlow-back/home-day.gif")',
    width: '100%',
    height: '100%',
     
        fullscreen: true,
        items: [
             //{
               // xtype: 'container',
                //width: '85%',
                //height: '40%',
                //items: [
                    //{
                       // xtype: 'image',
                        //id: 'dashboard-day-logo',
                        //centered: true, 
                        //html: '<img src = "resources/images/marlow-back/marlow-day.png">',
                        //height: '35%',
                       // width: '35%',
                       // padding: '0 20% 0 5%' ,
                         
                    //},
                //]    
           // },
           {
            xtype: 'container',
            width: '100%',
            height: '40%',
            //style: 'border: 2px solid white;',
            items: [

                {
                    xtype: 'image',
                    src: 'resources/images/marlow-back/marlow-day.png',
                    //centered: true,   
                    height: '100%',      
                    width: '100%',      
                    flex: 1,
                    //style: 'margin-right: 40%;',
                },    
            ]
        },
             {
                xtype: 'container',
                width: '100%',
                height: '15%',
                items: [
                    
                     {
                        xtype: 'image',
                        src: 'resources/images/marlow/camera-blue-icon.png',
                        centered: true, 
                        id: 'snapit-main-icon',  
                        height: '50%',      
                        width: '50%',      
                        flex: 1,
                        style: 'margin-right: 60%;',
                        listeners: {
                            tap: function() {
                                
                                if(Ext.os.is.Android) { 
                            document.addEventListener("deviceready",function(imagedata){
                                pictureSource=navigator.camera.PictureSourceType;
                                destinationType=navigator.camera.DestinationType;
                                
                                 navigator.camera.getPicture(function(imagedata){
                                     snapSrc = '';  
                                    snapSrc = imagedata;
                                    app.application.redirectTo('snapit');   
                                    }, onFail, { 
                                        quality: 50,
                                        destinationType: Camera.DestinationType.FILE_URI 
                                    });    
                                
                            },false);
                            
                          app.application.redirectTo('snapit'); 
                           }
                           else if(Ext.os.is.iOS) { 
                                //alert('Tapped on index: '+record.data.title); 
                            Ext.device.Camera.capture
                            ({
                                source: 'camera',
                                destination: 'data',
                                success: function(imagedata) 
                                {
                                    //console.log(imagedata)
                                    snapSrc = '';  
                                    snapSrc = imagedata;
                                   // img.setSrc('data:image/jpeg;base64,' +imagedata);
                                    app.application.redirectTo('snapit');   
                                },
                                failure: function() {
                                    Ext.Msg.alert('Error', 'There was an error when acquiring the picture.');
                                    app.application.redirectTo('dashboard');
                                },
                                scope: this
                            });                                      
                            //window.location = 'SnapIt' ;
                            
                           }
                            }
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'SNAP IT',
                        baseCls: 'null',
                        id: 'snapit-button', 
                        centered: true,
                        docked: 'right',
                        style: 'font-family: LeagueGothicRegular; color: white; font-size: 24px; letter-spacing: 5px; font-weight: lighter; border: none; margin-top: -1%; margin-left: 20%;',
                        flex: 1,
                        handler:function()
                        {
                            if(Ext.os.is.Android) { 
                            document.addEventListener("deviceready",function(imagedata){
                                pictureSource=navigator.camera.PictureSourceType;
                                destinationType=navigator.camera.DestinationType;
                                
                                 navigator.camera.getPicture(function(imagedata){
                                     snapSrc = '';  
                                    snapSrc = imagedata;
                                    app.application.redirectTo('snapit');   
                                    }, onFail, { 
                                        quality: 50,
                                        destinationType: Camera.DestinationType.FILE_URI 
                                    });    
                                
                            },false);
                            
                          app.application.redirectTo('snapit'); 
                           }
                           else if(Ext.os.is.iOS) { 
                                //alert('Tapped on index: '+record.data.title); 
                            Ext.device.Camera.capture
                            ({
                                source: 'camera',
                                destination: 'data',
                                success: function(imagedata) 
                                {
                                    //console.log(imagedata)
                                    snapSrc = '';  
                                    snapSrc = imagedata;
                                   // img.setSrc('data:image/jpeg;base64,' +imagedata);
                                    app.application.redirectTo('snapit');   
                                },
                                failure: function() {
                                    Ext.Msg.alert('Error', 'There was an error when acquiring the picture.');
                                    app.application.redirectTo('dashboard');
                                },
                                scope: this
                            });                                      
                            //window.location = 'SnapIt' ;
                            
                           }
                        }
                    },    
                ]
            },
            {
                xtype: 'container',
                width: '100%',
                height: '15%',
                items: [
                    
                     {
                        xtype: 'image',
                        src: 'resources/images/marlow/my-list-blue-icon.png',
                        centered: true, 
                        height: '50%', 
                        id: 'shops-main-icon',     
                        width: '50%',
                        flex: 1,
                        style: 'margin-right: 60%;',
                        listeners: {

                            tap: function() {

                                app.application.redirectTo('shops');
                            }
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'SHOPS',
                        baseCls: 'null',
                        id: 'shops-button', 
                        centered: true,
                        docked: 'right',
                        style: 'font-family: LeagueGothicRegular; color: white; font-size: 24px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -1%; margin-left: 18%;',
                        flex: 1,
                         handler:function()
                        {
                             app.application.redirectTo('shops')    
                        }
                    },    
                ]
            },
            {
                xtype: 'container',
                width: '100%',
                height: '15%',
                items: [
                    
                    {
                        xtype: 'image',
                        src: 'resources/images/marlow/shops-blue-icon.png',
                        height: '50%',      
                        width: '50%',
                        id: 'mylist-main-icon',          
                        centered: true,                         
                        flex: 1,
                        style: 'margin-right: 60%;',
                        listeners: {

                            tap: function() {

                                app.application.redirectTo('myitemlist');
                            }
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'MY LIST',
                        centered: true,
                        id: 'mylist-button', 
                        baseCls: 'null',
                        docked: 'right',
                        style: 'font-family: LeagueGothicRegular; color: white; font-size: 24px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -1%; margin-left: 20%;',
                        flex: 1,
                        
                        handler:function()
                        {
                             app.application.redirectTo('myitemlist')    
                        }
                    },
                ]
            },
        ]
    }
});