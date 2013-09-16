Ext.define('MarlowApp.view.AddNote', {
    extend: 'Ext.form.Panel', 
    xtype:'addnoteview',
    config: 
    {
        id:'addnoteid',
        items : [
			{                 
				xtype: 'textareafield',
				maxRows: 10,
				name: 'note',
				placeHolder: 'Enter notes...',
				style: 'border: 1px solid #C5C5C5;',
				cls: 'custom-form-labels'
			},
			{                 
				xtype: 'textareafield',
				label: 'Price: ',
				maxRows: 10,
				name: 'price',
				style: 'border: 1px solid #C5C5C5;',
				cls: 'custom-form-labels'
			},
			{
            xtype: 'toolbar',
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
					cls: 'custom-button'
				},
				{	
					xtype: 'button',
					text: '<span style = "font-size: 18px; font-weight: lighter;">Confirm  </span> ',
					align: 'right',
					cls: 'custom-button'
				} 
            ]
			},
		]      
    }   
});