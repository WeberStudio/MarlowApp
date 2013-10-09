Ext.define('MarlowApp.store.Shops_Store', {
    extend: 'Ext.data.Store',
    config: {
        storeId : 'allshopsStoreId',   
       // model: 'MarlowApp.model.Shops_Model', 
       fields: ['id','name','address','email','des','status'],
            sorters: 'name',
        grouper: {
                groupFn: function (item) {
                    return item.get('name')[0];
                } // groupFn
            }, // grouper
            groupDir: 'ASC',       
       
    }
});