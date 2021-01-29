var mymap = L.map('mapid').setView([4.621, -74.0553], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/marianaviro/ckj20ztdk2clh19t7xw7xlm4b/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyaWFuYXZpcm8iLCJhIjoiY2szdXM4cG15MDRkMDNsbWZkNGZyczNhciJ9.-q-LhpN3fuM_pq_KH_XITQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 256,
    zoomOffset: 0,
    accessToken: 'pk.eyJ1IjoibWFyaWFuYXZpcm8iLCJhIjoiY2szdXM4cG15MDRkMDNsbWZkNGZyczNhciJ9.-q-LhpN3fuM_pq_KH_XITQ'
}).addTo(mymap);

var home = L.icon({
    iconUrl: 'images/home.svg',
    iconSize:     [45, 112], // size of the icon
    iconAnchor:   [22, 56], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var marker = L.icon({
    iconUrl: 'images/marker.svg',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [19, 47], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

var minimarker = L.icon({
    iconUrl: 'images/mini-marker.svg',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [19, 47], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

var h = L.marker([4.661289, -74.058369], {icon: home}).addTo(mymap);
h.bindPopup("<b>Casita</b><br>Donde encontramos refugio<br>de todo lo demás.");

var m1 = L.marker([3.363697, -76.539882], {icon: marker}).addTo(mymap);
m1.bindPopup("<b>Los suegros</b><br>Que cada día te quieren más.");

var m2 = L.marker([3.363595, -76.537194], {icon: marker}).addTo(mymap);
m2.bindPopup("<b>Parche con tus amigos</b><br>Aquí los conocí, ¿recuerdas?");

var m3 = L.marker([3.4253044,-76.5407097], {icon: minimarker}).addTo(mymap);
m3.bindPopup("<b>Paladar</b><br>Este restaurante nos sorprendió<br>con sus opciones vegetarianas.<br>¡Deliciosas!");

var m4 = L.marker([3.448335, -76.541087], {icon: minimarker}).addTo(mymap);
m4.bindPopup("<b>Tertuliadero La Colina</b><br>¡Por fin fuimos juntos!<br>Tenemos que ir de nuevo.");

var m5 = L.marker([3.446355, -76.538636], {icon: minimarker}).addTo(mymap);
m5.bindPopup("<b>Fritanga J&J</b><br>Tú me presentaste este lugar y ¡qué delicia!");

var m6 = L.marker([3.4588434,-76.5355173,20], {icon: marker}).addTo(mymap);
m6.bindPopup("<b>Reunión de mis amigas</b><br>Aquí te emborrachaste con Carlos<br>y tuve que cuidarte un poquito ;)");

var m7 = L.marker([3.459997, -76.534296], {icon: marker}).addTo(mymap);
m7.bindPopup("<b>Restaurante Litany</b><br>Donde conocí a tu tía,<br>qué persona tan bella.");

var m8 = L.marker([3.455425, -76.533105], {icon: minimarker}).addTo(mymap);
m8.bindPopup("<b>Las tascas</b><br>Nuestro único acercamiento<br>a la Feria de Cali :P");

var m9 = L.marker([5.6338419,-73.5211968], {icon: marker}).addTo(mymap);
m9.bindPopup("<b>Casa de Kai</b><br>Nuestro rincón preferido<br>en Villa de Leyva.");

var m10 = L.marker([5.632546, -73.522948], {icon: minimarker}).addTo(mymap);
m10.bindPopup("<b>Mercado municipal</b><br>Donde compartimos<br>muchas comidas deli.");

var m11 = L.marker([5.632915, -73.522280], {icon: minimarker}).addTo(mymap);
m11.bindPopup("<b>Pastas de la Mia Nonna</b><br>Mi lugar favorito<br>para comer contigo <3");

var m12 = L.marker([5.6349061,-73.5241922], {icon: minimarker}).addTo(mymap);
m12.bindPopup("<b>Tortello</b><br>¡Me encanta descubrir<br>restaurantes contigo!");

var m13 = L.marker([5.6329097,-73.5239175], {icon: minimarker}).addTo(mymap);
m13.bindPopup("<b>La Galleta</b><br>Donde lo que más nos<br>gusta no son las galletas,<br>sino las milhojas :)");

var m14 = L.marker([5.635257, -73.524089], {icon: minimarker}).addTo(mymap);
m14.bindPopup("<b>Airbnb</b><br>Otro rinconcito donde<br>nos quedamos pero<br>que no nos gustó tanto :P");

var m15 = L.marker([5.236102, -73.763083], {icon: minimarker}).addTo(mymap);
m15.bindPopup("<b>Finca cerca a Cucunubá</b><br>Donde nos quedamos con<br>los amigos Datasketch.");

var m16 = L.marker([5.250513,-73.7690517], {icon: marker}).addTo(mymap);
m16.bindPopup("<b>Cucunubá</b><br>Donde paseamos deli<br>con tu mamá, Edilberto y Nikol.");

var m17 = L.marker([5.108135, -73.842848], {icon: marker}).addTo(mymap);
m17.bindPopup("<b>Cabaña en Nemocón</b><br>Recuerdo este paseo<br>como uno de los más<br>felices que he tenido<br>en mi vida.");

var m18 = L.marker([4.962379,-73.8110752], {icon: marker}).addTo(mymap);
m18.bindPopup("<b>Finca en Guatavita</b><br>Aquí estuvimos rodeados<br>de amor en la despedida<br>de Carlos.");

var m19 = L.marker([4.9710308,-74.1414289], {icon: marker}).addTo(mymap);
m19.bindPopup("<b>Finca en Subachoque</b><br>Aquí le contamos a mis<br>papás de nuestro compromiso<br>como pareja <3");

var m20 = L.marker([4.733660, -73.907217], {icon: marker}).addTo(mymap);
m20.bindPopup("<b>Cabaña en La Calera</b><br>¡Nuestro escape más reciente!");

var m21 = L.marker([41.893030, -87.624159], {icon: minimarker}).addTo(mymap);
m21.bindPopup("<b>Magnificent Mile</b><br>Recuerdo mucho hablar<br>contigo mientras caminaba<br>por aquí :)");

var m22 = L.marker([41.7217461,-87.6263649], {icon: marker}).addTo(mymap);
m22.bindPopup("<b>Family Dollar</b><br>Me acompañaste y me<br>hiciste reír un buen rato<br>aquí, en un momento<br>muy miedoso.");

var m23 = L.marker([4.6063438,-74.3069424], {icon: marker}).addTo(mymap);
m23.bindPopup("<b>PNN Chicaque</b><br>¡Esta caminata fue deli!<br>Pero no volvería jiji.");

var m24 = L.marker([4.5980725,-74.0386324], {icon: marker}).addTo(mymap);
m24.bindPopup("<b>Monserrate</b><br>¡Cuántas veces subimos juntos!<br>Gracias por animarme a<br>retarme cada vez más.<br>Eres el mejor.");

var m25 = L.marker([4.644519,-74.0636373], {icon: marker}).addTo(mymap);
m25.bindPopup("<b>Disco Jaguar</b><br>Después de bailar aquí,<br>te dije por primera vez<br><i>Te amo :)</i>");

var m26 = L.marker([4.668958,-74.0567906], {icon: marker}).addTo(mymap);
m26.bindPopup("<b>Carulla Cl 85</b><br>El día que nos cuadramos<br>vinimos a comprar polas<br>aquí, después de intentar<br>fallidamente entrar al<br>BBC Bodega de en frente.");

var m27 = L.marker([4.6623818,-74.0555687], {icon: minimarker}).addTo(mymap);
m27.bindPopup("<b>Tostao Revista Semana</b><br>Aquí compramos un<br>hojaldre deli en<br>uno de nuestros<br>circuitos de monchis.");

var m28 = L.marker([4.6642531,-74.0519146], {icon: minimarker}).addTo(mymap);
m28.bindPopup("<b>Masa Cl 81</b><br>Recién empezamos a salir,<br>vinimos un día a<br>trabajar en nuestro<br>proyecto de comparar<br>legislaciones de feminicidios,<br>¿recuerdas?");

var m29 = L.marker([4.6633177,-74.0523661], {icon: minimarker}).addTo(mymap);
m29.bindPopup("<b>Parquecito</b><br>En este parque nos sentamos<br>un día de cuarentena a<br>tomar el sol. Gracias por<br>siempre buscar formas<br>de hacerme sentir<br>bien. Te amo.");

var m30 = L.marker([4.662907,-74.0564832], {icon: minimarker}).addTo(mymap);
m30.bindPopup("<b>Brown Repostería</b><br>Qué delicia es<br>trabajar contigo en<br>este lugar.");

var m31 = L.marker([4.662907,-74.0564832], {icon: minimarker}).addTo(mymap);
m31.bindPopup("<b>El Pantera</b><br>Me encanta comer<br>aquí contigo.");

var m32 = L.marker([4.6509805,-74.05788], {icon: minimarker}).addTo(mymap);
m32.bindPopup("<b>Bistecca e Vino</b><br>¿Recuerdas que aquí<br>nos cogió un diluvio<br>que parecía el fin<br>del mundo?");

var m33 = L.marker([4.651274,-74.0578827], {icon: minimarker}).addTo(mymap);
m33.bindPopup("<b>M Cocina Árabe</b><br>Ay, gracias por darme<br>tanto gusto con esta<br>comida que me encanta.");

var m34 = L.marker([4.6525563,-74.0543296], {icon: minimarker}).addTo(mymap);
m34.bindPopup("<b>Bagatelle</b><br>¡Tantos desayunos bonitos<br>que hemos tenido aquí!");

var m35 = L.marker([4.6483901,-74.0576997], {icon: minimarker}).addTo(mymap);
m35.bindPopup("<b>Emilia Grace</b><br>Uff, acá hemos comido deli.<br>¡Deberíamos volver!");

var m36 = L.marker([4.6482001,-74.0574537], {icon: minimarker}).addTo(mymap);
m36.bindPopup("<b>Brunetta Pizzería</b><br>Aquí hicimos una de<br>nuestras primeras reviews<br>de comida. ¡Retomemos<br>ese proyecto!");

var m37 = L.marker([4.6466306,-74.0568607], {icon: minimarker}).addTo(mymap);
m37.bindPopup("<b>Casa Lelyte</b><br>¡Gracias por elegir<br>este lugar para mi<br>cumpleaños!");

var m38 = L.marker([4.6269095,-74.0715174], {icon: marker}).addTo(mymap);
m38.bindPopup("<b>Parque Brasil</b><br>De los recuerdos<br>más lindos que tengo<br>contigo es pasear por<br>el Parkway, fumando y<br>riéndonos cerca a este<br>parque. Te amo.");

var m39 = L.marker([4.6275504,-74.0761316], {icon: minimarker}).addTo(mymap);
m39.bindPopup("<b>Búfala Blanca</b><br>Este lugar es mágico<br>contigo <3");

var m40 = L.marker([4.6275504,-74.0761316], {icon: minimarker}).addTo(mymap);
m40.bindPopup("<b>Pastelería Romanotti</b><br>Aquí nos llevó tu<br>mamá a desayunar un día<br>que regresamos del aeropuerto.");

var m41 = L.marker([4.612924,-74.0674776], {icon: minimarker}).addTo(mymap);
m41.bindPopup("<b>Templo Té</b><br>Quisiera poder volver a<br>pasar ahí la tarde<br>trabajando contigo, tomando<br>tés deli y comiendo<br>postres deli.");

var m42 = L.marker([4.6028467,-74.0659043], {icon: marker}).addTo(mymap);
m42.bindPopup("<b>Universidad de los Andes</b><br>Estaré eternamente agradecida<br>con este lugar por<br>cruzar nuestros caminos.<br>Por muchos más años juntos.");

var m43 = L.marker([4.6027482,-74.0668692], {icon: minimarker}).addTo(mymap);
m43.bindPopup("<b>One Burrito</b><br>Me encanta compartir<br>este burrito contigo.");

var m44 = L.marker([4.604089,-74.0650905], {icon: minimarker}).addTo(mymap);
m44.bindPopup("<b>Parqueadero Las Bermúdez</b><br>Aquí iniciaron muchos viajes<br>juntos en moto. Algunos<br>felices, otros tristes,<br>pero juntos.");

var m45 = L.marker([4.6014011,-74.0677791], {icon: minimarker}).addTo(mymap);
m45.bindPopup("<b>Magola Buendía</b><br>Acá nos tomamos muchas<br>polas y comimos muchos<br>sánduches.");

var m46 = L.marker([4.595714,-74.0718148], {icon: minimarker}).addTo(mymap);
m46.bindPopup("<b>Quinoa y Amaranto</b><br>Deli almorzar vegetariano<br>contigo. Gracias<br>por traerme aquí.");

var m47 = L.marker([4.6213148,-74.0744868], {icon: minimarker}).addTo(mymap);
m47.bindPopup("<b>Centro de Memoria, Paz y Reconciliación</b><br>Pongo este puntito<br>por todas las marchas<br>a las que hemos ido juntos <3.");

var m48 = L.marker([4.6271317,-74.0672759], {icon: marker}).addTo(mymap);
m48.bindPopup("<b>Tequenusa</b><br>Nuestro hogar por un<br>buen tiempo. Aquí empezamos<br>a pasar mucho más<br>tiempo juntos.");

var m49 = L.marker([4.6202801,-74.0685298], {icon: minimarker}).addTo(mymap);
m49.bindPopup("<b>Balcones de San Martín</b><br>Acá tomé la decisión<br>de ponerle todas mis<br>fuerzas a nuestra relación.");

var m50 = L.marker([4.5747484,-74.137228], {icon: marker}).addTo(mymap);
m50.bindPopup("<b>La suegra</b><br>Donde siempre me hacen<br>sentir bienvenida.");
