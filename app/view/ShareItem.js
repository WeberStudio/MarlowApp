Ext.define('MarlowApp.view.ShareItem',{
	requires: ['Ext.List', 'Ext.Button', 'Ext.Img'],
	extend: 'Ext.dataview.List',  
	xtype: 'shareitem',
	config:{  
		id: 'shareitem',  
		floating: true,  
		centered: true,  
		modal: true,  
		height: '60%',  
		width: '70%',
        maxWidth: 330,
        maxHeight: 240,  
		showAnimation: { type: 'slide', direction: 'bottom'},  
		styleHtmlContent: true,  
        scroller: 'verticle',
		style: 'border-radius: 10px; background-color: black;',
		items:[
		{
            xtype: 'toolbar',
            docked: 'top',
			title: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Share this item',
			baseCls: 'custom-share-toolbar',
			align: 'right',
			style: 'background: url("resources/images/template/share-background.png"); height: 20%; width: 100%; border-radius: 10px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;' ,
			layout: {
				pack: 'justify',
				type: 'hbox'
			}, 
     		items: [
				{
					xtype: 'button',
					align: 'left',
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
                    //text: 'Email',
					style: 'color: #258dc8; font-size: 120%; font-family: HelveticaLight; margin-top: -0.3%; background: url("resources/images/template/email1.png"); height: 28%; border-radius: 0px;',
					action: 'shareemail',

				},
				{
					xtype: 'button',
                    //text: 'Twitter',   
					style: 'color: #258dc8; font-size: 120%; font-family: HelveticaLight; background: url("resources/images/template/twitter1.png"); height: 28%; border-radius: 0px; margin-top: -4%',
					action: 'showtwitter', 

				},
				{
					xtype: 'button',
                    //text: 'Facebook',   
					style: 'color: #258dc8; font-size: 120%; font-family: HelveticaLight; background: url("resources/images/template/facebook1.png"); height: 28%; border-radius: 0px; margin-top: -4%',
					action: 'showfacebook',
				},
				{
					xtype: 'button',
                    //text: 'Pinterest',   
					style: 'color: #258dc8; font-size: 120%; font-family: HelveticaLight; background: url("resources/images/template/pinterest1.png"); height: 28%; border-radius: 8%px;  border-top-right-radius: 0px; border-top-left-radius: 0px; border-bottom: 0px; margin-top: -2%', 
                    action: 'showpinterest',

				},

			
			]
			
		},	
		],
	}
});  
