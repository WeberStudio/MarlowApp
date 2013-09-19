Ext.define('MarlowApp.view.Shops', {
	extend: 'Ext.navigation.View', 
	xtype:'shopsview',
	
	config: 
	{	
		id:'shopid',
		fullscreen: true,
		navigationBar: {
        hidden: true
    	},
		
        
        
        
	items : [
	{
            xtype: 'toolbar',
            docked: 'top',
			title: 'Choose Shop',
			cls: 'top-toolbar',
			layout: {
				pack: 'justify',
				type: 'hbox'
			}, 
     		items: [
				{
					xtype: 'button',
					align: 'left',
                    text: '<span style = "font-size: 22px; font-family: courier new; font-weight: bolder; padding-right: 2px;"> <</span><span style = "font-size: 18px; font-weight: lighter;">Back  </span> ',
					cls: 'custom-button',
                    handler:function()
                    {
                          app.application.redirectTo('addnote')
						 
                    }
				},
				{	
					xtype: 'button',
					text: '<span style = "font-size: 18px; font-weight: lighter;">Confirm  </span> ',
					align: 'right',
					cls: 'custom-button',
                    handler:function()
                    {
                          app.application.redirectTo('addtolist')
						 
                    }
                
				} 
            ]
	},
	{
            xtype: 'toolbar',
            docked: 'bottom',
			ui: "white",
			cls: 'bottom-toolbar',
            layout: {
                align: 'center',
                pack: 'center',
                type: 'hbox',
			},
     		items: [
				{
					xtype: 'img',
					iconAlign: 'center',
					html: '<img src = "resources/images/marlow-icons/snap-it-active.png" style = "height: 75px; margin-right: 20px;" >',
					iconMask: true,
					title: 'Snap It',
					listeners: {
						tap: function() {
						app.application.redirectTo('snapit')
						
					},
					},
				},
				{
					xtype: 'img',
					iconAlign: 'center',
					html: '<img src = "resources/images/marlow-icons/shops-disabled.png" style = "height: 75px; margin-right: 20px;">',
					iconMask: true,
					title: 'Shops',
					listeners: {
						tap: function() {
						app.application.redirectTo('shops')
						
					},
					},
				},
				{
					xtype: 'img',
					iconAlign: 'center',
					html: '<img src = "resources/images/marlow-icons/my-list-disabled.png" style = "height: 75px; margin-right: 20px;">',
					iconMask: true,
					title: 'My List',
					listeners: {
						tap: function() {
						app.application.redirectTo('mylist')
						
					},
					},
				},
				{
					xtype: 'img',
					iconAlign: 'center',
					html: '<img src = "resources/images/marlow-icons/info-disabled.png" style = "height: 75px; margin-right: 20px;">',
					iconMask: true,
					title: 'Info',
					listeners: {
						tap: function() {
						app.application.redirectTo('info')
						
					},
					},
				}
			]
	},
	{
		xtype: 'list',
		inline: true,
		grouped: true,
		cls: 'shops-list',  
		id:'list',
		store :'allshopsStoreId',
		itemTpl: '<div class="contact">{name} </div>',
		indexBar: true,
	    listeners:
                {
                    itemtap: function(cmp, index, target, record, e, eOpts)
                    {
                        //console.log(record.data.id);
                        shopSelected  = record.data.id;
                        
                    }
	            },
    }
]
}   
});