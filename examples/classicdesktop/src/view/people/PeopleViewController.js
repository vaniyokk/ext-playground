Ext.define('MyApp.view.people.PeopleViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.peopleviewcontroller',

	onItemSelected: function (sender, record) {
		Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
	},

	onConfirm: function (choice) {
		if (choice === 'yes') {
			//
		}
	}
});
