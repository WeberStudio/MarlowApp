Ext.define('MarlowApp.view.Dashboard', {
    extend: 'Ext.List',
    xtype:'dashboardView',
    config: {
        
        id:'dashboardId',
        scrollable : 'vertical',
        items: [ 
         {
                title: 'Dashboard',               
                layout: {
                    pack: 'center',
                    type: 'vbox'
                },
                items: [
                        {  
                            xtype: 'titlebar',
                            title: 'Dashboard'
                        },
                        {
                            store: {
                                fields: ['name'],
                                data: [
                                    {name: 'Cowper'},
                                    {name: 'Everett'},
                                    {name: 'University'},
                                    {name: 'Forest'}
                                ] 
                            },
                             itemTpl: '{name}'
                            
                        }
                        
   
                        /*{

                               items   : [
                                    {
                                        xtype: 'button',
                                        text : 'SNAP IT'
                                    },
                                    {
                                        xtype: 'button',
                                        text : 'SHOPS'
                                    },
                                    {
                                        xtype: 'button',
                                        text : 'MY LIST'
                                    }
                                ]


                        }*/ 
                ]
            }
            
         ],
        
     }
});