var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SebaranSumberBenih_1 = new ol.format.GeoJSON();
var features_SebaranSumberBenih_1 = format_SebaranSumberBenih_1.readFeatures(json_SebaranSumberBenih_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranSumberBenih_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranSumberBenih_1.addFeatures(features_SebaranSumberBenih_1);
var lyr_SebaranSumberBenih_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranSumberBenih_1, 
                style: style_SebaranSumberBenih_1,
                popuplayertitle: "Sebaran Sumber Benih",
                interactive: true,
    title: 'Sebaran Sumber Benih<br />\
    <img src="styles/legend/SebaranSumberBenih_1_0.png" /> Tagakan Benih Terseleksi<br />\
    <img src="styles/legend/SebaranSumberBenih_1_1.png" /> Tegakan Benih Teridentifikasi<br />\
    <img src="styles/legend/SebaranSumberBenih_1_2.png" /> Tegakan Benih Terseleksi<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_SebaranSumberBenih_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SebaranSumberBenih_1];
lyr_SebaranSumberBenih_1.set('fieldAliases', {'No': 'No', 'X': 'X', 'Y': 'Y', 'No_SB': 'No_SB', 'Nama_Botan': 'Nama_Botan', 'Nama_Daera': 'Nama_Daera', 'No___Tgl_S': 'No___Tgl_S', 'Pemilik_Pe': 'Pemilik_Pe', 'Propinsi': 'Propinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'Luas__Ha_': 'Luas__Ha_', 'Kelas_SB': 'Kelas_SB', });
lyr_SebaranSumberBenih_1.set('fieldImages', {'No': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'No_SB': 'TextEdit', 'Nama_Botan': 'TextEdit', 'Nama_Daera': 'TextEdit', 'No___Tgl_S': 'TextEdit', 'Pemilik_Pe': 'TextEdit', 'Propinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'Luas__Ha_': 'TextEdit', 'Kelas_SB': 'TextEdit', });
lyr_SebaranSumberBenih_1.set('fieldLabels', {'No': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'No_SB': 'hidden field', 'Nama_Botan': 'header label - visible with data', 'Nama_Daera': 'header label - visible with data', 'No___Tgl_S': 'no label', 'Pemilik_Pe': 'no label', 'Propinsi': 'header label - always visible', 'Kabupaten': 'header label - always visible', 'Kecamatan': 'header label - always visible', 'Desa': 'header label - always visible', 'Luas__Ha_': 'header label - visible with data', 'Kelas_SB': 'header label - visible with data', });
lyr_SebaranSumberBenih_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});