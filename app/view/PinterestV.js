Ext.define('MarlowApp.view.PinterestV',{
	extend: 'Ext.Container',  
	requires: ['Ext.List', 'Ext.Button', 'Ext.Img', 'Ext.form.Panel', 'Ext.field.TextArea'],
	xtype: 'pinterestpopup',
	
	config:{
		
		id: 'pinterestpopup',  
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
				docked: 'top',
				title: 'Pinterest',
                style: 'padding-top: 5px;',     
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
						xtype: 'image',
						html: '<img src = "resources/images/social/4-gray.png" style = "margin-left: -140px; margin-bottom: -17px;">',
						
					},
					{
						xtype: 'button',
						align: 'right',
						text: 'Post',
						cls: 'custom-button',
						style: 'color: #258dc8; margin-right: -20px;',
                        handler: function() {
                            
                            var pinDescription = Ext.getCmp('postDesc').getValue();
                            var pinPrice =   Ext.getCmp('itemprice').getHtml();   
                            // var pinImage =   Ext.getCmp('itemimage').getSrc();  
                            var pinImage =  'http%3A%2F%2Fcdn5.fonearena.com%2Fdesirehd%2Fhtc-desire-hd-01_1.jpg'
                            //alert(pinPrice);
                            var pin_url = 'http://www.pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.pinterest.com%2F&media=' + pinImage + '&description=' + pinDescription + ' and price ' + pinPrice;
                            window.location = pin_url;
                        } 
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
                        id: 'pinterestdesc',
						cls: 'custom-text-fieldarea',
						width: 250,
						height: 120,
					},
					{
						xtype: 'image',
                        id: 'itemimage',
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
                        id: 'itemprice',
						style: 'font-family:  HelveticaLight; color: #A0A0A0; border-bottom: 1px solid #C5C5C5;',		
					},
				]	
			},
            {
                xtype: 'container',
                layout: 'hbox',
                style: 'padding-top: 10px; border-bottom: 1px solid #C5C5C5;',
                items: [
                    {
                        html: 'Account',
                        docked: 'left',
                        id: 'account-to',
                        flex: 1,
                        style: 'font-size: 22px; font-family: HelveticaLight; color: black; padding-right: 10px;'
                    },
                    {
                        html: 'example@example.com',
                        width: 200,
                        docked: 'left',
                        id: 'account-info', 
                        flex: 1,
                        style: 'font-size: 18px; font-family: HelveticaLight; color: #A0A0A0; padding-top: 4px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;',
                    },
                    {
                        xtype: 'image',
                        docked: 'right',
                        flex: 1,
                        html: '<img src = "resources/images/marlow/arrow copy.png">',
                        style: 'margin-top: -6px; height: 40px; width: 40px;',
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
                        id: 'location-to', 
                        flex: 1,
                        style: 'font-size: 22px; font-family: HelveticaLight; color: black; padding-right: 10px;'
                    },
                    {
                        html: 'example@exaasdadasdsadmple.com',
                        width: 200,
                        docked: 'left',
                        id: 'location-info', 
                        flex: 1,
                        style: 'font-size: 18px; font-family: HelveticaLight; color: #A0A0A0; padding-top: 4px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;',
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