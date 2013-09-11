Ext.define('MarlowApp.view.Shops', {
    extend: 'Ext.navigation.View', 
    xtype:'shopsview',
    config: 
    {
        id:'shopid',
        items : [{
                xtype: 'list',
                inline: true,
                id:'list',
                store :'allshopsStoreId',
                itemTpl: '<div class="contact">{name} </div>',               
        }]
    }   
});