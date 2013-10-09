Ext.define('MarlowApp.store.all_products', {
    extend: 'Ext.data.Store',
    config: {
        storeId : 'all_productsid',
        fields: [ 'address', 'brand_id', 'image', 'name', 'note', 'price', 'pro_status', 'product_id', 'stop_id', 'user_id'],   
        sorters: 'name',
        grouper: {
                groupFn: function (item) {
                    return item.get('name');
                } // groupFn
            }, // grouper
            groupDir: 'ASC',       
    }
});