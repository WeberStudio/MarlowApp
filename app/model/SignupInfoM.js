Ext.define('MarlowApp.model.SignupInfoM', {
    extend: 'Ext.data.Model',
    config: {
            fields: ['user_id', 'fname', 'lname', 'email', 'password', 'gender', 'join_date', 'status']        
    }
});