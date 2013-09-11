Ext.define('MarlowApp.view.MyItemList', {
    extend: 'Ext.navigation.View',
    //extend: 'Ext.Container',  
    xtype:'myitemlistview',
    inline: true,
    requires: [ 'Ext.dataview.List' ],
    config: {
         
              tabBarPosition: 'bottom',
              
        items : [{
                        //title : 'Dashboard',
                        store :'all_productsid', 
                        xtype: 'list',
                        inline: true,
                        grouped: true,
                        id:'list',
                        itemTpl: '{note}',
                        title : 'Dashboard',

                        
                }]
        }
});