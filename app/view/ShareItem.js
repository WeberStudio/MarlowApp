Ext.define('MarlowApp.view.ShareItem',{
	requires: ['Ext.Button'],
	extend: 'Ext.dataview.List',  
	xtype: 'popupbox',
	height: 270,
	width: 400,
	config:{  
		itemId: 'popbox',  
		floating: true,  
		centered: true,  
		modal: true,  
		height: 200,  
		width: 300,  
		showAnimation: { type: 'slide', direction: 'bottom'},  
		styleHtmlContent: true,  
		style: 'background-color: white; border-radius: 10px; font-family: Calibri; font-size: 22px; color: black; border-bottom: #c5c5c5 solid 1px',
		items:[
		{
            xtype: 'toolbar',
            docked: 'top',
			title: 'Share this item',
			baseCls: 'custom-share-toolbar',
			align: 'right',
			layout: {
				pack: 'justify',
				type: 'hbox'
			}, 
     		items: [
				{
					xtype: 'button',
					align: 'left',
                    text: '<span style = "font-size: 20px; font-weight: lighter; color: #0079FF"> Cancel  </span> ',
					cls: 'custom-button',
					action: 'shareitem',
				},
            ]
	},
			{				
				xtype: 'list',
				layout: 'fit',
				flex: 1,
				cls: 'custom-share-inner-text', 			
				data: [
					{icon: '<img src = "resources/images/social/1.png">', title: 'Email'},
					{icon: '<img src = "resources/images/social/2.png">',  title: 'Twitter'},
					{icon: '<img src = "resources/images/social/3.png">', title: 'Facebook'},
					{icon: '<img src = "resources/images/social/4.png">', title: 'Pinterest'},
				],
				itemTpl: '{icon} {title}',
			},
		]
	}
});  