Ext.define('MarlowApp.controller.DashboardC', {
    extend: 'Ext.app.Controller',
   // requires: ['Ext.data.JsonP','Ext.Ajax'],
    
    config: {  
        views : ['Dashboard', 'SnapIt', 'Shops', 'MyItemList'],     
        refs: {
            
        },
        control: {
           
        },
        routes : {
            'dashboard'     : 'dashboardView',
            'snapit'        : 'snapIt',
            'shops'         : 'shopsview',
            'myitemlist'    : 'myitemlistview'           
            
        }                                    
    },
    
    dashboardView:function(){ 
        // console.log(Ext.Viewport.getCmp('sigupId'))

        if(Ext.Viewport.getComponent('dashboardId') == undefined)
            {    
            Ext.Viewport.setActiveItem({
                xtype: 'dashboardView'                 
            }); 
        }
        else
            {
            Ext.Viewport.setActiveItem(Ext.getCmp('dashboardId'));     
        } 
        //Ext.getCmp("ssntxt").blur(); 
    },
    snapIt:function(){ 
        // console.log(Ext.Viewport.getCmp('sigupId'))

        if(Ext.Viewport.getComponent('snapitem') == undefined)
            {    
            Ext.Viewport.setActiveItem({
                xtype: 'snapIt'                 
            }); 
        }
        else
            {
            Ext.Viewport.setActiveItem(Ext.getCmp('dashboardId'));     
        } 
        //Ext.getCmp("ssntxt").blur(); 
    },
    
     shopsview:function(){ 
        // console.log(Ext.Viewport.getComponent('shopid'))

        if(Ext.Viewport.getComponent('shopid') == undefined)
            {    
            Ext.Viewport.setActiveItem({
                xtype: 'shopsview'                 
            }); 
        }
        else
            {
            Ext.Viewport.setActiveItem(Ext.getCmp('dashboardId'));     
        } 
        //Ext.getCmp("ssntxt").blur(); 
    },
    
     myitemlistview:function(){ 
        // console.log(Ext.Viewport.getComponent('shopid'))

        if(Ext.Viewport.getComponent('myitemlistid') == undefined)
            {    
            Ext.Viewport.setActiveItem({
                xtype: 'myitemlistview'                 
            }); 
        }
        else
            {
            Ext.Viewport.setActiveItem(Ext.getCmp('dashboardId'));     
        } 
        //Ext.getCmp("ssntxt").blur(); 
    }
    
   
});