Ext.define('MarlowApp.view.Shops', {
    //extend: 'Ext.navigation.View',
    extend: 'Ext.tab.Panel',  
    xtype:'shopsview',
    config: 
    {
        id:'shopid',
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Snap It',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    //title: 'Welcome to Sencha Touch 2'
                }
            },
            {
                title: 'Shops',
                iconCls: 'list',
                
                styleHtmlContent: true,
                scrollable: true,
                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    //title: 'Welcome to Sencha Touch 2'
                }  
            },
            {
                title: 'My List',
                iconCls: 'home',
                
                styleHtmlContent: true,
                scrollable: true,
                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    //title: 'Welcome to Sencha Touch 2'
                }  
            },
            {
                title: 'Info',
                iconCls: 'info',
                styleHtmlContent: true,
                scrollable: true,
                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    //title: 'Welcome to Sencha Touch 2'
                }  
            }
            ]
    }
});