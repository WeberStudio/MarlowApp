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
        
        Ext.getCmp('shareimage').setValue('<img src ="data:image/jpeg;base64,'+finalImage+'" style = "width: 5%; height: 8%">'); 
        Ext.getCmp('emailMessage').setValue(finalNote);
        Ext.getCmp('emailSubject').setValue(finalBrandName);
        Ext.getCmp('emailPrice').setHtml('<span>\u00A3'+finalPrice+'</span>'); 
        
	},  
	hide: function(){           
		var popup = this.getPopup();  
		popup.hide({type: 'slideOut', direction: 'right'});  
	}  
});  
