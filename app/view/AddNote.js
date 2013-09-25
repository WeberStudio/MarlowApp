Ext.define('MarlowApp.view.AddNote', {
    extend: 'Ext.form.Panel', 
    xtype:'addnoteview',
    config: 
    {
        id:'addnoteid',
        items : [
			{                 
				xtype: 'textareafield',
                id:'useritemnote',  
				maxRows: 10,
				name: 'note',
				placeHolder: 'Enter notes...',
				style: 'border: 1px solid #C5C5C5;',
				cls: 'custom-form-labels'
			},
			{                 
				xtype: 'textareafield',
                id:'itemprice',   
				label: 'Price: ',
				maxRows: 10,
				name: 'price',
                placeHolder: '\u00A3 ',               
				style: 'border: 1px solid #C5C5C5;',
				cls: 'custom-form-labels'
			},
			{
            xtype: 'toolbar',
            id:'useritemprice',   
            docked: 'top',
			title: 'Notes',
			cls: 'top-toolbar',
			layout: {
				pack: 'justify',
				type: 'hbox'
			}, 
     		items: [
				{
					xtype: 'button',
					align: 'left',
                    text: '<span style = "font-size: 22px; font-family: courier new; font-weight: bolder; padding-right: 2px;"> <</span><span style = "font-size: 18px; font-weight: lighter;">Back  </span> ',
					cls: 'custom-button',
                    handler:function()
                    {
                        var loginView   = Ext.getCmp("addnoteid");
                        var snapViewId  = Ext.getCmp("snapViewId");
                        var shopid      = Ext.getCmp("shopid");                         
                        
                        if(loginView){
                            loginView.destroy();    
                        }                       
                       
                        if(shopid){
                            shopid.destroy();
                        }
                        if(snapViewId){
                            snapViewId.destroy();
                        }        
                        
                       
                        app.application.redirectTo('snapit');
						 
                    }
				},
				{	
					xtype: 'button',
					text: '<span style = "font-size: 18px; font-weight: lighter;">Confirm  </span> ',
					align: 'right',
					cls: 'custom-button',
                    handler:function()
                    {
                       
                        app.application.redirectTo('shops');
						 
                    },
				} 
            ]
			},
		]      
    }   
});
