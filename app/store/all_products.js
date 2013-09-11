Ext.define('MarlowApp.store.all_products', {
    extend: 'Ext.data.Store',
    config: {
        storeId : 'all_productsid',
        //fields: ['brand_id','id','image','note','price','status','user_id'],   
        model: 'MarlowApp.model.all_products',
    }
});