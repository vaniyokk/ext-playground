Ext.define('MyApp.model.tree.City', {
  extend: 'MyApp.model.tree.Base',
  entityName: 'City',
  idProperty: 'name',
  glyph: 'xf19c@FontAwesome',
  fields: [{
      name: "name",
      convert: undefined
  }]
});