Ext.define('MarlowApp.view.MyList', {
	//extend: 'Ext.Panel', 
	extend: 'Ext.Panel', 
    xtype:'mylistView', 
    
    config: {
        
        id :'mylistid',
		fullscreen                  : true, 
		scrollable                  : true,

		items : [
			{
				xtype: 'toolbar',
				docked: 'top',
				title: 'My List',
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
							app.application.redirectTo('dashboard')
							//window.location.reload();
						}
					},
					{	
						xtype: 'button',
						text: '<span style = "font-size: 18px; font-weight: lighter;"> Delete</span> ',
						align: 'right',
						action: 'deleteitem',
						cls: 'custom-button',
                       
                        
/*						
*/					} 
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
					listeners: {
						tap: function() {
						app.application.redirectTo('shops')
						//window.location.reload();
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
						app.application.redirectTo('myitemlist')
						//window.location.reload();
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
						//window.location.reload();
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
					text: 'Edit Notes',
					cls: 'custom-white-button',
					handler:function()
					{
						app.application.redirectTo('addnote')
						//window.location.reload();
					}
					
				},
				{
					xtype: 'button',
					align: 'right',
					text: 'Share this item',
					action: 'shareitem',
					cls: 'custom-white-button'
				}

			]
		},
		{
		    xtype: 'img',
		    id:'productViewImage',
		    html: '<img src = "resources/images/marlow-back/home_day.gif" style = "width: 100%; margin: 0; padding: 0; top: 0; left: 0; right: 0; bottom: 0;">',
		    //store :'allshopsStoreId',
		    //itemTpl: '<div class="contact">{name} </div>',
		    //indexBar: true,
	    },	
		{
			xtype: 'panel',
            id:     'productViewBrand',
			baseCls: 'overlapped-brand',		
			html: '<span> Marks and Spencer </span>',
		},
		{
			xtype: 'panel',
            id:     'productViewPrice',	
			baseCls: 'overlapped-price',	
			html: '<span> £17.99 </span>',
		},	
		{
			xtype: 'panel',
            id:     'productViewNote',	
			baseCls: 'overlapped-msg',	
			html: '<span> Saw this and thought Bob might like it? </span>',
		},	

	  ]
        
	}
});