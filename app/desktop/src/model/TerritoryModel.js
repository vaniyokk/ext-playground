Ext.define('MyApp.model.tree.Territory', {
  extend: 'Ext.data.TreeModel',
  entityName: 'Territory',
  idProperty: 'name',
  glyph: 'xf0ac@FontAwesome',
  fields: [{
      name: 'name',
      convert: undefined
  },{
      name: 'iconCls',
      defaultValue: 'x-fa fa-globe'
  }]
});