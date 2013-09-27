Ext.define('MarlowApp.view.Dashboard', {
    extend: 'Ext.Container', 
    requires: ['Ext.Img', 'Ext.dataview.List'],
    xtype:'dashboardView',
    config: {
    style: 'background: url("resources/images/marlow-back/home-night.gif"); min-height: 426px; min-width: 320px; height: auto; width: auto',   
        fullscreen: true,
        items: [
            {
                xtype: 'container',
                layout: 'auto',
                items: [
                    {
                        xtype: 'image',
                        layout: 'fit',
                        html: '<img src = "resources/images/marlow-back/marlow-night.png" style = "width: 300px; height: 200px;">',
						
                        flex: 1,
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
                        html: '<img src = "resources/images/marlow/camera-white-icon.png" style = "width: 50px; height: 50px;">',
                        align: 'middle',
                        style: 'padding-right: 150px;',
                        flex: 1,
                    },
                    {
                        xtype: 'button',
                        text: 'SNAP IT',
                        baseCls: 'null',
                        centered: true,
                        docked: 'right',
                        style: 'color: white; font-family: LeagueGothicRegular; color: white; font-size: 40px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -40px; margin-left: 120px;',
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
                        html: '<img src = "resources/images/marlow/my-list-white-icon.png" style = "width: 50px; height: 50px;">',
                        align: 'middle',
                        style: 'padding-right: 150px;',  
                        flex: 1,
                    },
                    {
                        xtype: 'button',
                        text: 'SHOPS',
                        baseCls: 'null', 
                        centered: true,
                        docked: 'right',
                        style: 'color: white; font-family: LeagueGothicRegular; color: white; font-size: 40px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -40px; margin-left: 100px;',
                        flex: 1,
                        handler:function()
                        {
                            app.application.redirectTo('shops');
                             
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
                        html: '<img src = "resources/images/marlow/shops-white-icon.png" style = "width: 50px; height: 50px;">',
                        align: 'middle',
                        style: 'padding-right: 150px;',  
                        flex: 1,
                    },
                    {
                        xtype: 'button',
                        text: 'MY LIST',
                        centered: true,
                        baseCls: 'null',
                        docked: 'right',
                        style: 'color: white; font-family: LeagueGothicRegular; color: white; font-size: 40px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -40px; margin-left: 120px;',
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
//				xtype: 'image',
//				html: '<img src = "resources/images/marlow-back/marlow-night.gif" style = "background-size: 100% 100%;">',	
//			}
        ]
    }
});