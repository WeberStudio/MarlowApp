Ext.define('MarlowApp.view.Dashboard', {
    extend: 'Ext.navigation.View',      
    xtype:'dashboardView',
    inline: true,
    requires: [ 'Ext.dataview.List' ],
    config: {
		fullscreen: true,
		navigationBar: {
		hidden: true
		},
              tabBarPosition: 'bottom',
        items : [{
                        xtype: 'list',
                        inline: true,
                        itemId:'list',
                        itemTpl: '<div class="contact"  style = "font-size: 36px; color: white; font-weight: bolder;" >{img}{title} </div>',
                        style: "background-image:url('resources/images/marlow-back/home_night.gif'); background-size: 100% 100%;",
                        data   : [
                            { 
                                title: 'SNAP IT',  
                                img:  '<img src="resources/images/marlow/snap-it-icon.png" alt = "" style = "margin-left: 60px; margin-top: 270px; margin-bottom: -15px; padding-right: 30px; width: 25%;" />', 
                            },
                            { 
                                title: 'SHOPS',
                                img:  '<img src="resources/images/marlow/shops-icon.png" alt = "" style = "margin-left: 60px; width: 25%; margin-bottom: -15px; padding-right: 30px;" />' 
                            },
                            { 
                                title: 'MY LIST',
                                img:  '<img src="resources/images/marlow/my-list-icon.png" alt = "" style = "margin-left: 60px; width: 25%; margin-bottom: -15px; padding-right: 30px;"/>' 
                            },
							                            
                        ],
                        fullscreen: true,
                        listeners:
                        {
                            itemtap: function(cmp, index, target, record, e, eOpts)
                            {
                                   // alert('Tapped on index: '+record.data.title);
                                   // console.log(record.data);
                                    /*console.log(target);
                                    console.log(e);
                                    console.log(eOpts);
                                    console.log(cmp);
                                    console.log(target);*/
                                    if(record.data.title == 'SNAP IT')
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
                                    else if(record.data.title == 'SHOPS')
                                    { 
                                        app.application.redirectTo('shops')    
                                    }
                                    else if(record.data.title == 'MY LIST')
                                    {
                                        app.application.redirectTo('myitemlist')    
                                    }
                            }
                        }
                }]
        }
});