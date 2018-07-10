Ext.define('MyApp.store.EmployeesStore', {
	extend: 'Ext.data.Store',
	alias: 'store.employees',
	requires: [
		'Ext.data.proxy.Rest',
	],
	autoLoad: true,

	proxy: {
		type: 'rest',
		url: 'http://10.211.55.3:8080/employee',
		reader: {
			type: 'json',
			rootProperty: 'employee'
		}
	},
});