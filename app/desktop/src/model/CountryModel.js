Ext.define('MyApp.model.tree.Country', {
    extend: 'Ext.data.TreeModel',
    entityName: 'Country',
    idProperty: 'name',
    glyph: 'xf024@FontAwesome',
    fields: [{
        name: 'name',
        convert: undefined
    },{
        name: 'iconCls',
        defaultValue: 'x-fa fa-flag'
    }]
});