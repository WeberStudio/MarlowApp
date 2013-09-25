Ext.define('MarlowApp.view.EmailPost',{
	extend: 'Ext.Container',  
	requires: ['Ext.List', 'Ext.Button', 'Ext.Img', 'Ext.form.Panel', 'Ext.field.TextArea', 'Ext.field.Text'],
	xtype: 'emailindivisual',
	config:{  
		itemId: 'emailindivisual',  
		floating: true,  
		centered: true,
		modal: true,  
		height: 350,
		width: 440,
		showAnimation: { type: 'slide', direction: 'bottom'},  
		styleHtmlContent: true,  
		style: 'border-radius: 10px; background: url("resources/images/marlow-back/gradient-background.png")',
		items:[
			{
				xtype: 'toolbar',
				docked: 'top',
				title: '<img src = "resources/images/social/email_.png"> Email',
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
				layout: 'auto',
				items: [
					{	
						html: 'To',
						width: 80,
						flex: 1,
						docked: 'left',
						style: 'font-size: 22px; font-weight: lighter; font-family: calibri; color: black; padding-right: 20px;'
					},
					{	
						xtype: 'textfield',
						flex: 2,
						width: 300,
						docked: 'left',
						border: 1,
						style: 'border-radius: 20px;',
					},
					
				]
				
			},
			{
				html: '<br>',	
			},
			{
				xtype: 'container',
				layout: 'auto',
				items: [
					{	
						html: 'Subject',
						width: 80,
						flex: 1,
						docked: 'left',
						border: 1,
						style: 'font-size: 22px; font-weight: lighter; font-family: calibri; color: black; padding-right: 20px;'
					},
					{	
						xtype: 'textfield',
						flex: 2,
						width: 300,
						docked: 'left',
						style: 'border-radius: 20px;',
					},
					
				]
				
			},
		],
	}
});  