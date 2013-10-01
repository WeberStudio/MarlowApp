Ext.define('MarlowApp.controller.PinterestC',{  
	extend: 'Ext.app.Controller',  
	config:{  
		refs:  
		{  
		
			popup: {  
			selector: 'formpanel #pinterestpopup',  
			xtype: 'pinterestpopup',  
			autoCreate: true,  
			}  
		}  
	},
	init: function() {  
		this.control({  
			'button[action=showpinterest]': {  
				tap: 'showPopup'  
			},  
			'button[action=hide]':{  
				tap: 'hide'  
			},
		});  
	},  
	showPopup: function(){  
		var popup = this.getPopup();  
		Ext.Viewport.add(popup);  
        
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight; 
        
        if (Ext.os.is.Android) {            

            //alert('w: ' + screenWidth + ' h:' + screenHeight);
            Ext.getCmp('pinterestpopup').setStyle('width:  ' + ((screenWidth / 1.0 ) * 0.9) + 'px; height: ' + (screenHeight / 2.0) + 'px; ');     
            Ext.getCmp('pinterestdesc').setStyle('width:  ' + (screenWidth / 3.07 ) + 'px;');          
            Ext.getCmp('account-to').setStyle('font-size: ' + ((screenWidth +  screenHeight) / 80) + 'px;');     
            Ext.getCmp('account-info').setStyle('width: ' + (screenWidth / 2.2) + 'px; font-size: ' + ((screenWidth +  screenHeight) / 106.2) + 'px; padding-top: ' + screenHeight / 152  + 'px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;');  
            Ext.getCmp('location-to').setStyle('font-size: ' + ((screenWidth +  screenHeight) / 80) + 'px;');     
            Ext.getCmp('location-info').setStyle('width: ' + (screenWidth / 2.2) + 'px; font-size: ' + ((screenWidth +  screenHeight) / 106.2) + 'px; padding-top: ' + screenHeight / 152  + 'px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;');  
            
        }
        else if(Ext.os.is.iOS) {
            
           //alert('w: ' + screenWidth + ' h:' + screenHeight);
            Ext.getCmp('pinterestpopup').setStyle('width:  ' + ((screenWidth / 1.0 ) * 0.9) + 'px; height: ' + (screenHeight / 2.0) + 'px; ');     
            Ext.getCmp('pinterestdesc').setStyle('width:  ' + (screenWidth / 3.07 ) + 'px;');          
            Ext.getCmp('account-to').setStyle('font-size: ' + ((screenWidth +  screenHeight) / 80) + 'px;');     
            Ext.getCmp('account-info').setStyle('width: ' + (screenWidth / 2.2) + 'px; font-size: ' + ((screenWidth +  screenHeight) / 106.2) + 'px; padding-top: ' + screenHeight / 152  + 'px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;');  
            Ext.getCmp('location-to').setStyle('font-size: ' + ((screenWidth +  screenHeight) / 80) + 'px;');     
            Ext.getCmp('location-info').setStyle('width: ' + (screenWidth / 2.2) + 'px; font-size: ' + ((screenWidth +  screenHeight) / 106.2) + 'px; padding-top: ' + screenHeight / 152  + 'px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;');  
        }
		popup.show();  
	},  
	hide: function(){           
		var popup = this.getPopup();  
		popup.hide({type: 'slideOut', direction: 'right'});  
	}
    
   
});  