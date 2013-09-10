Ext.define('MarlowApp.view.Dashboard', {   
    extend: 'Ext.List',
    xtype:'dashboardView',     
    config: {
        
        id:'dashboardId',
       
         items: [         
        {
           
                xtype: 'list',
                fullscreen: true,
                itemTpl: '{img}{title}',              
                 data   : [
                            { title: 'SNAP IT', img: '<img src="http://localhost/MarlowApp/resources/icons/icon-spot~ipad.png" alt="some_text">'},
                            { title: 'SHOPS',img:    '<img src="http://localhost/MarlowApp/resources/icons/icon-spot~ipad.png" alt="some_text">'},
                            { title: 'MY LIST',img:  '<img src="http://localhost/MarlowApp/resources/icons/icon-spot~ipad.png" alt="some_text">'},                            
                        ]
            }
            
         ],
        
     }
});