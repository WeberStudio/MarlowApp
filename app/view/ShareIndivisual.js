Ext.define('MarlowApp.view.ShareIndivisual',{
	extend: 'Ext.Container',  
	requires: ['Ext.List', 'Ext.Button', 'Ext.Img', 'Ext.form.Panel', 'Ext.field.TextArea'],
	xtype: 'popupindivisual',
	height: 340,
	width: 440,
	config:{  
		itemId: 'popupindivisual',  
		floating: true,  
		centered: true,
		modal: true,  
		height: 200,  
		width: 300,  
		showAnimation: { type: 'slide', direction: 'bottom'},  
		styleHtmlContent: true,  
		style: 'border-radius: 10px; background: url("resources/images/marlow-back/gradient-background.png")',
		items:[
			{
				xtype: 'toolbar',
				docked: 'top',
				title: '<img src = "resources/images/social/2-gray.png">Twitter',
				baseCls: 'custom-share-indivisual-toolbar',
				align: 'right',
				style: 'border: none; border-radius: 10px; border-bottom: 1px solid #c5c5c5; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;',
				layout: {
					pack: 'justify',
					type: 'hbox'
				}, 
				items: [
					{
						xtype: 'button',
						align: 'left',
						text: '<span style = "font-size: 20px; font-weight: lighter; color: #0079FF"> Cancel  </span> ',
						action: 'hide',
						cls: 'custom-button',
					},
					{
						xtype: 'button',
						align: 'right',
						text: '<span style = "font-size: 20px; font-weight: lighter; color: #0079FF"> Post  </span> ',
						action: 'hide',
						cls: 'custom-button',
					},
				]
			},
			{
				xtype: 'container',
				layout: 'fit',
				items: [
					{
						xtype: 'textareafield',
						name : 'Name',
						width: 300,
						height: 120,
						docked: 'left',
						style: 'background-color: black;',
						flex: 1,
					},
					{
						xtype: 'image',
						html: '<img src = "resources/images/marlow-back/home_night.gif" style = "width: 80px; height: 120px;">',
						flex: 2,
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
						flex: 1,
						style: 'color: #808080; font-size: 14px;',
					}
				]
			},
			{				
				xtype: 'container',
				layout: 'fit',
				
				items: [
					{
						xtype: 'panel',
						docked: 'left',
						html: 'Account',
						flex: 1,
						style: 'font-size: 24px; font-weight: lighter; font-family: calibri; color: black; padding-right: 20px;'
					},
					{
						xtype: 'panel',
						html: 'example@example.com',
						width: 250,
						flex: 1,
						style: 'font-size: 24px; font-weight: lighter; font-family: calibri; color: #808080; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;'
					},
					{
						xtype: 'image',
						docked: 'right',
						layout: 'auto',
						flex: 1,
						html: '<img src = "resources/images/marlow/arrow copy.png">',
					}
				]
			},
			{				
				xtype: 'container',
				layout: 'fit',
				
				items: [
					{
						xtype: 'panel',
						docked: 'left',
						html: 'Location',
						flex: 1,
						style: 'font-size: 24px; font-weight: lighter; font-family: calibri; color: black; padding-right: 20px;'
					},
					{
						xtype: 'panel',
						html: 'None',
						width: 250,
						flex: 1,
						style: 'font-size: 24px; font-weight: lighter; font-family: calibri; color: #808080; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;'
					},
					{
						xtype: 'image',
						docked: 'right',
						layout: 'auto',
						flex: 1,
						html: '<img src = "resources/images/marlow/arrow copy.png">',
					}
				]
			}
		],
	}
});  