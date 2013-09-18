Ext.define('MarlowApp.controller.ConfirmDelC',{  
	extend: 'Ext.app.Controller',  
	config:{  
		refs:  
		{  
			popup: {  
			selector: 'formpanel #popbox',  
			xtype: 'popupbox',  
			autoCreate: true,  
			}  
		}  
	},
	init: function() {  
		this.control({  
			'button[action=showPopup]': {  
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