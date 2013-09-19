Ext.define('MarlowApp.controller.ConfirmDelC',{  
	extend: 'Ext.app.Controller',  
	config:{  
		refs:  
		{  
			popup: {  
			selector: 'formpanel #deletebox',  
			xtype: 'deletebox',  
			autoCreate: true,  
			}  
		}  
	},
	init: function() {  
		this.control({  
			'button[action=deleteitem]': {  
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