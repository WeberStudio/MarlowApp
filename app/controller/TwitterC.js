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
        
        if(editProductIndex !='')
        {
            var productViewBrand            = all_productsid_store.getAt(editProductIndex).getData();
            finalImage                      = productViewBrand.image ;
            finalNote                       = productViewBrand.note  ;
            finalPrice                      = productViewBrand.price    ;
            finalBrandName                  = productViewBrand.name  ;
        }
       //Ext.getCmp('twitterImage').setHtml('<img src ="data:image/jpeg;base64,'+finalImage+'" style = "width: 70px; height: 90px;">'); 
       Ext.getCmp('twitterImage').setHtml('<img src ="'+imageUrl+finalImage+'" style = "width: 70px; height: 90px;">');  
        //document.getElementById("twitterImage").src = imageUrl+finalImage;
        Ext.getCmp('twitterdesc').setValue(finalNote);
        Ext.getCmp('twitterPrice').setHtml('<span>\u00A3'+finalPrice+'</span>');  
	},  
	hide: function(){           
		var popup = this.getPopup();  
		popup.hide({type: 'slideOut', direction: 'right'});  
	}  
});  
