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
                    {
                        xtype: 'image',
                        id: 'dashboard-day-logo',
                        //centered: true, 
                        html: '<img src = "resources/images/marlow-back/marlow-day.png">',
                        height: '35%',
                        width: '35%',
                        padding: '0 15% 0 15%' ,
                         
                    },
                //]    
           // },
             {
                xtype: 'container',
                width: '100%',
                height: '15%',
                items: [
                    
                     {
                        xtype: 'image',
                        src: 'resources/images/marlow/camera-blue-icon.png',
                        centered: true,   
                        height: '50%',      
                        width: '50%',      
                        flex: 1,
                        style: 'margin-right: 40%;',
                    },
                    {
                        xtype: 'button',
                        text: 'SNAP IT',
                        baseCls: 'null',
                        centered: true,
                        docked: 'right',
                        style: 'font-family: LeagueGothicRegular; color: white; font-size: 24px; letter-spacing: 5px; font-weight: lighter; border: none; margin-top: -1%; margin-left: 20%;',
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
                height: '15%',
                items: [
                    
                     {
                        xtype: 'image',
                        src: 'resources/images/marlow/my-list-blue-icon.png',
                        centered: true,   
                        height: '50%',      
                        width: '50%',
                        flex: 1,
                        style: 'margin-right: 40%;',
                    },
                    {
                        xtype: 'button',
                        text: 'SHOPS',
                        baseCls: 'null',
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
                        centered: true,                         
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