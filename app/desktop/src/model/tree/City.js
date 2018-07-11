Ext.define('MyApp.model.tree.City', {
  extend: 'MyApp.model.tree.Base',
  entityName: 'City',
  idProperty: 'name',
  iconCls: 'x-fa fa-home',
  fields: [{
      name: "name",
      convert: undefined
  },
  {
    name: 'iconCls',
    defaultValue: 'x-fa fa-bank'
  }]
});