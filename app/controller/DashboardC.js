Ext.define('MarlowApp.controller.DashboardC', {
    extend: 'Ext.app.Controller',
   // requires: ['Ext.data.JsonP','Ext.Ajax'],
    
    config: {  
        views : ['Dashboard'],       
        refs: {
            
        },
        control: {
           
        },
        routes : {
            'dashboard' : 'dashboardView'
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
    }
   
});