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
        
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight; 
        //alert('w: ' + screenWidth + ' h: ' +  screenHeight);
        if (Ext.os.is.Android) {            

            //alert('w: ' + screenWidth + ' h:' + screenHeight);
            Ext.getCmp('twitterpopup').setStyle('width:  ' + ((screenWidth / 1.0 ) * 0.9) + 'px;');     
            Ext.getCmp('twitterdesc').setStyle('width:  ' + (screenWidth / 3.07 ) + 'px;');          
            Ext.getCmp('account-to').setStyle('font-size: ' + ((screenWidth +  screenHeight) / 50) + 'px;');     
            Ext.getCmp('account-info').setStyle('width: ' + (screenWidth / 2.2) + 'px; font-size: ' + ((screenWidth +  screenHeight) / 60) + 'px; padding-top: ' + screenHeight / 152  + 'px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;');  
            Ext.getCmp('location-to').setStyle('font-size: ' + ((screenWidth +  screenHeight) / 50) + 'px;');     
            Ext.getCmp('location-info').setStyle('width: ' + (screenWidth / 2.2) + 'px; font-size: ' + ((screenWidth +  screenHeight) / 60) + 'px; padding-top: ' + screenHeight / 152  + 'px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;');  
            
        }
        else if(Ext.os.is.iOS) {
            
            //alert('w: ' + screenWidth + ' h:' + screenHeight);
            Ext.getCmp('emailindivisual').setStyle('width:  ' + ((screenWidth / 1.0 ) * 0.9) + 'px;');     
            Ext.getCmp('emailMessage').setStyle('width:  ' + (screenWidth / 3.07 ) + 'px;');          
            Ext.getCmp('account-info').setStyle('font-size: ' + ((screenWidth +  screenHeight) / 50) + 'px;');           
            Ext.getCmp('location-to').setStyle('font-size: ' + ((screenWidth +  screenHeight) / 50) + 'px;');     
        }  
		popup.show();
        Ext.getCmp('twitterdesc').setValue(finalNote);
        Ext.getCmp('twitterPrice').setHtml('<span>\u00A3'+finalPrice+'</span>');  
	},  
	hide: function(){           
		var popup = this.getPopup();  
		popup.hide({type: 'slideOut', direction: 'right'});  
	}  
});  
