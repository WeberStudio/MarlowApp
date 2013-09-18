Ext.define('MarlowApp.controller.ShareItemC',{  
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
			'button[action=shareitem]': {  
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