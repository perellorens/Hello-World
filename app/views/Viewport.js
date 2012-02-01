App.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
	dockedItems: [
	    {
	    	xtype: 'TabBarMvc',
		//hidden: true,
	    	items: [
		        {
		        	text: 'Home',
		        	iconCls: 'home',
		        	route: 'Home/index', // custom property of the TabBarMvc component
		        },
		        {
		        	text: 'Crèdits',
		        	iconCls: 'info',
		        	route: 'Home/about', // custom property of the TabBarMvc component
		        },
	        ],
	    },

	],
});