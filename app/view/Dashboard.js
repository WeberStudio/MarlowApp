Ext.define('MarlowApp.view.Dashboard', {
    extend: 'Ext.Container', 
    requires: ['Ext.Img'],
    xtype:'dashboardView',
    id: 'dashboard-night',
    config: {
        style: 'background: url("resources/images/marlow-back/home-night.gif")',
        width: '100%',
        height: '100%',

        fullscreen: true,
        items: [
        //{
        // xtype: 'container',
        //width: '85%',
        //height: '40%',
        //items: [
        /*{
        xtype: 'image',
        //centered: true, 
        html: '<img src = "resources/images/marlow-back/marlow-night.png">',
        height: '35%',
        width: '35%',
        padding: '0 15% 0 15%' ,

        },*/
        //{
           // xtype: 'container',
            //centered: true,
           // docked:'left',
           // id: 'dashboard-night-logo', 
           // html: '<img src = "resources/images/marlow-back/marlow-night.png">',
           // height: '35%',
          //  width: '35%',
            //padding: '0 20% 0 5%' ,
           // items: [
                //{
                    
               // }
            //]

        //},
        //]    
        // },
        {
            xtype: 'container',
            width: '100%',
            height: '40%',
            //style: 'border: 2px solid white;',
            items: [

                {
                    xtype: 'image',
                    src: 'resources/images/marlow-back/marlow-night.png',
                    //centered: true,   
                    height: '100%',      
                    width: '100%',      
                    flex: 1,
                    //style: 'margin-right: 40%;',
                },    
            ]
        },
        {
            xtype: 'container',
            width: '100%',
            height: '15%',
            //style: 'border: 2px solid white;',  
            items: [
            {
                xtype: 'image',
                src: 'resources/images/marlow/camera-white-icon.png',
                id: 'snapit-main-icon',
                centered: true,   
                height: '50%',      
                width: '50%',      
                flex: 1,
                style: 'margin-right: 60%;',
            },
            {
                        xtype: 'button',
                        text: 'SNAP IT',
                        id: 'snapit-button',
                        baseCls: 'null',
                        centered: true,
                        docked: 'right',
                        style: 'font-family: LeagueGothicRegular; color: white; font-size: 24px; letter-spacing: 5px; font-weight: lighter; border: none; margin-top: -1%; margin-left: 20%;',
                        flex: 1,
                        handler:function()
                        { 
                           /* navigator.camera.getPicture(function(imagedata){
                            snapSrc = imagedata; 
                            app.application.redirectTo('snapit');   
                            }, onFail, { 
                                quality: 50,
                                destinationType: Camera.DestinationType.DATA_URL
                            });*/  
                            snapSrc = 'imagedata.jpg'; 
                            app.application.redirectTo('snapit');  
                        }
                    },    
            ]
        },
        {
            xtype: 'container',
            width: '100%',
            height: '15%',
            items: [

            {
                xtype: 'image',
                src: 'resources/images/marlow/my-list-white-icon.png',
                centered: true,  
                id: 'shops-main-icon', 
                height: '50%',      
                width: '50%',
                flex: 1,
                style: 'margin-right: 60%;',
            },
            {
                xtype: 'button',
                text: 'SHOPS',
                id: 'shops-button',
                baseCls: 'null',
                centered: true,
                docked: 'right',
                style: 'font-family: LeagueGothicRegular; color: white; font-size: 24px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -1%; margin-left: 18%;',
                flex: 1,
                handler:function()
                {
                    app.application.redirectTo('shops')    
                }
            },    
            ]
        },
        {
            xtype: 'container',
            width: '100%',
            height: '15%',
            items: [

            {
                xtype: 'image',
                src: 'resources/images/marlow/shops-white-icon.png',
                id: 'mylist-main-icon',
                height: '50%',      
                width: '50%',
                centered: true,                         
                flex: 1,
                style: 'margin-right: 60%;', 
            },
            {
                xtype: 'button',
                text: 'MY LIST',
                id: 'mylist-button',
                centered: true,
                baseCls: 'null',
                docked: 'right',
                style: 'font-family: LeagueGothicRegular; color: white; font-size: 24px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -1%; margin-left: 20%;',
                flex: 1,

                handler:function()
                {
                    app.application.redirectTo('myitemlist')    
                }
            },
            ]
        },
        ]
    }
});

function onFail(message) {
    Ext.Msg.alert('Failed because: ' + message);
}
