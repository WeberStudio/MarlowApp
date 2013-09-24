Ext.define('MarlowApp.view.AddToList', {
	require: ['Ext.Img', 'Ext.Toolbar'],
	extend: 'Ext.Panel', 
    xtype:'addtolistView', 
	//constructor: function() {
		//alert(this.self.getName()); // alerts 'My.cool.Class'
	//},
    
    config: {
		
		id :'addtolistid',
		fullscreen: true,
		scrollable: true,
		
		items: [
			{
				xtype: 'toolbar',
				docked: 'top',
				title: 'This item has been added to your list',
				cls: 'top-toolbar',
				layout: {
					pack: 'justify',
					type: 'hbox'
				}
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
						id: 'snap-it-image',
						listeners: {
							tap: function() {
								
								var shopid              = Ext.getCmp("shopid");
								var snapViewId          = Ext.getCmp("snapViewId");
								var myitemlistviewId    = Ext.getCmp("myitemlistviewId");
								var addtolistid         = Ext.getCmp("addtolistid");
								
								
								if(myitemlistviewId){
									myitemlistviewId.destroy();
								}                       
								
								if(shopid){
									shopid.destroy();
								}
								if(snapViewId){
									snapViewId.destroy();
								}
								
								if(addtolistid){
									addtolistid.destroy();
								}                                 
								app.application.redirectTo('snapit')
							
							},
							},
					},
					{
						xtype: 'image',
						iconAlign: 'center',
						html: '<img src = "resources/images/marlow-icons/shops-disabled.png" style = "height: 75px; margin-right: 20px;">',
						iconMask: true,
						id: 'shops-image',
						listeners: {
							tap: function() {
								
								var shopid              = Ext.getCmp("shopid");
								var snapViewId          = Ext.getCmp("snapViewId");
								var myitemlistviewId    = Ext.getCmp("myitemlistviewId");
								var addtolistid         = Ext.getCmp("addtolistid");
								
								if(myitemlistviewId){
									myitemlistviewId.destroy();
								}                       
								
								if(shopid){
									shopid.destroy();
								}
								if(snapViewId){
									snapViewId.destroy();
								}
								
								if(addtolistid){
									addtolistid.destroy();
								}                                  
								app.application.redirectTo('shops')
							
							},
						
						},
					},
					{
						xtype: 'image',
						iconAlign: 'center',
						html: '<img src = "resources/images/marlow-icons/my-list-disabled.png" style = "height: 75px; margin-right: 20px;">',
						iconMask: true,
						id: 'my-list-image',
						listeners: {
							tap: function() {
								var shopid              = Ext.getCmp("shopid");
								var snapViewId          = Ext.getCmp("snapViewId");
								var myitemlistviewId    = Ext.getCmp("myitemlistviewId");
								var addtolistid         = Ext.getCmp("addtolistid");
								
								
								if(myitemlistviewId){
								myitemlistviewId.destroy();
								}                       
													   
								if(shopid){
								shopid.destroy();
								}
								if(snapViewId){
								snapViewId.destroy();
								}
								
								if(addtolistid){
								addtolistid.destroy();
								}                                 
							app.application.redirectTo('mylist')
							
							},
				},
					},

					{
						xtype: 'image',
						iconAlign: 'center',
						html: '<img src = "resources/images/marlow-icons/info-disabled.png" style = "height: 75px; margin-right: 20px;">',
						iconMask: true,
						id: 'info-image',
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
						text: 'Scan another item',
						cls: 'custom-white-button',
						handler:function()
						{
							app.application.redirectTo('snapit');
						}	
					},
					{
						xtype: 'button',
						align: 'left',
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
						id:'snapId',
						html: '<img src = "resources/images/marlow-back/home_day.gif" style = "width: 100%; margin: 0; padding: 0; top: 0; left: 0; right: 0; bottom: 0;">',
					},
					{
						xtype: 'panel',
						baseCls: 'overlapped-msg',	
						centered: true,
						html: '<span> Saw this and thought Bob might like it? </span>',
												
						items: [
							{
								baseCls: 'overlapped-brand',
								html: '<span> Marks and Spencer </span>',
							},
							{
								baseCls: 'overlapped-price',	
								html: '<span> £17.99 </span>',	
							}
						]
					},
					
				]	
			}
		]	
	}
});