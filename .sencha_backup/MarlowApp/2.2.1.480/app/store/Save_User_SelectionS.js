Ext.define('MarlowApp.store.Save_User_SelectionS', {
    extend: 'Ext.data.Store',
    config: {
        storeId : 'SaveInfoStoreId',   
        model: 'MarlowApp.model.Save_User_SelectionM', 

    },
    autoLoad: true
});