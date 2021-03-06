Ext.define('MyApp.store.PeopleStore', {
	extend: 'Ext.data.virtual.Store',
	alias: 'store.people',
	requires: ['Ext.data.virtual.Store'],
	//model: 'MyApp.model.PeopleModel',
	autoLoad: true,
	pageSize: 30,
	leadingBufferZone: 30,
	trailingBufferZone: 30,
	proxy: {
		type: 'rest',
		cors: true,
		url: 'http://localhost:1968/people',
		reader: {
			rootProperty: 'data',
			idProperty: 'id',
			totalProperty: 'total'
		}
	}
});
