Ext.define('MyApp.model.tree.Territory', {
  extend: 'MyApp.model.tree.Base',
  entityName: 'Territory',
  idProperty: 'name',
  glyph: 'xf0ac@FontAwesome',
  fields: [{
      name: "name",
      convert: undefined
  }]
});