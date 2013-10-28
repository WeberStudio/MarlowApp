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
		popup.show();
        
        if(editProductIndex !='')
        {
            var productViewBrand            = all_productsid_store.getAt(editProductIndex).getData();
            finalImage                      = productViewBrand.image ;
            finalNote                       = productViewBrand.note  ;
            finalPrice                      = productViewBrand.price    ;
            finalBrandName                  = productViewBrand.name  ;
        }
        
        Ext.getCmp('facebookimage').setHtml('<img src ="'+imageUrl+finalImage+'" style = "width: 70px; height: 90px;">'); 
       
        //document.getElementById("facebookimage").src = imageUrl+finalImage;
        Ext.getCmp('facebookdesc').setValue(finalNote);
        Ext.getCmp('facebookPrice').setHtml('<span>\u00A3'+finalPrice+'</span>');
	},  
	hide: function(){           
		var popup = this.getPopup();  
		popup.hide({type: 'slideOut', direction: 'right'});  
	}  
});  
