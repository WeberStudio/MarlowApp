Ext.define('MarlowApp.controller.ShareItemC',{  
	extend: 'Ext.app.Controller',  
	config:{  
		refs:  
		{  
			popup: {  
			selector: 'formpanel #shareitem',  
			xtype: 'shareitem',  
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
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight; 
        //alert('w: ' + screenWidth + ' h: ' +  screenHeight);
        if (Ext.os.is.Android) {            

            alert('w: ' + screenWidth + ' h:' + screenHeight);
            Ext.getCmp('shareitem').setStyle('width:  ' + ((screenWidth / 2.0 ) * 1.5) + 'px;');     
            Ext.getCmp('cancel-button').setStyle('font-size: ' + ((screenWidth + screenHeight) / 100) + 'px;');          
            //Ext.getCmp('share-toolbar').setStyle('font-size: ' + ((screenWidth +  screenHeight) / 50) + 'px;');     
        }
        else if(Ext.os.is.iOS) {
            
            alert('w: ' + screenWidth + ' h:' + screenHeight);
            Ext.getCmp('shareitem').setStyle('width:  ' + ((screenWidth / 2.0 ) * 1.5) + 'px;');     
            Ext.getCmp('cancel-button').setStyle('font-size: ' + ((screenWidth + screenHeight) / 100) + 'px;');          
            //Ext.getCmp('share-toolbar').setStyle('font-size: ' + ((screenWidth +  screenHeight) / 50) + 'px;');     
        }
		popup.show();        
      
	},  
	hide: function(){           
		var popup = this.getPopup();  
		popup.hide({type: 'slideOut', direction: 'right'});  
	}  
});  