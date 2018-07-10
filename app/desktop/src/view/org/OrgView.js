Ext.define('MyApp.view.users.OrgView',{
	extend: 'Ext.panel.Panel',
	xtype: 'orgview',
	cls: 'orgview',
	controller: 'orgviewcontroller',
	viewModel: {type: 'orgviewmodel'},
	title: 'Users from RADServer',
	layout: 'fit',
	items: [
		{
			xtype: 'grid',
			columns: [
				{ text: 'user', dataIndex: 'username', width: 100 },
				{ text: 'id', dataIndex: '_id', width: 300 },
				{ text: 'creator', dataIndex: 'creator', width: 300 },
				{ text: 'created', dataIndex: 'created', width: 200 },
				{ text: 'description', dataIndex: 'description', flex: 1 }
			]
		}
	]
});
