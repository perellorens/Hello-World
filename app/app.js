Ext.regApplication({
    name: 'App',
    defaultUrl: 'Home/index',
    
    launch: function()
    {
        this.viewport = new App.views.Viewport();
    },
});