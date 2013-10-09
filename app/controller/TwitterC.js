Ext.define('MarlowApp.controller.TwitterC',{  
	extend: 'Ext.app.Controller',  
	config:{  
		refs:  
		{  
		
			popup: {  
			selector: 'formpanel #twitterpopup',  
			xtype: 'twitterpopup',  
			autoCreate: true,  
			}  
		}  
	},
	init: function() {  
		this.control({  
			'button[action=showtwitter]': {  
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
        Ext.getCmp('twitterImage').setHtml('<img src ="data:image/jpeg;base64,'+finalImage+'" style = "width: 80px; height: 80px;">'); 
        Ext.getCmp('twitterdesc').setValue(finalNote);
        Ext.getCmp('twitterPrice').setHtml('<span>\u00A3'+finalPrice+'</span>');  
	},  
	hide: function(){           
		var popup = this.getPopup();  
		popup.hide({type: 'slideOut', direction: 'right'});  
	}  
});  
