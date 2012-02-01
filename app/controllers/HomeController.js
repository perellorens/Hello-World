Ext.regController('Home', {
 
    // index action
	index: function(options)
    {
        if ( ! this.indexView)
        {
            this.indexView = this.render({
                xtype: 'HomeIndex',
            });
        }
     
        this.application.viewport.setActiveItem(this.indexView, options.animation);
    },
    
    // about action
    about: function(options)
    {
        if ( ! this.aboutView)
        {
            this.aboutView = this.render({
                xtype: 'HomeAbout',
            });
        }
     
        this.application.viewport.setActiveItem(this.aboutView, options.animation);
    },
});