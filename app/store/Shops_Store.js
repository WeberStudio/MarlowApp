Ext.define('MarlowApp.store.Shops_Store', {
    extend: 'Ext.data.Store',
    config: {
        storeId : 'allshopsStoreId',   
        model: 'MarlowApp.model.Shops_Model',
    }
});