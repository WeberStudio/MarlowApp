Ext.define('MarlowApp.view.EmailPost',{
    extend: 'Ext.Container',  
    requires: ['Ext.List', 'Ext.Button', 'Ext.Img', 'Ext.form.Panel', 'Ext.field.TextArea'],
    xtype: 'emailindivisual',
    
    config:{
        
        id: 'emailindivisual',  
        floating: true,  
        centered: true,
        modal: true,  
        showAnimation: { type: 'slide', direction: 'bottom'},  
        styleHtmlContent: true,
        height: '70%',
        width: '92%',
        maxWidth: 330,
        maxHeight: 320,
        baseCls: 'custom-social-alert-box',
        items: [
            {
                xtype: 'toolbar',
                baseCls: 'custom-social-toolbar',
                docked: 'top',
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
                        cls: 'social-popup-button',
                        style: 'margin-right: -8%; ', 
                    },
                    {
                        xtype: 'button',
                        text: '&nbsp;&nbsp;&nbsp;Email',
                        cls: 'social-popup-title ',
                        style: 'background: url("resources/images/social/1-gray.png")  no-repeat',
                    },
                    {
                        xtype: 'button',
                        align: 'right',
                        text: 'Send',
                        id: 'sendEmail',
                        cls: 'social-popup-button',
                        style: 'margin-left: -8%; ', 
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
                        id:    'emailMessage',   
                        docked: 'left',
                        cls: 'custom-text-fieldarea',
                        style: 'background-color: inherit;',
                    },
                    {
                        xtype: 'image',
                        id: 'emailImage',
                        html: '<img src = "resources/images/guy-dummy.png" style = "height: 80px; width: 50px;">',    
                        docked: 'right',
                        flex: 1,
                    }
                ]
                    
            },
            {
                xtype: 'container',
                layout: 'fit',
                
                items: [
                    {
                        html: '<span>118<span>',
                        id: 'emailPrice',                        
                        style: 'font-family:  HelveticaLight; color: #A0A0A0; border-bottom: 1px solid #C5C5C5;',        
                    },
                ]    
            },
            {
                xtype: 'container',
                layout: 'hbox',
                style: 'padding-top: 2%; border-bottom: 1px solid #C5C5C5;',
                items: [
                    {
                        html: 'To',
                        docked: 'left',
                        flex: 1,
                        style: 'font-size: 100%; font-family: HelveticaLight; color: black; padding-right: 5%;'
                    },
                    {
                       xtype: 'textfield',
                       id: 'emailTo',   
                       docked: 'left',
                       height: '30%', 
                       width: '80%',                      
                       flex: 2,
                       cls: 'custom-text-field-dark',
                       style: 'background-color: inherit;', 
                        
                    },
                    {
                        xtype: 'image',
                        docked: 'right',
                        flex: 1,
                        html: '<img src = "resources/images/marlow/arrow copy.png">',
                         style: 'margin-top: -1%;  height: 40px; width: 40px;',
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                style: 'padding-top: 10px;',
                items: [
                    {
                        html: 'Subject',
                        docked: 'left',
                        id: 'email-subject',   
                        flex: 1,
                        style: 'font-size: 100%; font-family: HelveticaLight; color: black; padding-right: 9%;'
                    },
                    {
                        xtype: 'textfield',
                        id: 'emailSubject',                        
                        docked: 'left',
                        height: '30%', 
                        width: '65%',
                        flex: 2,
                        cls: 'custom-text-field-light',
                        style: 'background-color: inherit;', 
                        
                    },
                    {
                        xtype: 'image',
                        docked: 'right',
                        flex: 1,
                        html: '<img src = "resources/images/marlow/arrow copy.png">',
                        style: 'margin-top: -1%; height: 40px; width: 40px;',          
                    }
                ]
            }
        ]
    }
});  
