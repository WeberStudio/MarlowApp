Ext.define('MarlowApp.view.Shops', {  
	extend: 'Ext.navigation.View', 
	xtype:'shopsview', 
    
	config: 
	{	
		id:'shopid',
	    items : 
        [
	        {
		        xtype: 'list',
		        grouped: true,  
	            id:'list',
                height :'100%',	
	            store :'allshopsStoreId',
	            itemTpl: '<div class="contact">{name}</div>',
		         
	        },
        ]       
    }             
});