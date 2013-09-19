Ext.define('MarlowApp.view.ShareIndivisual',{
	extend: 'Ext.form.Panel',
	alias: 'widget.Home',  
	xtype: 'popupindivisual',
	config:{  

		itemId: 'popupindivisual',  
		floating: true,
		centered: true,
		modal: true,  
		height: 350,  
		width: 410,
		//baseCls: 'custom-form-alert',
		showAnimation: { type: 'slide', direction: 'bottom'},  
		styleHtmlContent: true,  
		style: ' background-color: white; border-radius: 10px; font-family: Calibri; font-size: 22px; color: black; border-bottom: #c5c5c5 solid 1px',
		items:[
			{
				xtype: 'toolbar',
				docked: 'top',
				title: '<img src = "resources/images/social/2-gray.png" /> <span style = "margin-top: 10px;">Twitter<span>',
				baseCls: 'custom-share-toolbar',
				layout: {
				pack: 'justify',
			}, 
			items: [
				{
					xtype: 'button',
					align: 'left',
					text: '<span style = "font-size: 24px; font-weight: 100; color: #0079FF"> Cancel  </span> ',
					cls: 'custom-button',
					
				},
				{
					xtype: 'button',
					align: 'right',
					text: '<span style = "font-size: 24px; font-weight: 100; color: #0079FF"> Post  </span> ',
					cls: 'custom-button',
					
				},

			]
		},
		{
			xtype: 'img',
			html: '<img src = "resources/images/marlow-back/home_day.gif" style = "width: 80px; height: 117px; margin-left: -540px;">',
			style: 'float: right;',
			
		},
		{
			xtype: 'textareafield',
			name: 'socialDesc',
			width: 280,
			height: 120,
			border: 1,
		},
		{
			
			xtype: 'panel',
			cls: 'custom-share-indivisual-inner-text', 	
			width: 600,		
			html: '<span style = "font-size: 16px; color: #949494;"> 118 </span>',
			
		},
		{
			xtype: 'panel',
			cls: 'custom-share-indivisual-inner-text', 	
			width: 600,			
			html: ' Account <span style = "position: absolute; width: 50px; left: 240px; color: #949494; font-weight: lighter; " > @example </span><img src = "resources/images/marlow/arrow.png" style = "width: 27px; height: 27px; margin: 3px 0px -8px 180px; position: absolute; left: 160px;"> ',
			//html: '<img src = "resources/images/marlow/arrow.png">',
			style: 'padding: 5px; margin-top: 16px; font-size: 22px; border-bottom: 1px solid #c5c5c5; border-top: 1px solid #c5c5c5',
			
		},
		
		{
			xtype: 'panel',
			width: 600,	
			cls: 'custom-share-indivisual-inner-text', 				
			html: ' Location <span style = "position: absolute; width: 50px; left: 290px; color: #949494; font-weight: lighter; " > None </span><img src = "resources/images/marlow/arrow.png" style = "width: 27px; height: 27px; margin: 3px 0px -8px 178px; position: absolute; left: 160px; ">',
			style: 'padding: 5px; margin-top: 0px; font-size: 22px;' ,
			
		},
		
		
		
		/*{
			xtype: 'textfield',
			cls: 'custom-share-indivisual-inner-text', 			
			label: 'Account',
			placeholder: '@gt',
			style: 'border-bottom: 1px solid #9C9C9C',

		},
		{
			xtype: 'textfield',
			cls: 'custom-share-indivisual-inner-text',
			label: 'Location',
			placeholder: 'None',
		},*/
		
		
	],
}
}); 
