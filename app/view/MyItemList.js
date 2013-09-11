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
                id:'list',
                itemTpl: '<img src="http://localhost/MarlowApp/resources/icons/icon-spot~ipad.png" alt="some_text"><p>{note}<br/><b>{price}</b> </p>',
                title : 'Dashboard',
                }]
        }
});