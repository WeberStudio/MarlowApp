Ext.define('MarlowApp.view.MyItemList', {
    extend: 'Ext.navigation.View',
    //extend: 'Ext.Container',  
    xtype:'myitemlistview',
    inline: true,
    requires: [ 'Ext.dataview.List' ],
    config: {
         
              tabBarPosition: 'bottom',
              
        items : [{
                        store :'all_productsid', 
                        xtype: 'list',
                        inline: true,
                        grouped: true,
                        id:'list',
                        //: '{name}',
                        itemTpl: '{image}<p>{note}</p><br><b>{price}</b>',
                }]
        }
});