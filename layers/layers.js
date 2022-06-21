var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_UnidadesCronoestratigrficas_1 = new ol.format.GeoJSON();
var features_UnidadesCronoestratigrficas_1 = format_UnidadesCronoestratigrficas_1.readFeatures(json_UnidadesCronoestratigrficas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadesCronoestratigrficas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesCronoestratigrficas_1.addFeatures(features_UnidadesCronoestratigrficas_1);
var lyr_UnidadesCronoestratigrficas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UnidadesCronoestratigrficas_1, 
                style: style_UnidadesCronoestratigrficas_1,
                interactive: true,
    title: 'Unidades Cronoestratigráficas<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_0.png" /> C-Pi<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_1.png" /> C-Sctm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_2.png" /> C2P-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_3.png" /> D2D3-Sctm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_4.png" /> DC-Sctm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_5.png" /> DC1-Mmg4<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_6.png" /> E1-Pi<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_7.png" /> E1-Pm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_8.png" /> E1-Sc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_9.png" /> E1-St<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_10.png" /> E1E2-VCm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_11.png" /> E2-Hi<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_12.png" /> E2-Pi<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_13.png" /> E2-Pm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_14.png" /> E2n1-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_15.png" /> E3-Pi<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_16.png" /> E3-Sc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_17.png" /> E3-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_18.png" /> E3-St<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_19.png" /> E3N1-Sct<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_20.png" /> E3N1-Stm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_21.png" /> Embalse<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_22.png" /> J-Hf<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_23.png" /> J-Pi<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_24.png" /> J-VCc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_25.png" /> J-Vf<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_26.png" /> J1-Sct<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_27.png" /> J1J2-VCct<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_28.png" /> J2J3-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_29.png" /> J2J3-VCc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_30.png" /> J3-Sc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_31.png" /> K1-Mag<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_32.png" /> K1-Mbg6<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_33.png" /> K1-Mmg<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_34.png" /> K1-Mmg6<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_35.png" /> K1-Pf<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_36.png" /> K1-Pi<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_37.png" /> K1-Pm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_38.png" /> K1-Pu<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_39.png" /> K1-Pu6<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_40.png" /> K1-Sct<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_41.png" /> K1-Sctm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_42.png" /> K1-VCm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_43.png" /> K1-VCm5<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_44.png" /> K2-Mbg8<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_45.png" /> K2-Pf7<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_46.png" /> K2-Pi<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_47.png" /> K2-Pm7<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_48.png" /> K2-Pm8<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_49.png" /> K2-Pu7<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_50.png" /> K2-Pu8<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_51.png" /> K2-Vf7<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_52.png" /> K2-Vm7<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_53.png" /> K2-Vu7<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_54.png" /> MP-Mmbg1<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_55.png" /> MP-Pf1<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_56.png" /> MP3NP1-Mag2<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_57.png" /> N1-Sc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_58.png" /> N1-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_59.png" /> N1-St<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_60.png" /> N1-VCc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_61.png" /> N1-VCm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_62.png" /> N2-Sc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_63.png" /> N2-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_64.png" /> N2-VCc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_65.png" /> N2-Vi<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_66.png" /> N2-p<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_67.png" /> N2Q1-Sc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_68.png" /> N2Q1-VCc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_69.png" /> NP-Pm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_70.png" /> NP-VCc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_71.png" /> NP3-Pf<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_72.png" /> O-Pf4<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_73.png" /> O-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_74.png" /> O1-Pf<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_75.png" /> OS1-Mbg<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_76.png" /> OS1-Mmg<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_77.png" /> OS1-Pf<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_78.png" /> P-Pf<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_79.png" /> P-Sctm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_80.png" /> PP-Mmg1<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_81.png" /> PT-VCm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_82.png" /> PZ-Mm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_83.png" /> PZ-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_84.png" /> Q-Vi<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_85.png" /> Q-al<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_86.png" /> Q-ca<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_87.png" /> Q-e<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_88.png" /> Q-g<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_89.png" /> Q-p<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_90.png" /> Q-t<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_91.png" /> Q-vc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_92.png" /> Q1-Hi<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_93.png" /> Q1-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_94.png" /> Q1-ca<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_95.png" /> Q1-l<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_96.png" /> Q2-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_97.png" /> Q2-Vm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_98.png" /> Q2-l<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_99.png" /> Q2-m<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_100.png" /> Q2-vc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_101.png" /> Represa<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_102.png" /> S4D1-Mbg<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_103.png" /> T-Mag3<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_104.png" /> T-Mbg3<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_105.png" /> T-Mm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_106.png" /> T-Mmbg3<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_107.png" /> T-Mmg3<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_108.png" /> T-Pf<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_109.png" /> T-Pi<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_110.png" /> T-Pm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_111.png" /> T-Pu3<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_112.png" /> T3-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_113.png" /> T?-Sc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_114.png" /> b1-Sct<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_115.png" /> b1-Sctm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_116.png" /> b1?b4-Sct<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_117.png" /> b1b2-Sctm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_118.png" /> b1b2-Stm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_119.png" /> b1b5-Stm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_120.png" /> b1k1-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_121.png" /> b2-Vf<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_122.png" /> b2b5-Sctm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_123.png" /> b2b6-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_124.png" /> b2b6-Stm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_125.png" /> b2k1-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_126.png" /> b2k5-Pm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_127.png" /> b4?b6-Stm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_128.png" /> b4b6-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_129.png" /> b4k1-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_130.png" /> b5?k6-Sctm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_131.png" /> b5b6-Sctm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_132.png" /> b5b6-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_133.png" /> b5k1-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_134.png" /> b5k6-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_135.png" /> b6-Vf<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_136.png" /> b6?k1-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_137.png" /> b6k1-Stm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_138.png" /> b6k1?-Sctm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_139.png" /> b6k2-Mmbg<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_140.png" /> b6k5-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_141.png" /> b6k6-Stm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_142.png" /> e3e4-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_143.png" /> e5e6-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_144.png" /> e5e6-St<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_145.png" /> e6e7-Stm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_146.png" /> e6e7-VCm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_147.png" /> e6e8-Sc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_148.png" /> e6e9-Sc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_149.png" /> e6e9-Sct<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_150.png" /> e8n2-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_151.png" /> e8n2-St<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_152.png" /> e8n3-Sc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_153.png" /> e9n1-Vf<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_154.png" /> k1?k5-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_155.png" /> k1?k5?-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_156.png" /> k1k4-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_157.png" /> k1k6-Stm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_158.png" /> k2k6-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_159.png" /> k2k6-Sm7<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_160.png" /> k5E1-Stm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_161.png" /> k5k6-Map<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_162.png" /> k6-Stm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_163.png" /> k6E1-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_164.png" /> k6E1-Stm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_165.png" /> n1?n5?-VCc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_166.png" /> n1n2-Hi<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_167.png" /> n1n2-Pi<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_168.png" /> n1n2-Sc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_169.png" /> n1n2-St<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_170.png" /> n2n3-Hi<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_171.png" /> n3n4-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_172.png" /> n3n4-Vm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_173.png" /> n3n5-Sc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_174.png" /> n3n5-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_175.png" /> n3n5-St<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_176.png" /> n4n5-Pi<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_177.png" /> n4n5-Vm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_178.png" /> n4n6-Hi<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_179.png" /> n4n6-Sc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_180.png" /> n5n6-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_181.png" /> n6n7-Sc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_182.png" /> n6n7-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_183.png" /> n6n7-St<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_184.png" /> n6n7-VCc<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_185.png" /> εO-Mbg<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_186.png" /> εO-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_187.png" /> ρT-Sm<br />\
    <img src="styles/legend/UnidadesCronoestratigrficas_1_188.png" /> <all other values><br />'
        });
