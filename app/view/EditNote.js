Ext.define('MarlowApp.view.EditNote', {
    extend: 'Ext.form.Panel', 
	requires: ['Ext.field.TextArea', 'Ext.Toolbar'],
    xtype:'editnoteview',
    
    config: 
    {
		xtype: 'formpanel',
		id:'editnoteid',
		layout: 'vbox',
        baseCls: 'add-note-form-panel',
		
		items: [
			{
				xtype: 'toolbar',
				title: 'Edit Note',
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
                        style: 'margin-left: 0px;',
						handler:function()
						{
							var editnote   = Ext.getCmp("editnoteid");
							//var snapViewId  = Ext.getCmp("snapViewId");
							//var shopid      = Ext.getCmp("shopid");                         
						
							if(editnote){
								editnote.destroy();    
							}                       
							/*if(shopid){
								shopid.destroy();
							}
							if(snapViewId){
								snapViewId.destroy();
							} */
                                   
							app.application.redirectTo('mylist');
						}	
					},
					{
						xtype: 'button',
						align: 'right',
						text: 'Confirm',
						cls: 'custom-button',
                        style: 'margin-right: 0px;' , 
						handler:function()
						{
						    price = Ext.getCmp('itemprice').getValue();  
                            if(/[0-9]/.test(price))
                            {
                                 
                            }
                            else
                            {
                                Ext.Msg.alert('Only Numbers Allowed!');
                                return false;                               
                            }
                            if(Ext.getCmp("shops-image")){
                            Ext.getCmp("shops-image").destroy();
                            }                               
                                                            
                            if(Ext.getCmp("snap-it-image")){
                                Ext.getCmp("snap-it-image").destroy();
                            }                                
                            if(Ext.getCmp("my-list-image")){
                                Ext.getCmp("my-list-image").destroy();
                            }                                
                            if(Ext.getCmp("info-image")){
                                Ext.getCmp("info-image").destroy();
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
                        autoComplete: false,
						name: 'price',
						width: '100%',
                        height: '40%',
						docked: 'left',
						flex: 2,
						cls: 'custom-textfield-settings'
					},
				]	
			}
		]
	}   
});
