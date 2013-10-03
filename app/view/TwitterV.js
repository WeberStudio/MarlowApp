Ext.define('MarlowApp.view.TwitterV',{
	extend: 'Ext.Container',  
	requires: ['Ext.List', 'Ext.Button', 'Ext.Img', 'Ext.form.Panel', 'Ext.field.TextArea'],
	xtype: 'twitterpopup',
	
	config:{
		  
        id: 'twitterpopup',
		floating: true,  
		centered: true,
		modal: true,  
		showAnimation: { type: 'slide', direction: 'bottom'},  
		styleHtmlContent: true,
		height: '70%',
        width: '92%',
        maxWidth: 420,
        maxHeight: 360,
		baseCls: 'custom-social-alert-box',
		items: [
			{
				xtype: 'toolbar',
				baseCls: 'custom-social-toolbar',
				docked: 'top',
				title: 'Twitter',
                style: 'padding-top: 1%; font-size: 90%; ',
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
						style: 'color: #258dc8; margin-left: -5%;', 
					},
					{
						xtype: 'image',
						html: '<img src = "resources/images/social/2-gray.png" style = "margin-left: -0.2%; margin-bottom: -1%px;">',
						
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
                        id:    'twitterdesc',
						docked: 'left',
						cls: 'custom-text-fieldarea',
						width: '80%',
                        height: '20%',
                        style: 'background-color: inherit;',
					},
					{
						xtype: 'image',
						html: '<img src = "resources/images/guy-dummy.png" style = "height: 80px; width: 60px;">',    
						docked: 'right',
					}
				]
					
			},
			{
				xtype: 'container',
				layout: 'fit',
				
				items: [
					{
						html: '<span>118<span>',
						style: 'font-family: HelveticaLight; color: #A0A0A0; border-bottom: 1px solid #C5C5C5;',
					},
				]	
			},
            {
                xtype: 'container',
                layout: 'hbox',
               style: 'padding-top: 2%; border-bottom: 1px solid #C5C5C5;',
                items: [
                    {
                        html: 'Account',
                        docked: 'left',
                        flex: 1,
                        style: 'font-size: 100%; font-family: HelveticaLight; color: black; padding-right: 5%;' 
                    },
                    {
                        html: 'example@example.com',
                        width: '60%', 
                        docked: 'left',
                        flex: 1,
                        style: 'font-size: 100%; font-family: HelveticaLight; color: #A0A0A0; padding-top: 1%; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;', 
                    },
                    {
                        xtype: 'image',
                        docked: 'right',
                        flex: 1,
                        html: '<img src = "resources/images/marlow/arrow copy.png">',
                         style: 'margin-top: -1%; height: 40px; width: 40px;', 
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                style: 'padding-top: 10px;',
                items: [
                    {
                        html: 'Location',
                        docked: 'left',
                        flex: 1,
                        style: 'font-size: 100%; font-family: HelveticaLight; color: black; padding-right: 5%;'     
                    },
                    {
                        html: 'example@exaasdadasdsadmple.com',
                        width: '60%',     
                        docked: 'left',
                        flex: 1,
                        style: 'font-size: 100%; font-family: HelveticaLight; color: #A0A0A0; padding-top: 1%; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;',
                    },
                    {
                        xtype: 'image',
                        docked: 'right',
                        flex: 1,
                        html: '<img src = "resources/images/marlow/arrow copy.png">',
                        style: 'margin-top: -6px; height: 40px; width: 40px;',
                    }
                ]
            }
		]
	}
});  
