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
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight; 
        //alert('w: ' + screenWidth + ' h: ' +  screenHeight);
        if (Ext.os.is.Android) {            

            alert('w: ' + screenWidth + ' h:' + screenHeight);
            Ext.getCmp('emailindivisual').setStyle('width:  ' + ((screenWidth / 1.0 ) * 0.9) + 'px;');     
            Ext.getCmp('emailMessage').setStyle('width:  ' + (screenWidth / 3.07 ) + 'px;');          
            Ext.getCmp('email-to').setStyle('font-size: ' + ((screenWidth +  screenHeight) / 50) + 'px;');     
            Ext.getCmp('email-subject').setStyle('font-size: ' + ((screenWidth +  screenHeight) / 50) + 'px;');     
        }
        else if(Ext.os.is.iOS) {
            
             alert('w: ' + screenWidth + ' h:' + screenHeight);
            Ext.getCmp('emailindivisual').setStyle('width:  ' + ((screenWidth / 1.0 ) * 0.9) + 'px;');     
            Ext.getCmp('emailMessage').setStyle('width:  ' + (screenWidth / 3.07 ) + 'px;');          
            Ext.getCmp('email-to').setStyle('font-size: ' + ((screenWidth +  screenHeight) / 50) + 'px;');     
            Ext.getCmp('email-subject').setStyle('font-size: ' + ((screenWidth +  screenHeight) / 50) + 'px;');     
        }  
		popup.show();
        
        Ext.getCmp('emailMessage').setValue(finalNote);
       
        //Ext.getCmp('emailMessage').setValue() =  finalNote;  
	},  
	hide: function(){           
		var popup = this.getPopup();  
		popup.hide({type: 'slideOut', direction: 'right'});  
	}  
});  