Ext.define('MarlowApp.view.DashboardDay', {
    extend: 'Ext.Container', 
    requires: ['Ext.Img', 'Ext.dataview.List'],
    xtype:'dashboarddayView',
    id: 'dashboard-day',
    config: {
    style: 'background: url("resources/images/marlow-back/home-day") 100% 100%',
     
        fullscreen: true,
        items: [
            {
                xtype: 'container',
                layout:  'fit',
                
                items: [
                    {
                        xtype: 'image',
                        layout: 'auto',
                        centered: true, 
                        src: 'resources/images/marlow-back/marlow-day.png',
                        id: 'dashboard-logo-day',       
                        height: 200,
                        width: 300,
                        flex: 1,
                    },
                    {
                        html: '<br><br><br>',    
                    }    
                ]    
            },
            {
                xtype: 'container',
                layout: 'fit',
                id: 'after-logo-container-day',
                style: 'margin-top: 150px;',     
                items: [
                    
                    {
                        xtype: 'image',
                        id: 'dashboard-snapit-icon-day',
                        src: 'resources/images/marlow/camera-blue-icon.png',
                        height: 50,
                        centered: true,
                        width: 50,
                        flex: 1,
                        style: 'margin-right: 120px;',
                    },
                    {
                        xtype: 'button',
                        text: 'SNAP IT',
                        id: 'dashboard-snapit-button-day',
                        baseCls: 'null',
                        centered: true,
                        docked: 'right',
                        style: 'font-family: LeagueGothicRegular; font-size: 40px; color: #004a80; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -4px; margin-left: 120px;',
                        flex: 1,
                        handler:function()
                        {
                            
                            //alert('Tapped on index: '+record.data.title); 
                            /*Ext.device.Camera.capture
                            ({
                                source: 'camera',
                                destination: 'data',
                                success: function(imagedata) 
                                {
                                    //console.log(imagedata)
                                    var img = Ext.getCmp('theimage');
                                    img.setSrc('data:image/jpeg;base64,' +imagedata);
                                    app.application.redirectTo('snapit');   
                                },
                                failure: function() {
                                    Ext.Msg.alert('Error', 'There was an error when acquiring the picture.');
                                    app.application.redirectTo('dashboard');
                                },
                                scope: this
                            }); */                                     
                            //window.location = 'SnapIt' ;
                            snapSrc = 'snap-it-active.png' ; 
                            app.application.redirectTo('snapit'); 
                        }
                    },    
                    {
                        html: '<br><br>',    
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'fit',
                
                items: [
                    
                    {
                        xtype: 'image',
                        id: 'dashboard-shops-icon-day',        
                        src: 'resources/images/marlow/my-list-blue-icon.png',
                        height: 50,
                        centered: true,
                        width: 50,
                        flex: 1,
                        style: 'margin-right: 120px;',
                    },
                    {
                        xtype: 'button',
                        text: 'SHOPS',
                        id: 'dashboard-shops-button-day',  
                        baseCls: 'null', 
                        centered: true,
                        docked: 'right',
                        style: 'font-family: LeagueGothicRegular;font-size: 40px; color: #004a80; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -4px; margin-left: 120px;',
                        flex: 1,
                        handler:function()
                        {
                            app.application.redirectTo('shops');
                             
                        }
                    },
                    {
                        html: '<br><br><br><br><br>',      
                    }    
                ]
            },
            {
                xtype: 'container',
                layout: 'fit',
                
                items: [
                    
                    {
                        xtype: 'image',
                        id: 'dashboard-my-list-icon-day',        
                        src: 'resources/images/marlow/shops-blue-icon.png',
                        height: 50,
                        centered: true,
                        width: 50,
                        flex: 1,
                        style: 'margin-right: 120px;',
                    },
                    {
                        xtype: 'button',
                        text: 'MY LIST',
                        id: 'dashboard-my-list-button-day',  
                        centered: true,
                        baseCls: 'null',
                        docked: 'right',
                        style: 'font-family: LeagueGothicRegular; color: #004a80; font-size: 40px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -4px; margin-left: 120px;',
                        flex: 1,
                        handler:function()
                        {
                             app.application.redirectTo('myitemlist')    
                        }
                    },
                    {
                        html: '<br><br>',    
                    }    
                ]
            },
            //{
//                xtype: 'image',
//                html: '<img src = "resources/images/marlow-back/marlow-night.gif" style = "background-size: 100% 100%;">',    
//            }
        ]
    }
});