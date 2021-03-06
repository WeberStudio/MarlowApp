Ext.define('MarlowApp.model.Save_User_SelectionM', {
    extend: 'Ext.data.Model',
    config: {
           fields: 
           [
            {name: "product_id",    type: "int"},
            {name: "user_id",       type: "int"},
            {name: "note",          type: "text"},
            {name: "price",         type: "text"},
            {name: "image",         type: "text"},
            {name: "brand_id",      type: "int"},           
           ]
    }
});