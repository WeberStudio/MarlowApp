Ext.define('MarlowApp.view.AddNote', {
    extend: 'Ext.form.Panel', 
	requires: ['Ext.field.TextArea', 'Ext.Toolbar'],
    xtype:'addnoteview',
    
    config: 
    {
		xtype: 'formpanel',
		id:'addnoteid',
		layout: 'vbox',
        baseCls: 'add-note-form-panel',
		
		items: [
			{
				xtype: 'toolbar',
				title: 'Notes',
				docked: 'top',
				cls: 'top-toolbar',
				layout: {
					pack: 'justify',
					type: 'hbox'
				},
				
				items: [
					{
						xtype: 'button',
						align: 'left',
						text: '<span style = "font-size: 120%; font-family: HelveticaLight; font-weight: bolder; padding-right: 2%;"> <</span> Back',
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
						align: 'right',
						text: 'Confirm',
						cls: 'custom-button',
						handler:function()
						{
						    price = Ext.getCmp('itemprice').getValue();  
                            if(/[0-9]/.test(price))
                            {
                                 
                            }
                            else
                            {
                                Ext.Msg.alert('', 'Only Numbers Allowed!');
                                return false;                               
                            }
                            if(Ext.getCmp("my-list-image")){                                 
                                    Ext.getCmp('my-list-image').destroy();                                
                                }
                                if(Ext.getCmp("myitemlistviewId")){
                                    Ext.getCmp("myitemlistviewId").destroy();
                                }                       
                                if(Ext.getCmp("shopid")){
                                    Ext.getCmp("shopid").destroy();
                                }
                                if(Ext.getCmp("snapViewId")){
                                    Ext.getCmp("snapViewId").destroy();
                                }
                                if( Ext.getCmp("addtolistid")){
                                    Ext.getCmp("addtolistid").destroy();
                                }
                            app.application.redirectTo('shops');
						}	
					}
				]
			},
			{
				xtype: 'textareafield',
				id:'useritemnote',
				layout: 'auto',  
				maxRows: 10,
				name: 'note',
				placeHolder: 'Enter notes...',
				cls: 'custom-form-input-labels'
			},
			{
				xtype: 'formpanel',
				layout: {
					pack: 'justify',
					type: 'hbox'
				},       
				items: [
					{
						html: 'Price: ',
						baseCls: 'price-html',
                        docked: 'left',
						flex: 1,
					},
					{
						xtype: 'textfield',
						id:'itemprice', 
						placeHolder: '\u00A3',
						name: 'price',
						width: '100%',
						docked: 'left',
						flex: 2,
						cls: 'custom-textfield-settings'
					},
				]	
			}
		]
	}   
});
