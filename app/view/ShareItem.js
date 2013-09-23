Ext.define('MarlowApp.view.ShareItem',{
    requires: ['Ext.List', 'Ext.Button', 'Ext.Img'],
    extend: 'Ext.dataview.List',  
    xtype: 'shareitem',
    height: 260,
    width: 320,
    config:{  
        itemId: 'shareitem',  
        floating: true,  
        centered: true,  
        modal: true,  
        height: 200,  
        width: 300,  
        showAnimation: { type: 'slide', direction: 'bottom'},  
        styleHtmlContent: true,  
        style: 'border-radius: 10px;',
        items:[
        {
            xtype: 'toolbar',
            docked: 'top',
            title: 'Share this item',
            baseCls: 'custom-share-toolbar',
            align: 'right',
            layout: {
                pack: 'justify',
                type: 'hbox'
            }, 
             items: [
                {
                    xtype: 'button',
                    align: 'left',
                    text: '<span style = "font-size: 20px; font-weight: lighter; color: #0079FF"> Cancel  </span> ',
                    action: 'hide',
                    cls: 'custom-button',
                },
            ]
         },    
        {
            xtype: 'panel',
            
            items: [
                
                {
                    xtype: 'button',
                    style: 'margin-bottom: -10px; background: url("resources/images/template/email1.png"); height: 53px; border-radius: 0px;',
                    action: 'shareemail',
                    
/*                    handler:function()
                    {
                        alert('Email');
                    }
*/       },
                {
                    xtype: 'button',
                    style: 'background: url("resources/images/template/twitter1.png"); height: 53px; border-radius: 0px; margin-top: 8px',
                    /*handler:function()
                    {
                        alert('Twitter');
                    } */
                    action: 'shareindivisual'

                },
                {
                    xtype: 'button',
                    style: 'background: url("resources/images/template/facebook1.png"); height: 53px; border-radius: 0px; margin-top: -3px',
                    html : '<div id="fb-root"></div>',
                    handler:function()
                    {
                             window.fbAsyncInit = function() {
                            // init the FB JS SDK
                            FB.init({
                              appId      : '345630415520891',                        // App ID from the app dashboard
                              channelUrl : '//apps.facebook.com/cmymc-facebook', // Channel file for x-domain comms
                              status     : true,                                 // Check Facebook Login status
                              xfbml      : true                                  // Look for social plugins on the page
                            });

                            // Additional initialization code such as adding Event Listeners goes here
                          };

                          // Load the SDK asynchronously
                          (function(d, s, id){
                             var js, fjs = d.getElementsByTagName(s)[0];
                             if (d.getElementById(id)) {return;}
                             js = d.createElement(s); js.id = id;
                             js.src = "//connect.facebook.net/en_US/all.js";
                             fjs.parentNode.insertBefore(js, fjs);
                           }(document, 'script', 'facebook-jssdk'));
                    }
                },
                {
                    xtype: 'button',
                    style: 'background: url("resources/images/template/pinterest1.png"); height: 50px; border-radius: 0px; border-bottom: 0px; margin-top: -2px',
                    handler:function()
                    {
                        alert('Pinterest');
                    }

                },

            
            ]
            
        },    

            /*{                
                xtype: 'list',
                inline: true,
                itemId:'email',
                itemTpl: '{img} {title}',
                listeners: {
                    itemtap: function(view, index, item, e) {
                        console.log(view);
                    }
                },
                cls: 'custom-share-inner-text',             
                data: [
                    {img: '<img src = "resources/images/social/1.png">', title: 'Email'},
                    {img: '<img src = "resources/images/social/2.png">',  title: 'Twitter'},
                    {img: '<img src = "resources/images/social/3.png">', title: 'Facebook'},
                    {img: '<img src = "resources/images/social/4.png">', title: 'Pinterest'},
                ],
                listeners  : {
                    element : 'element',
                    itemtap : function(list, index, target, record, e, eOpts) {
                        console.log(list);
                        alert('item tapped!')
                      radioButtonChange('radioButtonID_'+index,record.data.checkDt, record.data.netPay)
                    }
                }
                  
            },*/
        ],
        
    }
});  