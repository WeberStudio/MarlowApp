Ext.define('MarlowApp.controller.PinterestC',{  
	extend: 'Ext.app.Controller',  
	config:{  
		refs:  
		{  
		
			popup: {  
			selector: 'formpanel #pinterestpopup',  
			xtype: 'pinterestpopup',  
			autoCreate: true,  
			}  
		}  
	},
	init: function() {  
		this.control({  
			'button[action=showpinterest]': {  
				tap: 'showPopup'  
			},  
			'button[action=hide]':{  
				tap: 'hide'  
			},
		});  
	},  
	showPopup: function(){  
		var popup = this.getPopup();  
		Ext.Viewport.add(popup);  
		popup.show();
        Ext.getCmp('shareimage').setValue('<img src ="data:image/jpeg;base64,'+finalImage+'" style = "width: 5%; height: 8%">'); 
        Ext.getCmp('pinterestdesc').setValue(finalNote);
        Ext.getCmp('pinterestprice').setHtml('<span>\u00A3'+finalPrice+'</span>');    
	},  
	hide: function(){           
		var popup = this.getPopup();  
		popup.hide({type: 'slideOut', direction: 'right'});  
	}
    
   
});  
