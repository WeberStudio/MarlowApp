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
        maxWidth: 420,
        maxHeight: 360,
        baseCls: 'custom-social-alert-box',
        items: [
            {
                xtype: 'toolbar',
                baseCls: 'custom-social-toolbar',
                docked: 'top',
                title: 'Email',
                style: 'padding-top: 1%; font-size: 90%; ',   
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
                        style: 'color: #258dc8; margin-left: -5%;',
                    },
                    {
                        xtype: 'image',
                        html: '<img src = "resources/images/social/1-gray.png" style = "margin-left: -0.2%; margin-bottom: -1%px;">',
                        
                    },
                    {
                        xtype: 'button',
                        align: 'right',
                        text: 'Send',
                        id: 'sendEmail',
                        //action: 'hide',
                        cls: 'custom-button',
                        style: 'color: #258dc8; margin-right: -20px;',
                       /* handler:function()
                        {
                            email   = Ext.getCmp('emailTo').getValue();  
                                 
                            if(email.length == 0)
                            {
                                     alert(email.length);
                                Ext.Msg.alert('Please enter the Email.', 'Please enter the Email.');
                                return false    
                            } 
                             return flase;   
                           
                            if(/[ ]/.test(email))
                            {
                                Ext.Msg.alert('Empty spaces and  special characters are not allowed in Email.', 'Empty spaces and  special characters are not allowed in Email.');
                                return false;
                            }
                          var email_re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                          if(!(email_re.test(email))) 
                            {
                                Ext.Msg.alert('Please Enter Valid Email.', 'Please Enter Valid Email.');
                                return false;
                            } 
                        }  */
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
                        width: '80%',
                        height: '20%',
                        style: 'background-color: inherit;',
                    },
                    {
                        xtype: 'image',
                        html: '<img src = "resources/images/guy-dummy.png" style = "height: 80px; width: 60px;">',    
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
                        style: 'font-family: HelveticaLight; color: #A0A0A0; border-bottom: 1px solid #C5C5C5;',        
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
                        style: 'font-size: 100%; font-family: HelveticaLight; color: black; padding-right: 5%;'
                    },
                    {
                        xtype: 'textfield',
                        id: 'emailSubject',                        
                        docked: 'left',
                        height: '30%', 
                        width: '65%',
                        flex: 2,
                        cls: 'custom-text-field-dark',
                        
                    },
                    {
                        xtype: 'image',
                        docked: 'right',
                        flex: 1,
                        html: '<img src = "resources/images/marlow/arrow copy.png">',
                        style: 'margin-top: -6px; height: 40px; width: 40px;',          
                    }
                ]
            }
        ]
    }
});  
