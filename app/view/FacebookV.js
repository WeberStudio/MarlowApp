Ext.define('MarlowApp.view.FacebookV',{
	extend: 'Ext.Container',  
	requires: ['Ext.List', 'Ext.Button', 'Ext.Img', 'Ext.form.Panel', 'Ext.field.TextArea'],
	xtype: 'facebookpopup',
	
	config:{
		
		id: 'facebookpopup',  
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
				title: 'Facebook',
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
						html: '<img src = "resources/images/social/3-gray.png" style = "margin-left: -0.2%; margin-bottom: -1%px;">',
						
					},
					{
						xtype: 'button',
						align: 'right',
						text: 'Post',
						//action: 'hide',
						cls: 'custom-button',
						style: 'color: #258dc8; margin-right: -20px;',
                        handler:function() 
                        {
                            url =  'https://www.facebook.com/sharer/sharer.php?s=100&p[title]='+finalBrandName+'&p[url]=http://talabeaman.org/&p[summary]='+finalNote+' Price:'+finalPrice+'&p[images][0]=http://talabeaman.org/wp-content/uploads/2013/09/tbm.png';                            
                            window.open(url,'Facebook Share', 'width=400,height=400,scrollbars=yes,toolbar=yes,location=yes');
                            return false ;
                        },
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
                        id: 'facebookdesc',
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
						id: 'facebookPrice',
                        style: 'font-family: HelveticaLight; color: #A0A0A0; border-bottom: 1px solid #C5C5C5;',        	
                        id: 'facebookPrice',	
					},
				]	
			},
        ]
    }
});  
