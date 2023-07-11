var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_VISTAGENERAL_1 = new ol.format.GeoJSON();
var features_VISTAGENERAL_1 = format_VISTAGENERAL_1.readFeatures(json_VISTAGENERAL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VISTAGENERAL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VISTAGENERAL_1.addFeatures(features_VISTAGENERAL_1);
var lyr_VISTAGENERAL_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VISTAGENERAL_1, 
                style: style_VISTAGENERAL_1,
                interactive: true,
                title: 'VISTA GENERAL'
            });
var format_DISTRITOLOCAL17_2 = new ol.format.GeoJSON();
var features_DISTRITOLOCAL17_2 = format_DISTRITOLOCAL17_2.readFeatures(json_DISTRITOLOCAL17_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRITOLOCAL17_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRITOLOCAL17_2.addFeatures(features_DISTRITOLOCAL17_2);
var lyr_DISTRITOLOCAL17_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISTRITOLOCAL17_2, 
                style: style_DISTRITOLOCAL17_2,
                interactive: true,
                title: 'DISTRITO LOCAL 17'
            });
var format_DISTRITOLOCAL16_3 = new ol.format.GeoJSON();
var features_DISTRITOLOCAL16_3 = format_DISTRITOLOCAL16_3.readFeatures(json_DISTRITOLOCAL16_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRITOLOCAL16_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRITOLOCAL16_3.addFeatures(features_DISTRITOLOCAL16_3);
var lyr_DISTRITOLOCAL16_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISTRITOLOCAL16_3, 
                style: style_DISTRITOLOCAL16_3,
                interactive: true,
                title: 'DISTRITO LOCAL 16'
            });
var format_DISTRITOLOCAL11_4 = new ol.format.GeoJSON();
var features_DISTRITOLOCAL11_4 = format_DISTRITOLOCAL11_4.readFeatures(json_DISTRITOLOCAL11_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRITOLOCAL11_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRITOLOCAL11_4.addFeatures(features_DISTRITOLOCAL11_4);
var lyr_DISTRITOLOCAL11_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISTRITOLOCAL11_4, 
                style: style_DISTRITOLOCAL11_4,
                interactive: true,
                title: 'DISTRITO LOCAL 11'
            });
var format_DISTRITOLOCAL10_5 = new ol.format.GeoJSON();
var features_DISTRITOLOCAL10_5 = format_DISTRITOLOCAL10_5.readFeatures(json_DISTRITOLOCAL10_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRITOLOCAL10_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRITOLOCAL10_5.addFeatures(features_DISTRITOLOCAL10_5);
var lyr_DISTRITOLOCAL10_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISTRITOLOCAL10_5, 
                style: style_DISTRITOLOCAL10_5,
                interactive: true,
                title: 'DISTRITO LOCAL 10'
            });
var format_AFILIADOUBICACION_6 = new ol.format.GeoJSON();
var features_AFILIADOUBICACION_6 = format_AFILIADOUBICACION_6.readFeatures(json_AFILIADOUBICACION_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFILIADOUBICACION_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AFILIADOUBICACION_6.addFeatures(features_AFILIADOUBICACION_6);
var lyr_AFILIADOUBICACION_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AFILIADOUBICACION_6, 
                style: style_AFILIADOUBICACION_6,
                interactive: true,
                title: '<img src="styles/legend/AFILIADOUBICACION_6.png" /> AFILIADO UBICACION'
            });
var format_LIDERCOMITE_7 = new ol.format.GeoJSON();
var features_LIDERCOMITE_7 = format_LIDERCOMITE_7.readFeatures(json_LIDERCOMITE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIDERCOMITE_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIDERCOMITE_7.addFeatures(features_LIDERCOMITE_7);
var lyr_LIDERCOMITE_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIDERCOMITE_7, 
                style: style_LIDERCOMITE_7,
                interactive: true,
                title: '<img src="styles/legend/LIDERCOMITE_7.png" /> LIDER COMITE'
            });
var format_LONASDB_8 = new ol.format.GeoJSON();
var features_LONASDB_8 = format_LONASDB_8.readFeatures(json_LONASDB_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LONASDB_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LONASDB_8.addFeatures(features_LONASDB_8);
var lyr_LONASDB_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LONASDB_8, 
                style: style_LONASDB_8,
                interactive: true,
                title: '<img src="styles/legend/LONASDB_8.png" /> LONAS DB'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_VISTAGENERAL_1.setVisible(false);lyr_DISTRITOLOCAL17_2.setVisible(true);lyr_DISTRITOLOCAL16_3.setVisible(true);lyr_DISTRITOLOCAL11_4.setVisible(true);lyr_DISTRITOLOCAL10_5.setVisible(true);lyr_AFILIADOUBICACION_6.setVisible(true);lyr_LIDERCOMITE_7.setVisible(true);lyr_LONASDB_8.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_VISTAGENERAL_1,lyr_DISTRITOLOCAL17_2,lyr_DISTRITOLOCAL16_3,lyr_DISTRITOLOCAL11_4,lyr_DISTRITOLOCAL10_5,lyr_AFILIADOUBICACION_6,lyr_LIDERCOMITE_7,lyr_LONASDB_8];
