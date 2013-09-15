Ext.define('MarlowApp.model.Save_User_SelectionM', {
    extend: 'Ext.data.Model',
    config: {
           fields: 
           [
            {name: "user_id",   type: "int"},
            {name: "note",      type: "string"},
            {name: "price",     type: "string"},
            {name: "image",     type: "string"} ,
            {name: "brand_id",  type: "int"},
            {name: "status",    type: "1"}            
           ]
    }
});