Ext.define('MarlowApp.model.SignupInfoM', {
    extend: 'Ext.data.Model',
    config: {
          
            fields: 
           [
            {name: "user_id",   type: "int"},
            {name: "fname",      type: "text"},
            {name: "lname",     type: "text"},
            {name: "email",     type: "text"} ,
            {name: "password",  type: "text"},
            {name: "gender",    type: "text"},
            {name: "join_date",  type: "text"},
            {name: "status",    type: "text"}                        
           ]       
    }
});