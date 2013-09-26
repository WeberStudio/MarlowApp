Ext.define('MarlowApp.view.Dashboard', {
    extend: 'Ext.Container', 
    requires: ['Ext.Img', 'Ext.dataview.List'],
    xtype:'dashboardView',
    config: {
    style: 'background: url("resources/images/marlow-back/marlow-night.gif") 100% 100%;',   
        fullscreen: true,
        items: [
            {
                xtype: 'container',
                layout: 'auto',
                items: [
                    {
                        xtype: 'image',
                        layout: 'fit',
                        html: '<img src = "resources/images/marlow-back/marlow.png">',
						
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
                        html: '<img src = "resources/images/marlow/aa.png" >',
                        align: 'middle',
                        style: 'padding-right: 280px;',
                        flex: 1,
                    },
                    {
                        xtype: 'button',
                        text: 'SNAP IT',
                        centered: true,
                        //align: 'right',
                        docked: 'right',
                        style: 'background-image: url("resources/images/marlow-back/btn-back.png"); font-family: LeagueGothicRegular; color: white; font-size: 60px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -40px; margin-left: 150px;',
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
                        html: '<img src = "resources/images/marlow/bb.png">',
                        align: 'middle',
                        style: 'padding-right: 280px;',
                        flex: 1,
                    },
                    {
                        xtype: 'button',
                        text: 'SHOPS',
                        centered: true,
                        //align: 'right',
                        docked: 'right',
                        style: 'background-image: url("resources/images/marlow-back/btn-back.png"); font-family: LeagueGothicRegular; color: white; font-size: 60px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -40px; margin-left: 120px;',
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
                        html: '<img src = "resources/images/marlow/cc.png">',
                        align: 'middle',
                        style: 'padding-right: 280px;',
                        flex: 1,
                    },
                    {
                        xtype: 'button',
                        text: 'MY LIST',
                        centered: true,
                        //align: 'right',
                        docked: 'right',
                        style: 'background-image: url("resources/images/marlow-back/btn-back.png"); font-family: LeagueGothicRegular; color: white; font-size: 60px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -40px; margin-left: 160px;',
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