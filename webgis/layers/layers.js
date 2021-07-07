var wms_layers = [];
var format_ADMINISTRASIDESA_AR_25K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_0 = format_ADMINISTRASIDESA_AR_25K_0.readFeatures(json_ADMINISTRASIDESA_AR_25K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ADMINISTRASIDESA_AR_25K_0.addFeatures(features_ADMINISTRASIDESA_AR_25K_0);var lyr_ADMINISTRASIDESA_AR_25K_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_0, 
                style: style_ADMINISTRASIDESA_AR_25K_0,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_0.png" /> Ambarawa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_1.png" /> Ampel<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_2.png" /> Argomulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_3.png" /> Bancak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_4.png" /> Bandungan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_5.png" /> Banyubiru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_6.png" /> Bawen<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_7.png" /> Bergas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_8.png" /> Boja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_9.png" /> Bringin<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_10.png" /> Getasan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_11.png" /> Grabag<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_12.png" /> Gunung Pati<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_13.png" /> Jambu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_14.png" /> Kaliwungu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_15.png" /> Kaloran<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_16.png" /> Kandangan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_17.png" /> Karang Gede<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_18.png" /> Kedungjati<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_19.png" /> Limbangan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_20.png" /> Mojosongo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_21.png" /> Mranggen<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_22.png" /> Ngablak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_23.png" /> Pabelan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_24.png" /> Pring Surat<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_25.png" /> Pringapus<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_26.png" /> Sambi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_27.png" /> Sawangan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_28.png" /> Selo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_29.png" /> Sidomukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_30.png" /> Sidorejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_31.png" /> Simo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_32.png" /> Somowono<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_33.png" /> Suruh<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_34.png" /> Susukan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_35.png" /> Tembalang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_36.png" /> Tengaran<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_37.png" /> Tuntang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_38.png" /> Ungaran Barat<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_39.png" /> Ungaran Timur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_40.png" /> <br />'
        });

lyr_ADMINISTRASIDESA_AR_25K_0.setVisible(true);
var layersList = [lyr_ADMINISTRASIDESA_AR_25K_0];
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LUASWH': 'LUASWH', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LUASWH': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldLabels', {'NAMOBJ': 'inline label', 'REMARK': 'inline label', 'LUASWH': 'inline label', 'LCODE': 'inline label', 'WADMKC': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', });
lyr_ADMINISTRASIDESA_AR_25K_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});