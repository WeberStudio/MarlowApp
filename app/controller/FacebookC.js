Ext.define('MarlowApp.controller.FacebookC',{  
	extend: 'Ext.app.Controller',  
	config:{  
		refs:  
		{  
		
			popup: {  
			selector: 'formpanel #facebookpopup',  
			xtype: 'facebookpopup',  
			autoCreate: true,  
			}  
		}  
	},
	init: function() {  
		this.control({  
			'button[action=showfacebook]': {  
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
        
        if (Ext.os.is.Android) {            

            //alert('w: ' + screenWidth + ' h:' + screenHeight);
            Ext.getCmp('facebookpopup').setStyle('width:  ' + ((screenWidth / 1.0 ) * 0.9) + 'px;');     
            Ext.getCmp('facebookdesc').setStyle('width:  ' + (screenWidth / 3.07 ) + 'px;');          
            Ext.getCmp('account-to').setStyle('font-size: ' + ((screenWidth +  screenHeight) / 50) + 'px;');     
            Ext.getCmp('account-info').setStyle('width: ' + (screenWidth / 2.2) + 'px; font-size: ' + ((screenWidth +  screenHeight) / 60) + 'px; padding-top: ' + screenHeight / 152  + 'px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;');  
            Ext.getCmp('location-to').setStyle('font-size: ' + ((screenWidth +  screenHeight) / 50) + 'px;');     
            Ext.getCmp('location-info').setStyle('width: ' + (screenWidth / 2.2) + 'px; font-size: ' + ((screenWidth +  screenHeight) / 60) + 'px; padding-top: ' + screenHeight / 152  + 'px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;');  
            
        }
        else if(Ext.os.is.iOS) {
            
           //alert('w: ' + screenWidth + ' h:' + screenHeight);
            Ext.getCmp('facebookpopup').setStyle('width:  ' + ((screenWidth / 1.0 ) * 0.9) + 'px;');     
            Ext.getCmp('facebookdesc').setStyle('width:  ' + (screenWidth / 3.07 ) + 'px;');          
            Ext.getCmp('account-to').setStyle('font-size: ' + ((screenWidth +  screenHeight) / 50) + 'px;');     
            Ext.getCmp('account-info').setStyle('width: ' + (screenWidth / 2.2) + 'px; font-size: ' + ((screenWidth +  screenHeight) / 60) + 'px; padding-top: ' + screenHeight / 152  + 'px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;');  
            Ext.getCmp('location-to').setStyle('font-size: ' + ((screenWidth +  screenHeight) / 50) + 'px;');     
            Ext.getCmp('location-info').setStyle('width: ' + (screenWidth / 2.2) + 'px; font-size: ' + ((screenWidth +  screenHeight) / 60) + 'px; padding-top: ' + screenHeight / 152  + 'px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;');      
        } 
		popup.show();
        Ext.getCmp('facebookdesc').setValue(finalNote);
        Ext.getCmp('facebookPrice').setHtml('<span>\u00A3'+finalPrice+'</span>');
	},  
	hide: function(){           
		var popup = this.getPopup();  
		popup.hide({type: 'slideOut', direction: 'right'});  
	}  
});  