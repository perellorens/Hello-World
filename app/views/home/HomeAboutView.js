App.views.HomeAbout = Ext.extend(Ext.Panel, {
	
    html: '<h2>Pere Llorens Vernet</h2>',
    
    styleHtmlContent: true,
    style: 'background: #d8efed',

	dockedItems: [
	    {
            	xtype: 'toolbar',
            	title: 'Cr�dits',
       	    },
	],

});
Ext.reg('HomeAbout', App.views.HomeAbout);