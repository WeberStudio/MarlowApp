Ext.define('MarlowApp.view.ShareItem',{
	requires: ['Ext.List', 'Ext.Button', 'Ext.Img'],
	extend: 'Ext.dataview.List',  
	xtype: 'shareitem',
	config:{  
		id: 'shareitem',  
		floating: true,  
		centered: true,  
		modal: true,  
		height: '50%',  
		width: '75%',
        maxWidth: 330,
        maxHeight: 240,  
		showAnimation: { type: 'slide', direction: 'bottom'},  
		styleHtmlContent: true, 
		cls: 'share-item-page',
		items:[
		{
            xtype: 'toolbar',
            docked: 'top',
			baseCls: 'custom-share-toolbar', 
            layout: {
                
                type: 'hbox',
                pack: 'left',
            },
     		items: [
				{
					xtype: 'button',
					align: 'left',
                    text: 'Cancel',
					action: 'hide',
					cls: 'share-item-button',
				},
                {
                    xtype: 'button',
                    align: 'left',
                    text: 'Share this item',
                    cls: 'share-item-title',
                },
            ]
	 	},	
		{
			xtype: 'panel',
            baseCls: 'custom-share-panel',
			items: [
				
				{
					xtype: 'button',
                    cls: 'share-email',
					action: 'shareemail',

				},
				{
					xtype: 'button',
                    cls: 'share-twitter',
					action: 'showtwitter', 

				},
				{
					xtype: 'button',   
                    cls: 'share-facebook',
					action: 'showfacebook',
				},
				{
					xtype: 'button',   
                    cls: 'share-pinterest',
                    action: 'showpinterest',

				},

			
			]
			
		},	
		],
	}
});  
