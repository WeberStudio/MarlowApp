Ext.define('MarlowApp.view.Dashboard', {
    extend: 'Ext.dataview.List',
    xtype:'dashboardView',
    requires: [ 'Ext.navigation.View' ],
    config: {
        
        items: [         
        {
           		
                xtype: 'list',
                fullscreen: true,
				id:'list',  
				cls: 'dashboardListItem',
                itemTpl: '{img}{title}',
				style: "background-image:url('resources/images/home_night.gif'); background-size: 100% 100%;",
				
                data: [
                            
                 	{title: '<span style= "font-weight: bolder; font-size: 36px; color: white; margin-left: 30px; width: 10%;">SNAP IT</span>', 
					img:  '<img src="resources/images/marlow_icons/snap-it-icon.png" alt = "" style = "margin-left: 35px; margin-top: 270px; margin-bottom: -15px; height: auto; width: 25%;" />', },
					{title: '<span style= "font-weight: bolder; font-size: 36px; color: white; margin-left: 30px; width: 10%;">SHOPS</span>', 
					img:  '<img src="resources/images/marlow_icons/shops-icon.png" alt = "" style = "margin-left: 35px; width: 25%; margin-bottom: -15px" />' },
					
					{title: '<span style= "font-weight: bolder; font-size: 36px; color: white; margin-left: 30px; width: 10%;">MY LIST</span>', 
					img:  '<img src="resources/images/marlow_icons/my-list-icon.png" alt = "" style = "margin-left: 35px; width: 25%; margin-bottom: -15px"/>' },
				],
                
                fullscreen: true,
                        listeners:
                        {
                            itemtap: function(cmp, index, target, record, e, eOpts)
                            {
                                    alert('Tapped on index: '+record.data.title);
                                    /*console.log(record.data);
                                    console.log(target);
                                    console.log(e);
                                    console.log(eOpts);
                                    console.log(cmp);
                                    console.log(target);*/
                                    if(record.data.title == 'SNAP IT')
                                    { 
                                        //
                                        //alert('Tapped on index: '+record.data.title); 
                                        app.application.redirectTo('snapit');
                                        //window.location = 'SnapIt' ;
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
                
            }
            
         ],
        
     }
});