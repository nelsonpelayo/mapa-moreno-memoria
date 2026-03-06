var wms_layers = [];


        var lyr_Positronnolabels_0 = new ol.layer.Tile({
            'title': 'Positron [no labels]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });

        var lyr_DarkMatternolabels_1 = new ol.layer.Tile({
            'title': 'Dark Matter [no labels]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png'
            })
        });

        var lyr_Voyagernolabelsretina_2 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Reserva_Equipamientos_3 = new ol.format.GeoJSON();
var features_Reserva_Equipamientos_3 = format_Reserva_Equipamientos_3.readFeatures(json_Reserva_Equipamientos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reserva_Equipamientos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reserva_Equipamientos_3.addFeatures(features_Reserva_Equipamientos_3);
var lyr_Reserva_Equipamientos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reserva_Equipamientos_3, 
                style: style_Reserva_Equipamientos_3,
                popuplayertitle: 'Reserva_Equipamientos',
                interactive: false,
                title: '<img src="styles/legend/Reserva_Equipamientos_3.png" /> Reserva_Equipamientos'
            });
var format_moreno_limite_4 = new ol.format.GeoJSON();
var features_moreno_limite_4 = format_moreno_limite_4.readFeatures(json_moreno_limite_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moreno_limite_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moreno_limite_4.addFeatures(features_moreno_limite_4);
var lyr_moreno_limite_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moreno_limite_4, 
                style: style_moreno_limite_4,
                popuplayertitle: 'moreno_limite',
                interactive: false,
                title: '<img src="styles/legend/moreno_limite_4.png" /> moreno_limite'
            });
var format_BarriosPopulares_5 = new ol.format.GeoJSON();
var features_BarriosPopulares_5 = format_BarriosPopulares_5.readFeatures(json_BarriosPopulares_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BarriosPopulares_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarriosPopulares_5.addFeatures(features_BarriosPopulares_5);
var lyr_BarriosPopulares_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarriosPopulares_5, 
                style: style_BarriosPopulares_5,
                popuplayertitle: 'Barrios Populares',
                interactive: false,
    title: 'Barrios Populares<br />\
    <img src="styles/legend/BarriosPopulares_5_0.png" /> 18 de Julio<br />\
    <img src="styles/legend/BarriosPopulares_5_1.png" /> 23 de Diciembre<br />\
    <img src="styles/legend/BarriosPopulares_5_2.png" /> 3 de Febrero<br />\
    <img src="styles/legend/BarriosPopulares_5_3.png" /> 5 de Enero<br />\
    <img src="styles/legend/BarriosPopulares_5_4.png" /> 6 Manzanas<br />\
    <img src="styles/legend/BarriosPopulares_5_5.png" /> 8 de Diciembre<br />\
    <img src="styles/legend/BarriosPopulares_5_6.png" /> El Progreso<br />\
    <img src="styles/legend/BarriosPopulares_5_7.png" /> La Union<br />\
    <img src="styles/legend/BarriosPopulares_5_8.png" /> Los Cedros<br />\
    <img src="styles/legend/BarriosPopulares_5_9.png" /> Los Hornos<br />\
    <img src="styles/legend/BarriosPopulares_5_10.png" /> Lujan<br />\
    <img src="styles/legend/BarriosPopulares_5_11.png" /> Portugal<br />\
    <img src="styles/legend/BarriosPopulares_5_12.png" /> Primero de Marzo<br />\
    <img src="styles/legend/BarriosPopulares_5_13.png" /> Primero de Mayo<br />\
    <img src="styles/legend/BarriosPopulares_5_14.png" /> San Alberto<br />\
    <img src="styles/legend/BarriosPopulares_5_15.png" /> San Cayetano<br />\
    <img src="styles/legend/BarriosPopulares_5_16.png" /> San Francisco<br />' });
var format_CallesMloreno_6 = new ol.format.GeoJSON();
var features_CallesMloreno_6 = format_CallesMloreno_6.readFeatures(json_CallesMloreno_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CallesMloreno_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CallesMloreno_6.addFeatures(features_CallesMloreno_6);
var lyr_CallesMloreno_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CallesMloreno_6, 
                style: style_CallesMloreno_6,
                popuplayertitle: 'Calles Mloreno',
                interactive: false,
                title: '<img src="styles/legend/CallesMloreno_6.png" /> Calles Mloreno'
            });
var format_CursodeAgua_7 = new ol.format.GeoJSON();
var features_CursodeAgua_7 = format_CursodeAgua_7.readFeatures(json_CursodeAgua_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CursodeAgua_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CursodeAgua_7.addFeatures(features_CursodeAgua_7);
var lyr_CursodeAgua_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CursodeAgua_7, 
                style: style_CursodeAgua_7,
                popuplayertitle: 'Curso de Agua',
                interactive: true,
                title: '<img src="styles/legend/CursodeAgua_7.png" /> Curso de Agua'
            });
var format_CallesNombradasenHonoraLosDesaparecidos_8 = new ol.format.GeoJSON();
var features_CallesNombradasenHonoraLosDesaparecidos_8 = format_CallesNombradasenHonoraLosDesaparecidos_8.readFeatures(json_CallesNombradasenHonoraLosDesaparecidos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CallesNombradasenHonoraLosDesaparecidos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CallesNombradasenHonoraLosDesaparecidos_8.addFeatures(features_CallesNombradasenHonoraLosDesaparecidos_8);
var lyr_CallesNombradasenHonoraLosDesaparecidos_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CallesNombradasenHonoraLosDesaparecidos_8, 
                style: style_CallesNombradasenHonoraLosDesaparecidos_8,
                popuplayertitle: 'Calles Nombradas en Honor a Los Desaparecidos',
                interactive: true,
                title: '<img src="styles/legend/CallesNombradasenHonoraLosDesaparecidos_8.png" /> Calles Nombradas en Honor a Los Desaparecidos'
            });

