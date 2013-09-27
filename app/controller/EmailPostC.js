Ext.define('MarlowApp.controller.EmailPostC',{  
	extend: 'Ext.app.Controller',  
	config:{  
		refs:  
		{  
		
			popup: {  
			selector: 'formpanel #emailindivisual',  
			xtype: 'emailindivisual',  
			autoCreate: true,  
			}  
		}  
	},
       
	init: function() {  
		this.control({  
			'button[action=shareemail]': {  
				tap: 'showPopup'  
			},  
			'button[action=hide]':{  
				tap: 'hide'  
			}  
		});  
	},  
	showPopup: function(){        
        //Ext.getCmp('emailSubject').gsetValue() = 
        //Ext.getCmp('finalImage').gsetValue() = finalImage;
           
		var popup = this.getPopup();  
		Ext.Viewport.add(popup);  
		popup.show();
        //Ext.getCmp('emailMessage').setValue() =  finalNote;  
	},  
	hide: function(){           
		var popup = this.getPopup();  
		popup.hide({type: 'slideOut', direction: 'right'});  
	}  
});  