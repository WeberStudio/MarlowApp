Ext.define('MarlowApp.view.AddToList', {
	//extend: 'Ext.Panel', 
	require: ['Ext.Img'],
	extend: 'Ext.Panel', 
    xtype:'addtolistView', 
	//constructor: function() {
		//alert(this.self.getName()); // alerts 'My.cool.Class'
	//},
    
    config: {
        
        id :'addtolistid',
		fullscreen                  : true, 
		scrollable                  : true,

		items : [
			{
				xtype: 'toolbar',
				docked: 'top',
				title: 'The Item has been added to your list.',
				cls: 'top-toolbar',
				layout: {
				pack: 'justify',
				type: 'hbox'
			}, 
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
				id: 'snap-it-id',
				title: 'Snap It',
				
				listeners: {
					tap: function() {
					app.application.redirectTo('snapit')
					//window.location.reload();
					},
				},
			},
			{
				xtype: 'img',
				iconAlign: 'center',
				html: '<img src = "resources/images/marlow-icons/shops-disabled.png" style = "height: 75px; margin-right: 20px;">',
				iconMask: true,
				title: 'Shops',
				itemId: 'shops-id',
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
				id: 'my-list-id',
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
				id: 'info-id',
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
			xtype: 'toolbar',
			docked: 'bottom',
			ui: "white",
			cls: 'bottom-toolbar',
			layout: {
				pack: 'justify',
				type: 'hbox'
			}, 
			items: [
				{
					xtype: 'button',
					align: 'left',
					text: 'Scan another item',
					cls: 'custom-white-button',
					handler:function()
					{
						app.application.redirectTo('snapit')
						
					}

					
				},
				{
					xtype: 'button',
					align: 'right',
					text: 'Share this item',
					cls: 'custom-white-button',
				}

			]
		},
		{
		    xtype: 'img',
		    id:'snapId',
		    html: '<img src = "resources/images/marlow-back/home_day.gif" style = "width: 100%; margin: 0; padding: 0; top: 0; left: 0; right: 0; bottom: 0;">',
		    //store :'allshopsStoreId',
		    //itemTpl: '<div class="contact">{name} </div>',
		    //indexBar: true,
	    },	
		{
			xtype: 'panel',
			baseCls: 'overlapped-brand',		
			html: '<span> Marks and Spencer </span>',
		},
		{
			xtype: 'panel',	
			baseCls: 'overlapped-price',	
			html: '<span> £17.99 </span>',
		},	
		{
			xtype: 'panel',	
			baseCls: 'overlapped-msg',	
			html: '<span> Saw this and thought Bob might like it? </span>',
		},	

	  ]
        
	}
});