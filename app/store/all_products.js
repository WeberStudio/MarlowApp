Ext.define('MarlowApp.store.all_products', {
    extend: 'Ext.data.Store',
    config: {
        storeId : 'all_productsid',
        fields: ['brand_id','id','image','note','price','status','user_id'],   
        sorters: 'note',
        grouper: {
                groupFn: function (item) {
                    return item.get('note')[0];
                } // groupFn
            }, // grouper
            groupDir: 'DESC',
    }
});