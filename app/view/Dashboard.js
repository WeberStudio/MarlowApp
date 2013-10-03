Ext.define('MarlowApp.view.Dashboard', {
    extend: 'Ext.Container', 
    requires: ['Ext.Img'],
    xtype:'dashboardView',
    id: 'dashboard-night',
    config: {
    style: 'background: url("resources/images/marlow-back/home-night.gif") 100% 100%',
    width: '100%',
    height: '100%',
     
        fullscreen: true,
        items: [
             {
                xtype: 'container',
                width: '110%',
                height: '40%',
                items: [
                    {
                        xtype: 'image',
                        centered: true, 
                        html: '<img src = "resources/images/marlow-back/marlow-night.png" >',
                    },
                ]    
            },
            {
                xtype: 'container',
                width: '100%',
                height: '20%',
                items: [
                    
                    {
                        xtype: 'image',
                        src: 'resources/images/marlow/camera-white-icon.png',
                        height: '40%',
                        centered: true,
                        width: '40%',      
                        flex: 1,
                        style: 'margin-right: 40%;',
                    },
                    {
                        xtype: 'button',
                        text: 'SNAP IT',
                        baseCls: 'null', 
                        centered: true,
                        docked: 'right',
                        style: 'font-family: LeagueGothicRegular; color: white; font-size: 24px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -1%; margin-left: 20%;',
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
                ]
            },
            {
                xtype: 'container',
                width: '100%',
                height: '20%',
                items: [
                    
                     {
                        xtype: 'image',
                        src: 'resources/images/marlow/my-list-white-icon.png',
                        centered: true,   
                        height: '40%',      
                        width: '40%',      
                        flex: 1,
                        style: 'margin-right: 40%;',
                    },
                    {
                        xtype: 'button',
                        text: 'SHOPS',
                        baseCls: 'null',
                        centered: true,
                        docked: 'right',
                        style: 'font-family: LeagueGothicRegular; color: white; font-size: 24px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -1%; margin-left: 20%;',
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
                height: '20%',
                items: [
                    
                    {
                        xtype: 'image',
                        src: 'resources/images/marlow/shops-white-icon.png',
                        height: '40%',      
                        centered: true,
                        width: '40%',      
                        flex: 1,
                        style: 'margin-right: 40%;', 
                    },
                    {
                        xtype: 'button',
                        text: 'MY LIST',
                        centered: true,
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