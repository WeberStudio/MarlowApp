Ext.define('MarlowApp.view.Dashboard', {
    extend: 'Ext.Container', 
    requires: ['Ext.Img', 'Ext.dataview.List'],
    xtype:'dashboardView',
    id: 'dashboard-night',
    config: {
    style: 'background: url("resources/images/marlow-back/home-night.gif") 100% 100%',
     
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
                        src: 'resources/images/marlow-back/marlow-night.png',
                        id: 'dashboard-logo-night',       
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
                id: 'after-logo-container',
                style: 'margin-top: 150px;',     
                items: [
                    
                    {
                        xtype: 'image',
                        id: 'dashboard-snapit-icon',
                        src: 'resources/images/marlow/camera-white-icon.png',
                        height: 50,
                        centered: true,
                        width: 50,
                        flex: 1,
                        style: 'margin-right: 120px;',
                    },
                    {
                        xtype: 'button',
                        text: 'SNAP IT',
                        id: 'dashboard-snapit-button',
                        baseCls: 'null',
                        centered: true,
                        docked: 'right',
                        style: 'color: white; font-family: LeagueGothicRegular; color: white; font-size: 40px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -4px; margin-left: 120px;',
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
                        id: 'dashboard-shops-icon',        
                        src: 'resources/images/marlow/my-list-white-icon.png',
                        height: 50,
                        centered: true,
                        width: 50,
                        flex: 1,
                        style: 'margin-right: 120px;',
                    },
                    {
                        xtype: 'button',
                        text: 'SHOPS',
                        id: 'dashboard-shops-button',  
                        baseCls: 'null', 
                        centered: true,
                        docked: 'right',
                        style: 'color: white; font-family: LeagueGothicRegular; color: white; font-size: 40px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -4px; margin-left: 120px;',
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
                        id: 'dashboard-my-list-icon',        
                        src: 'resources/images/marlow/shops-white-icon.png',
                        height: 50,
                        centered: true,
                        width: 50,
                        flex: 1,
                        style: 'margin-right: 120px;',
                    },
                    {
                        xtype: 'button',
                        text: 'MY LIST',
                        id: 'dashboard-my-list-button',  
                        centered: true,
                        baseCls: 'null',
                        docked: 'right',
                        style: 'color: white; font-family: LeagueGothicRegular; color: white; font-size: 40px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -4px; margin-left: 120px;',
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
        ]
    }
});