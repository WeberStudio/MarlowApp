Ext.define('MarlowApp.model.all_products', {
    extend: 'Ext.data.Model',
    config: {
           fields: ['brand_id','id','image','note','price','status','user_id']
    }
});