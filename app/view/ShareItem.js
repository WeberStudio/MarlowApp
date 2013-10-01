Ext.define('MarlowApp.view.ShareItem',{
	requires: ['Ext.List', 'Ext.Button', 'Ext.Img'],
	extend: 'Ext.dataview.List',  
	xtype: 'shareitem',
	config:{  
		id: 'shareitem',  
		floating: true,  
		centered: true,  
		modal: true,  
		height: 260,  
		width: 300,  
		showAnimation: { type: 'slide', direction: 'bottom'},  
		styleHtmlContent: true,  
        scroller: 'verticle',
		style: 'border-radius: 10px; ',
		items:[
		{
            xtype: 'toolbar',
            docked: 'top',
            id: 'share-toolbar',
			title: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Share this item',
			baseCls: 'custom-share-toolbar',
			align: 'right',
			style: 'background: url("resources/images/template/share-toolbar.png") repeat; height: 260; widht: 500; border-radius: 10px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;' ,
			layout: {
				pack: 'justify',
				type: 'hbox'
			}, 
     		items: [
				{
					xtype: 'button',
					align: 'left',
                    id: 'cancel-button',
                    text: 'Cancel',
					style: 'color: #258dc8;',
					action: 'hide',
					cls: 'custom-button',
				},
            ]
	 	},	
		{
			xtype: 'panel',
			
			items: [
				
				{
					xtype: 'button',
					style: 'margin-bottom: -10px; background: url("resources/images/template/email1.png"); height: 54px; border-radius: 0px;',
					action: 'shareemail',
/*					handler:function()
					{
						alert('Email');
					}
*/				},
				{
					xtype: 'button',
					style: 'background: url("resources/images/template/twitter1.png"); height: 54px; border-radius: 0px; margin-top: 8px',
					action: 'showtwitter', 

				},
				{
					xtype: 'button',
					style: 'background: url("resources/images/template/facebook1.png"); height: 54px; border-radius: 0px; margin-top: -3px',
					action: 'showfacebook',
				},
				{
					xtype: 'button',
					style: 'background: url("resources/images/template/pinterest1.png"); height: 54px; border-radius: 10px;  border-top-right-radius: 0px; border-top-left-radius: 0px; border-bottom: 0px; margin-top: -2px',
					action: 'showpinterest',

				},

			
			]
			
		},	
		],
	}
});  
