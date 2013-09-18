Ext.define('MarlowApp.controller.ShareIndivisualC',{  
	extend: 'Ext.app.Controller',  
	config:{  
		refs:  
		{  
			popup: {  
			selector: 'formpanel #popupindivisual',  
			xtype: 'popupindivisual',  
			autoCreate: true,  
			}  
		}  
	},
	init: function() {  
		this.control({  
			'button[action=shareindivisual]': {  
				tap: 'showPopup'  
			},  
			'button[action=hide]':{  
				tap: 'hide'  
			}  
		});  
	},  
	showPopup: function(){  
		var popup = this.getPopup();  
		Ext.Viewport.add(popup);  
		popup.show();  
	},  
	hide: function(){           
		var popup = this.getPopup();  
		popup.hide({type: 'slideOut', direction: 'right'});  
	}  
});  