var format_Fallas_2 = new ol.format.GeoJSON();
var features_Fallas_2 = format_Fallas_2.readFeatures(json_Fallas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fallas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fallas_2.addFeatures(features_Fallas_2);
var lyr_Fallas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fallas_2, 
                style: style_Fallas_2,
                interactive: true,
    title: 'Fallas<br />\
    <img src="styles/legend/Fallas_2_0.png" /> Falla<br />\
    <img src="styles/legend/Fallas_2_1.png" /> Falla cubierta<br />\
    <img src="styles/legend/Fallas_2_2.png" /> Falla de rumbo dextral<br />\
    <img src="styles/legend/Fallas_2_3.png" /> Falla de rumbo dextral cubierta<br />\
    <img src="styles/legend/Fallas_2_4.png" /> Falla de rumbo dextral inferida<br />\
    <img src="styles/legend/Fallas_2_5.png" /> Falla de rumbo sinestral<br />\
    <img src="styles/legend/Fallas_2_6.png" /> Falla de rumbo sinestral cubierta<br />\
    <img src="styles/legend/Fallas_2_7.png" /> Falla de rumbo sinestral inferida<br />\
    <img src="styles/legend/Fallas_2_8.png" /> Falla inferida<br />\
    <img src="styles/legend/Fallas_2_9.png" /> Falla inversa o de cabalgamiento<br />\
    <img src="styles/legend/Fallas_2_10.png" /> Falla inversa o de cabalgamiento cubierta<br />\
    <img src="styles/legend/Fallas_2_11.png" /> Falla inversa o de cabalgamiento inferida<br />\
    <img src="styles/legend/Fallas_2_12.png" /> Falla normal<br />\
    <img src="styles/legend/Fallas_2_13.png" /> Falla normal cubierta<br />\
    <img src="styles/legend/Fallas_2_14.png" /> Falla normal inferida<br />\
    <img src="styles/legend/Fallas_2_15.png" /> Lineamiento<br />\
    <img src="styles/legend/Fallas_2_16.png" /> <all other values><br />'
        });
