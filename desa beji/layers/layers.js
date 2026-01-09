var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_beji_1 = new ol.format.GeoJSON();
var features_beji_1 = format_beji_1.readFeatures(json_beji_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_beji_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_beji_1.addFeatures(features_beji_1);
var lyr_beji_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_beji_1, 
                style: style_beji_1,
                popuplayertitle: 'beji',
                interactive: true,
                title: '<img src="styles/legend/beji_1.png" /> beji'
            });
var format_pemerintahan_2 = new ol.format.GeoJSON();
var features_pemerintahan_2 = format_pemerintahan_2.readFeatures(json_pemerintahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemerintahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemerintahan_2.addFeatures(features_pemerintahan_2);
var lyr_pemerintahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pemerintahan_2, 
                style: style_pemerintahan_2,
                popuplayertitle: 'pemerintahan',
                interactive: true,
                title: '<img src="styles/legend/pemerintahan_2.png" /> pemerintahan'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_beji_1.setVisible(true);lyr_pemerintahan_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_beji_1,lyr_pemerintahan_2];
lyr_beji_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_pemerintahan_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'alamat': 'alamat', 'desa': 'desa', 'kode pos': 'kode pos', });
lyr_beji_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_pemerintahan_2.set('fieldImages', {'id': '', 'nama': '', 'alamat': '', 'desa': '', 'kode pos': '', });
lyr_beji_1.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_pemerintahan_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'alamat': 'no label', 'desa': 'no label', 'kode pos': 'no label', });
lyr_pemerintahan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});