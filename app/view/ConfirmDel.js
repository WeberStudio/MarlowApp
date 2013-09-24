Ext.define('MarlowApp.view.ConfirmDel',{
	  
	extend: 'Ext.form.Panel',  
	xtype: 'deletebox',

	config:{  
		itemId: 'deletebox',  
		floating: true,  
		centered: true,  
		modal: true,  
		height: 200,  
		width: 300,  
		showAnimation: { type: 'slide', direction: 'bottom'},  
		styleHtmlContent: true,  
		html: 'Are you sure you want to delete this item from your shopping list?',
		style: 'background-color: white; border-radius: 10px; font-family: Calibri; font-size: 22px; color: black;',
  
		items:[  
			{  
				xtype: 'button',
				baseCls: 'null',
				action: 'hide',  
				text: 'Cancel',  
				//ui: 'confirm',  
				docked: 'bottom',
				//right: 25,
				border: 1,
				style: 'border-top: solid #C5C5C5; border-right: solid #C5C5C5; width: 50%; height: auto; padding: 15px; color: #4CA5D7',
			},
			{  
				xtype: 'button',
				baseCls: 'null',  
				action: 'confdelete',  
				text: 'Delete',  
				//ui: 'confirm',  
				docked: 'bottom',
				//right: 25,
				border: 1,
				style: 'border-top: solid #C5C5C5;  width: 50%; height: auto; padding: 15px; color: #4CA5D7; position: absolute; left: 145px;',
			},
			
		]  
	}  
});  