Ext.define('MarlowApp.view.Dashboard', {
    extend: 'Ext.navigation.View',
    xtype:'dashboardView',
    inline: true,
    requires: [ 'Ext.dataview.List' ],
    config: {
              tabBarPosition: 'bottom',
        items : [{
                        xtype: 'list',
                        inline: true,
                        id:'list',
                        itemTpl: '<div class="contact">{img}{title} </div>',
                        data   : [
                            { 
                                title: 'SNAP IT', 
                                img: '<img src="http://localhost/MarlowApp/resources/icons/icon-spot~ipad.png" alt="some_text">'
                            },
                            { 
                                title: 'SHOPS',
                                img:    '<img src="http://localhost/MarlowApp/resources/icons/icon-spot~ipad.png" alt="some_text">'
                            },
                            { 
                                title: 'MY LIST',
                                img:  '<img src="http://localhost/MarlowApp/resources/icons/icon-spot~ipad.png" alt="some_text">'
                            },                            
                        ],
                        fullscreen: true,
                        listeners:
                        {
                            itemtap: function(cmp, index, target, record, e, eOpts)
                            {
                                    //alert('Tapped on index: '+record.data.title);
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
                }]
        }
});