lyr_VISTAGENERAL_1.set('fieldAliases', {'SECCION': 'SECCION', 'DISTRITO': 'DISTRITO', 'AFILIACION': 'AFILIACION', 'COMITE': 'COMITE', });
lyr_DISTRITOLOCAL17_2.set('fieldAliases', {'fid': 'fid', 'SECCION': 'SECCION', 'DISTRITO': 'DISTRITO', 'AFILIACION': 'AFILIACION', 'COMITE': 'COMITE', });
lyr_DISTRITOLOCAL16_3.set('fieldAliases', {'fid': 'fid', 'SECCION': 'SECCION', 'DISTRITO': 'DISTRITO', 'AFILIACION': 'AFILIACION', 'COMITE': 'COMITE', });
lyr_DISTRITOLOCAL11_4.set('fieldAliases', {'fid': 'fid', 'SECCION': 'SECCION', 'DISTRITO': 'DISTRITO', 'AFILIACION': 'AFILIACION', 'COMITE': 'COMITE', });
lyr_DISTRITOLOCAL10_5.set('fieldAliases', {'fid': 'fid', 'SECCION': 'SECCION', 'DISTRITO': 'DISTRITO', 'AFILIACION': 'AFILIACION', 'COMITE': 'COMITE', });
lyr_AFILIADOUBICACION_6.set('fieldAliases', {'id': 'id', 'NAFILIADO': 'NAFILIADO', 'SECCION': 'SECCION', });
lyr_LIDERCOMITE_7.set('fieldAliases', {'id': 'id', 'LIDER': 'LIDER', 'SECCION': 'SECCION', 'LONA': 'LONA', });
lyr_LONASDB_8.set('fieldAliases', {'id': 'id', 'PERTENECE A': 'PERTENECE A', 'SECCION': 'SECCION', 'DOMICILIO': 'DOMICILIO', });
lyr_VISTAGENERAL_1.set('fieldImages', {'SECCION': 'TextEdit', 'DISTRITO': 'TextEdit', 'AFILIACION': 'TextEdit', 'COMITE': 'TextEdit', });
lyr_DISTRITOLOCAL17_2.set('fieldImages', {'fid': 'Hidden', 'SECCION': 'TextEdit', 'DISTRITO': 'TextEdit', 'AFILIACION': 'TextEdit', 'COMITE': 'TextEdit', });
lyr_DISTRITOLOCAL16_3.set('fieldImages', {'fid': 'Hidden', 'SECCION': 'TextEdit', 'DISTRITO': 'TextEdit', 'AFILIACION': 'TextEdit', 'COMITE': 'TextEdit', });
lyr_DISTRITOLOCAL11_4.set('fieldImages', {'fid': 'Hidden', 'SECCION': 'TextEdit', 'DISTRITO': 'TextEdit', 'AFILIACION': 'TextEdit', 'COMITE': 'TextEdit', });
lyr_DISTRITOLOCAL10_5.set('fieldImages', {'fid': 'Hidden', 'SECCION': 'TextEdit', 'DISTRITO': 'TextEdit', 'AFILIACION': 'TextEdit', 'COMITE': 'TextEdit', });
lyr_AFILIADOUBICACION_6.set('fieldImages', {'id': 'Hidden', 'NAFILIADO': 'TextEdit', 'SECCION': 'TextEdit', });
lyr_LIDERCOMITE_7.set('fieldImages', {'id': 'Hidden', 'LIDER': 'TextEdit', 'SECCION': 'TextEdit', 'LONA': 'TextEdit', });
lyr_LONASDB_8.set('fieldImages', {'id': 'Hidden', 'PERTENECE A': 'TextEdit', 'SECCION': 'Range', 'DOMICILIO': 'TextEdit', });
lyr_VISTAGENERAL_1.set('fieldLabels', {'SECCION': 'header label', 'DISTRITO': 'inline label', 'AFILIACION': 'inline label', 'COMITE': 'inline label', });
lyr_DISTRITOLOCAL17_2.set('fieldLabels', {'SECCION': 'header label', 'DISTRITO': 'inline label', 'AFILIACION': 'inline label', 'COMITE': 'inline label', });
lyr_DISTRITOLOCAL16_3.set('fieldLabels', {'SECCION': 'header label', 'DISTRITO': 'inline label', 'AFILIACION': 'inline label', 'COMITE': 'inline label', });
lyr_DISTRITOLOCAL11_4.set('fieldLabels', {'SECCION': 'header label', 'DISTRITO': 'inline label', 'AFILIACION': 'inline label', 'COMITE': 'inline label', });
lyr_DISTRITOLOCAL10_5.set('fieldLabels', {'SECCION': 'header label', 'DISTRITO': 'inline label', 'AFILIACION': 'inline label', 'COMITE': 'inline label', });
lyr_AFILIADOUBICACION_6.set('fieldLabels', {'NAFILIADO': 'inline label', 'SECCION': 'inline label', });
lyr_LIDERCOMITE_7.set('fieldLabels', {'LIDER': 'inline label', 'SECCION': 'inline label', 'LONA': 'no label', });
lyr_LONASDB_8.set('fieldLabels', {'PERTENECE A': 'inline label', 'SECCION': 'inline label', 'DOMICILIO': 'inline label', });
lyr_LONASDB_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});