lyr_Positronnolabels_0.setVisible(true);lyr_DarkMatternolabels_1.setVisible(true);lyr_Voyagernolabelsretina_2.setVisible(true);lyr_Reserva_Equipamientos_3.setVisible(true);lyr_moreno_limite_4.setVisible(true);lyr_BarriosPopulares_5.setVisible(true);lyr_CallesMloreno_6.setVisible(true);lyr_CursodeAgua_7.setVisible(true);lyr_CallesNombradasenHonoraLosDesaparecidos_8.setVisible(true);
var layersList = [lyr_Positronnolabels_0,lyr_DarkMatternolabels_1,lyr_Voyagernolabelsretina_2,lyr_Reserva_Equipamientos_3,lyr_moreno_limite_4,lyr_BarriosPopulares_5,lyr_CallesMloreno_6,lyr_CursodeAgua_7,lyr_CallesNombradasenHonoraLosDesaparecidos_8];
lyr_Reserva_Equipamientos_3.set('fieldAliases', {'id': 'id', 'barrio_pop': 'barrio_pop', 'nombre_bp': 'nombre_bp', });
lyr_moreno_limite_4.set('fieldAliases', {'ID': 'ID', 'LOCALIDAD': 'LOCALIDAD', 'POBLACI¾N': 'POBLACI¾N', 'VARONES_TO': 'VARONES_TO', 'VARONES__': 'VARONES__', 'MUJERES_TO': 'MUJERES_TO', 'MUJERES__': 'MUJERES__', 'SUPERFICIE': 'SUPERFICIE', });
lyr_BarriosPopulares_5.set('fieldAliases', {'id': 'id', 'b_popular': 'b_popular', 'nom_barrio': 'nom_barrio', });
lyr_CallesMloreno_6.set('fieldAliases', {'id': 'id', 'street': 'street', 'criterio': 'criterio', 'Foto URL': 'Foto URL', 'Reseña': 'Reseña', });
lyr_CursodeAgua_7.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'D074_HIDRO': 'D074_HIDRO', 'D074_HID_1': 'D074_HID_1', 'NAME2': 'NAME2', 'NOMBRE_': 'NOMBRE_', 'TIPO': 'TIPO', });
lyr_CallesNombradasenHonoraLosDesaparecidos_8.set('fieldAliases', {'id': 'id', 'street': 'Calle', 'criterio': 'criterio', 'Foto URL': 'Foto URL', 'Reseña': 'Reseña', 'popup_html': 'popup_html', 'Foto': 'Foto', });
lyr_Reserva_Equipamientos_3.set('fieldImages', {'id': 'Range', 'barrio_pop': 'TextEdit', 'nombre_bp': 'TextEdit', });
lyr_moreno_limite_4.set('fieldImages', {'ID': 'Range', 'LOCALIDAD': 'TextEdit', 'POBLACI¾N': 'TextEdit', 'VARONES_TO': 'TextEdit', 'VARONES__': 'TextEdit', 'MUJERES_TO': 'TextEdit', 'MUJERES__': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_BarriosPopulares_5.set('fieldImages', {'id': 'Range', 'b_popular': 'TextEdit', 'nom_barrio': 'TextEdit', });
lyr_CallesMloreno_6.set('fieldImages', {'id': 'Range', 'street': 'TextEdit', 'criterio': 'TextEdit', 'Foto URL': 'TextEdit', 'Reseña': 'TextEdit', });
lyr_CursodeAgua_7.set('fieldImages', {'FNODE_': 'Range', 'TNODE_': 'Range', 'LPOLY_': 'Range', 'RPOLY_': 'Range', 'LENGTH': 'TextEdit', 'D074_HIDRO': 'Range', 'D074_HID_1': 'Range', 'NAME2': 'TextEdit', 'NOMBRE_': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_CallesNombradasenHonoraLosDesaparecidos_8.set('fieldImages', {'id': 'Hidden', 'street': 'TextEdit', 'criterio': 'Hidden', 'Foto URL': 'ExternalResource', 'Reseña': 'TextEdit', 'popup_html': '', 'Foto': '', });
lyr_Reserva_Equipamientos_3.set('fieldLabels', {'id': 'no label', 'barrio_pop': 'no label', 'nombre_bp': 'no label', });
lyr_moreno_limite_4.set('fieldLabels', {'ID': 'no label', 'LOCALIDAD': 'no label', 'POBLACI¾N': 'no label', 'VARONES_TO': 'no label', 'VARONES__': 'no label', 'MUJERES_TO': 'no label', 'MUJERES__': 'no label', 'SUPERFICIE': 'no label', });
lyr_BarriosPopulares_5.set('fieldLabels', {'id': 'no label', 'b_popular': 'no label', 'nom_barrio': 'no label', });
lyr_CallesMloreno_6.set('fieldLabels', {'id': 'no label', 'street': 'no label', 'criterio': 'no label', 'Foto URL': 'no label', 'Reseña': 'no label', });
lyr_CursodeAgua_7.set('fieldLabels', {'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'D074_HIDRO': 'no label', 'D074_HID_1': 'no label', 'NAME2': 'no label', 'NOMBRE_': 'no label', 'TIPO': 'no label', });
lyr_CallesNombradasenHonoraLosDesaparecidos_8.set('fieldLabels', {'street': 'hidden field', 'Foto URL': 'hidden field', 'Reseña': 'hidden field', 'popup_html': 'no label', 'Foto': 'hidden field', });
lyr_CallesNombradasenHonoraLosDesaparecidos_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});