var format_Tectnica_3 = new ol.format.GeoJSON();
var features_Tectnica_3 = format_Tectnica_3.readFeatures(json_Tectnica_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tectnica_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tectnica_3.addFeatures(features_Tectnica_3);
var lyr_Tectnica_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tectnica_3, 
                style: style_Tectnica_3,
                interactive: true,
    title: 'Tectónica<br />\
    <img src="styles/legend/Tectnica_3_0.png" /> Cinturón deformado<br />\
    <img src="styles/legend/Tectnica_3_1.png" /> Zona de falla transformante<br />\
    <img src="styles/legend/Tectnica_3_2.png" /> Zona de subducción<br />\
    <img src="styles/legend/Tectnica_3_3.png" /> <all other values><br />'
        });

lyr_GoogleTerrain_0.setVisible(true);lyr_UnidadesCronoestratigrficas_1.setVisible(true);lyr_Fallas_2.setVisible(true);lyr_Tectnica_3.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_UnidadesCronoestratigrficas_1,lyr_Fallas_2,lyr_Tectnica_3];
lyr_UnidadesCronoestratigrficas_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SimboloUC': 'Símbolo UC', 'N°CartaColores': 'N.° carta de colores', 'Descripcion': 'Descripción', 'Edad': 'Edad', 'UGIntegradas': 'UG integradas', 'Comentarios': 'Comentarios', 'GlobalID': 'GlobalID', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_Fallas_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Tipo': 'Tipo', 'NombreFalla': 'Nombre de la falla', 'Comentarios': 'Comentarios', 'GlobalID': 'GlobalID', 'Shape__Length': 'Shape__Length', });
lyr_Tectnica_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NombreEstructura': 'Nombre de la estructura', 'Tipo': 'Tipo', 'Comentarios': 'Comentarios', 'GlobalID': 'GlobalID', 'Shape__Length': 'Shape__Length', });
lyr_UnidadesCronoestratigrficas_1.set('fieldImages', {'OBJECTID': '', 'SimboloUC': '', 'N°CartaColores': '', 'Descripcion': '', 'Edad': '', 'UGIntegradas': '', 'Comentarios': '', 'GlobalID': '', 'Shape__Area': '', 'Shape__Length': '', });
lyr_Fallas_2.set('fieldImages', {'OBJECTID': '', 'Tipo': '', 'NombreFalla': '', 'Comentarios': '', 'GlobalID': '', 'Shape__Length': '', });
lyr_Tectnica_3.set('fieldImages', {'OBJECTID': '', 'NombreEstructura': '', 'Tipo': '', 'Comentarios': '', 'GlobalID': '', 'Shape__Length': '', });
lyr_UnidadesCronoestratigrficas_1.set('fieldLabels', {'OBJECTID': 'no label', 'SimboloUC': 'no label', 'N°CartaColores': 'no label', 'Descripcion': 'no label', 'Edad': 'no label', 'UGIntegradas': 'no label', 'Comentarios': 'no label', 'GlobalID': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', });
lyr_Fallas_2.set('fieldLabels', {'OBJECTID': 'no label', 'Tipo': 'no label', 'NombreFalla': 'no label', 'Comentarios': 'no label', 'GlobalID': 'no label', 'Shape__Length': 'no label', });
lyr_Tectnica_3.set('fieldLabels', {'OBJECTID': 'no label', 'NombreEstructura': 'no label', 'Tipo': 'no label', 'Comentarios': 'no label', 'GlobalID': 'no label', 'Shape__Length': 'no label', });
lyr_Tectnica_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});