Ext.define('MarlowApp.view.ShareIndivisual',{
	extend: 'Ext.Container',  
	requires: ['Ext.List', 'Ext.Button', 'Ext.Img', 'Ext.form.Panel', 'Ext.field.TextArea'],
	xtype: 'popupindivisual',
	
	config:{
		
		itemId: 'popupindivisual',  
		floating: true,  
		centered: true,
		modal: true,  
		showAnimation: { type: 'slide', direction: 'bottom'},  
		styleHtmlContent: true,
		height: 340,
		width: 370,
		baseCls: 'custom-social-alert-box',
		items: [
			{
				xtype: 'toolbar',
				baseCls: 'custom-social-toolbar',
				style: 'background-color: white;',
				docked: 'top',
				title: '<img src = "resources/images/social/2-gray.png"> Twitter',
				layout: {
					pack: 'justify',
					type: 'hbox'
				},
				
				items: [
					{
						xtype: 'button',
						align: 'left',
						text: 'Cancel',
						action: 'hide',
						cls: 'custom-button',
						style: 'color: #258dc8; margin-left: -20px;',
					},
					{
						xtype: 'button',
						align: 'right',
						text: 'Post',
						//action: 'hide',
						cls: 'custom-button',
						style: 'color: #258dc8; margin-right: -20px;',
					}
				]
			},
			{
				xtype: 'container',
				layout: {
					pack: 'justify',
					type: 'hbox'
				},
				
				items: [
					{
						xtype: 'textareafield',
						docked: 'left',
						cls: 'custom-text-field',
						width: 250,
						height: 120,
					},
					{
						xtype: 'image',
						html: '<img src = "resources/images/guy-dummy.png" style = "height: 120px; width: 80px;">',	
						docked: 'right',
					}
				]
					
			},
			{
				xtype: 'container',
				layout: 'fit',
				
				items: [
					{
						html: '118',
						style: 'font-family:  HelveticaBold; color: #C0C0C0; font-weight: light;',		
					}
				]	
			},
			{
				xtype: 'container',
				
				items: [
					{
						xtype: 'list',
						itemTpl: '{title}',
						data: [
							{ title: 'Item 1' },
							{ title: 'Item 2' },
							{ title: 'Item 3' },
							{ title: 'Item 4' }
						]	
					}
				]	
			}
		]
	}
});  