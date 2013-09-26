Ext.define('MarlowApp.view.EmailPost',{
    extend: 'Ext.Container',  
    requires: ['Ext.List', 'Ext.Button', 'Ext.Img', 'Ext.form.Panel', 'Ext.field.TextArea'],
    xtype: 'emailindivisual',
    
    config:{
        
        itemId: 'emailindivisual',  
        floating: true,  
        centered: true,
        modal: true,  
        showAnimation: { type: 'slide', direction: 'bottom'},  
        styleHtmlContent: true,
        height: 340,
        width: 370,
        baseCls: 'custom-social-alert-box',
        items: [
            {
                xtype: 'toolbar',
                baseCls: 'custom-social-toolbar',
                //style: 'background-color: white;',
                docked: 'top',
                title: '<img src = "resources/images/social/1-gray.png"> Email',
                layout: {
                    pack: 'justify',
                    type: 'hbox'
                },
                
                items: [
                    {
                        xtype: 'button',
                        align: 'left',
                        text: 'Cancel',
                        action: 'hide',
                        cls: 'custom-button',
                        style: 'color: #258dc8; margin-left: -20px;',
                    },
                    {
                        xtype: 'button',
                        align: 'right',
                        text: 'Send',
                        //action: 'hide',
                        cls: 'custom-button',
                        style: 'color: #258dc8; margin-right: -20px;',
                    }
                ]
            },
            {
                xtype: 'container',
                layout: {
                    pack: 'justify',
                    type: 'hbox'
                },
                
                items: [
                    {
                        xtype: 'textareafield',
                        docked: 'left',
                        cls: 'custom-text-fieldarea',
                        width: 250,
                        height: 120,
                    },
                    {
                        xtype: 'image',
                        html: '<img src = "resources/images/guy-dummy.png" style = "height: 120px; width: 80px;">',    
                        docked: 'right',
                    }
                ]
                    
            },
            {
                xtype: 'container',
                layout: 'fit',
                
                items: [
                    {
                        html: '<span>118<span>',
                        style: 'font-family:  HelveticaLight; color: #A0A0A0; border-bottom: 1px solid #C5C5C5;',        
                    },
                ]    
            },
            {
                xtype: 'container',
                layout: 'fit',
                style: 'padding-top: 10px; border-bottom: 1px solid #C5C5C5;',
                items: [
                    {
                        html: 'To',
                        docked: 'left',
                        flex: 1,
                        style: 'font-size: 22px; font-family: HelveticaLight; color: black; padding-right: 10px;'
                    },
                    {
                       xtype: 'textfield',
                        docked: 'left',
                        width: '100%' ,
                        flex: 2,
						style: 'padding: 0px; margin: 0px; height: 20px; border-radius: 10px;',
                        cls: 'custom-text-field-dark',
                        
                    },
                    {
                        xtype: 'image',
                        docked: 'right',
                        flex: 1,
                        html: '<img src = "resources/images/marlow/arrow copy.png">',
                        style: 'margin-top: -6px;',
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                style: 'padding-top: 10px; border-bottom: 1px solid #C5C5C5;',
                items: [
                    {
                        html: 'Subject',
                        docked: 'left',
                        flex: 1,
                        style: 'font-size: 22px; font-family: HelveticaLight; color: black; padding-right: 25px;'
                    },
                    {
                       	xtype: 'textfield',
                        docked: 'left',
                        style: 'padding: 0px; margin: 0px; height: 20px; border-radius: 10px;',
                        cls: 'custom-text-field-light',
                        flex: 2,
                        
                        
                    },
                    {
                        xtype: 'image',
                        docked: 'right',
                        flex: 1,
                        html: '<img src = "resources/images/marlow/arrow copy.png">',
                        style: 'margin-top: -6px;',
                    }
                ]
            }
        ]
    }
});  