Ext.define('MarlowApp.view.MyList', {
	extend: 'Ext.Panel', 
	require: ['Ext.Img', 'Ext.Toolbar'],
    xtype:'mylistView', 
	//constructor: function() {
		//alert(this.self.getName()); // alerts 'My.cool.Class'
	//},
    
    config: {
		
		id :'mylistid',
		fullscreen: true,
		scrollable: true,
		xtype: 'panel',
		
		items: [
			{
				xtype: 'toolbar',
				docked: 'top',
				cls: 'top-toolbar',
				layout: {
					pack: 'justify',
					type: 'hbox'
				},
				
				items: [
					{
						xtype: 'button',
						align: 'left',
						text: '< Back',
						cls: 'custom-button',
						handler:function()
						{
							app.application.redirectTo('dashboard')
						}
					},
					{	
						xtype: 'button',
						text: 'Delete ',
						align: 'right',
						action: 'deleteitem',
						cls: 'custom-button',
					} 
				]
			},
			{
				xtype: 'toolbar',
				docked: 'bottom',
				ui: 'white',
				cls: 'bottom-toolbar',				
				layout: {
					align: 'center',
					pack: 'center',
					type: 'hbox',
				},

				items: [
					{
						xtype: 'image',
						iconAlign: 'center',
						html: '<img src = "resources/images/marlow-icons/snap-it-active.png" style = "height: 75px; margin-right: 20px;">',
						iconMask: true,
						listeners: {
							tap: function() {
								app.application.redirectTo('snapit');
							},
						},
					},
					{
						xtype: 'image',
						iconAlign: 'center',
						html: '<img src = "resources/images/marlow-icons/shops-disabled.png" style = "height: 75px; margin-right: 20px;">',
						iconMask: true,
						listeners: {
							tap: function() {
								app.application.redirectTo('shops');
							},
						},
					},
					{
						xtype: 'image',
						iconAlign: 'center',
						html: '<img src = "resources/images/marlow-icons/my-list-disabled.png" style = "height: 75px; margin-right: 20px;">',
						iconMask: true,
						listeners: {
							tap: function() {
								app.application.redirectTo('mylist');
							},
						},
					},

					{
						xtype: 'image',
						iconAlign: 'center',
						html: '<img src = "resources/images/marlow-icons/info-disabled.png" style = "height: 75px; margin-right: 20px;">',
						iconMask: true,
						listeners: {
							tap: function() {
								app.application.redirectTo('info');
							},
						},
					}
				]
			},
			{
				xtype: 'toolbar',
				docked: 'bottom',
				ui: 'white',
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
							app.application.redirectTo('addnote');
						}	
					},
					{
						xtype: 'button',
						align: 'right',
						text: 'Share this item',
						cls: 'custom-white-button',
						action: 'shareitem',
					}
				]
			},
			
			{
				xtype: 'panel',
				
				items: [
					{
						xtype: 'image',
                        id:'productViewImage',
						id:'snapId',
						html: '<img src = "resources/images/marlow-back/home_day.gif" style = "width: 100%; margin: 0; padding: 0; top: 0; left: 0; right: 0; bottom: 0;">',
					},
					{
					    xtype: 'panel',
                        id:    'productViewNote',
                        baseCls: 'overlapped-msg',    
                        centered: true,
                        html: '<span> Saw this and thought Bob might like it? </span>',
                                                
                        items: [
                            {
                                baseCls: 'overlapped-brand',
                                id:    'productViewBrand',
                                html: '<span> Marks and Spencer </span>',
                            },
                            {
                                baseCls: 'overlapped-price',
                                id:    'productViewPrice',      
                                html: '<span> $17.99 </sapn>',    
                            },
                        ]
                    },
					
				]	
			}
		]	
	}
});