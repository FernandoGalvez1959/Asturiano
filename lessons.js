/* Asturianu Básico A1 · contenido del curso.
   Cada frase: [asturiano, cómo se lee, castellano]. Las lecciones se abren una a una. */
window.APP = {
  id: "asturiano-a1",
  langName: "asturiano",
  speechLang: "es-ES",
  voicePrefix: "es",
  contractions: false,
  /* El móvil no tiene voz asturiana: usa la española. La x asturiana suena como “ch/sh”. */
  tts: function (s) { return String(s).replace(/x/g, "ch").replace(/X/g, "Ch"); },
  LESSONS: [
    {
      title: "Saludos y presentaciones",
      intro: "El asturiano se parece mucho al castellano, así que vas a reconocer casi todo. Empiezas por lo más útil: saludar, dar las gracias y decir cómo te llamas.",
      items: [
        ["Hola", "Ó-la", "Hola"],
        ["Bonos díes", "BÓ-nos DÍ-es", "Buenos días"],
        ["Bones tardes", "BÓ-nes TÁR-des", "Buenas tardes"],
        ["Bones nueches", "BÓ-nes NUÉ-ches", "Buenas noches"],
        ["Adiós", "a-DIÓS", "Adiós"],
        ["Hasta mañana", "ÁS-ta ma-ÑÁ-na", "Hasta mañana"],
        ["Por favor", "por fa-BOR", "Por favor"],
        ["Gracies", "GRÁ-cies", "Gracias"],
        ["Munches gracies", "MÚN-ches GRÁ-cies", "Muchas gracias"],
        ["De nada", "de NÁ-da", "De nada"],
        ["Sí", "si", "Sí"],
        ["Non", "non", "No"],
        ["¿Cómo te llames?", "CÓ-mo te LLÁ-mes", "¿Cómo te llamas?"],
        ["Llámome Fer", "LLÁ-mo-me fer", "Me llamo Fer"],
        ["¿Cómo tas?", "CÓ-mo tas", "¿Cómo estás?"],
        ["Toi bien", "toi bien", "Estoy bien"],
        ["Encantáu", "en-can-TÁU", "Encantado"],
        ["Encantada", "en-can-TÁ-da", "Encantada (si habla una mujer)"]
      ],
      tips: [
        "La <b>x</b> suena como la “sh” de “shock”: <b>Xixón</b> (Gijón) se lee “Shishón”.",
        "<b>Non</b> es el “no” asturiano. Los plurales femeninos acaban en <b>-es</b>: gracies, tardes, nueches.",
        "<b>Llámome</b>: el pronombre va pegado al final del verbo (llamo + me). Es muy típico del asturiano."
      ],
      dialogs: [
        { title: "Un saludo por la mañana", lines: [
          ["Bonos díes. ¿Cómo tas?", "Buenos días. ¿Cómo estás?"],
          ["Toi bien, gracies. ¿Y tu?", "Estoy bien, gracias. ¿Y tú?"],
          ["Toi bien, gracies.", "Estoy bien, gracias."]
        ] },
        { title: "Presentarse", lines: [
          ["¿Cómo te llames?", "¿Cómo te llamas?"],
          ["Llámome Fer. ¿Y tu?", "Me llamo Fer. ¿Y tú?"],
          ["Llámome Ana. Encantada.", "Me llamo Ana. Encantada."],
          ["Encantáu.", "Encantado."]
        ] }
      ]
    },
    {
      title: "Yo, tu, él: ser y estar",
      intro: "Igual que en castellano, hay dos verbos: ser (identidad y origen) y estar (estados y lugares). Aprende estas formas, que se usan en todas las frases.",
      items: [
        ["Soi", "soi", "Soy"],
        ["Yes", "yes", "Eres"],
        ["Ye", "ye", "Es"],
        ["Somos", "SÓ-mos", "Somos"],
        ["Sois", "sois", "Sois"],
        ["Son", "son", "Son"],
        ["Toi", "toi", "Estoy"],
        ["Tas", "tas", "Estás"],
        ["Ta", "ta", "Está"],
        ["Tamos", "TÁ-mos", "Estamos"],
        ["Tais", "TÁ-is", "Estáis"],
        ["Tán", "tan", "Están"],
        ["Nós", "nos", "Nosotros"],
        ["Vós", "bos", "Vosotros"],
        ["Yo soi de Xixón", "yo soi de shi-SHÓN", "Yo soy de Gijón"],
        ["Ella ye d’Uviéu", "É-lla ye du-BIÉ-u", "Ella es de Oviedo"],
        ["Nós tamos equí", "nos TÁ-mos e-KÍ", "Nosotros estamos aquí"],
        ["¿Cómo tais?", "CÓ-mo TÁ-is", "¿Cómo estáis?"],
        ["Ellos tán equí", "É-llos tan e-KÍ", "Ellos están aquí"]
      ],
      tips: [
        "<b>Ye</b> (ser) es para identidad y origen; <b>ta</b> (estar) para estados y lugares, como en castellano.",
        "Delante de vocal, “de” se acorta: <b>d’Uviéu</b>. Oviedo es <b>Uviéu</b> y Gijón es <b>Xixón</b>.",
        "Pronombres: yo, tu, él, ella, <b>nós</b>, <b>vós</b>, ellos, <b>elles</b> (ellas)."
      ],
      dialogs: [
        { title: "¿De dónde eres?", lines: [
          ["¿Yes d’Uviéu?", "¿Eres de Oviedo?"],
          ["Non, soi de Xixón.", "No, soy de Gijón."],
          ["Ella ye d’Uviéu.", "Ella es de Oviedo."]
        ] },
        { title: "En casa", lines: [
          ["¿Cómo tais?", "¿Cómo estáis?"],
          ["Nós tamos bien.", "Nosotros estamos bien."],
          ["Ellos tán equí.", "Ellos están aquí."]
        ] }
      ]
    },
    {
      title: "Números y díes de la selmana",
      intro: "Los números son casi iguales que en castellano. Los días de la semana (selmana) cambian más: fíjate en los que empiezan por ll- y x-.",
      items: [
        ["Ún / una", "un / Ú-na", "Uno / una"],
        ["Dos", "dos", "Dos"],
        ["Tres", "tres", "Tres"],
        ["Cuatro", "CUÁ-tro", "Cuatro"],
        ["Cinco", "CÍN-co", "Cinco"],
        ["Seis", "seis", "Seis"],
        ["Siete", "SIÉ-te", "Siete"],
        ["Ocho", "Ó-cho", "Ocho"],
        ["Nueve", "NUÉ-be", "Nueve"],
        ["Diez", "diez", "Diez"],
        ["Llunes", "LLÚ-nes", "Lunes"],
        ["Martes", "MÁR-tes", "Martes"],
        ["Miércoles", "MIÉR-co-les", "Miércoles"],
        ["Xueves", "SHUÉ-bes", "Jueves"],
        ["Vienres", "BIÉN-res", "Viernes"],
        ["Sábadu", "SÁ-ba-du", "Sábado"],
        ["Domingu", "do-MÍN-gu", "Domingo"],
        ["La selmana", "la sel-MÁ-na", "La semana"],
        ["Güei ye llunes", "GUÉI ye LLÚ-nes", "Hoy es lunes"],
        ["Mañana ye martes", "ma-ÑÁ-na ye MÁR-tes", "Mañana es martes"]
      ],
      tips: [
        "Para el género: <b>un</b> llibru (masculino), <b>una</b> casa (femenina).",
        "Martes y miércoles son como en castellano; cambien <b>llunes</b>, <b>xueves</b>, <b>vienres</b>, <b>sábadu</b> y <b>domingu</b>.",
        "<b>Güei</b> es “hoy”. Se lee “güéi”, con la u sonando como en “agüita”."
      ],
      dialogs: [
        { title: "¿Qué día ye güei?", lines: [
          ["¿Qué día ye güei?", "¿Qué día es hoy?"],
          ["Güei ye xueves.", "Hoy es jueves."],
          ["Mañana ye vienres.", "Mañana es viernes."]
        ] },
        { title: "Contando", lines: [
          ["Ún, dos, tres, cuatro, cinco.", "Uno, dos, tres, cuatro, cinco."],
          ["Seis, siete, ocho, nueve, diez.", "Seis, siete, ocho, nueve, diez."]
        ] }
      ]
    },
    {
      title: "Los artículos y el plural",
      intro: "En asturiano los nombres masculinos acaban en -u y los femeninos en -a. El plural masculino acaba en -os y el femenino en -es.",
      items: [
        ["El llibru", "el LLÍ-bru", "El libro"],
        ["Los llibros", "los LLÍ-bros", "Los libros"],
        ["La casa", "la CÁ-sa", "La casa"],
        ["Les cases", "les CÁ-ses", "Las casas"],
        ["El neñu", "el NÉ-ñu", "El niño"],
        ["La neña", "la NÉ-ña", "La niña"],
        ["Los neños", "los NÉ-ños", "Los niños"],
        ["Les neñes", "les NÉ-ñes", "Las niñas"],
        ["El perru", "el PÉ-rru", "El perro"],
        ["El gatu", "el GÁ-tu", "El gato"],
        ["La ventana", "la ben-TÁ-na", "La ventana"],
        ["Les ventanes", "les ben-TÁ-nes", "Las ventanas"],
        ["El pueblu", "el PUÉ-blu", "El pueblo"],
        ["El llibru ta equí", "el LLÍ-bru ta e-KÍ", "El libro está aquí"],
        ["Les cases tán equí", "les CÁ-ses tan e-KÍ", "Las casas están aquí"],
        ["El gatu ta bien", "el GÁ-tu ta bien", "El gato está bien"]
      ],
      tips: [
        "Artículos: <b>el</b> (masc. sing.), <b>la</b> (fem. sing.), <b>los</b> (masc. plural), <b>les</b> (fem. plural) y <b>lo</b> (neutro: lo bono = lo bueno).",
        "Masculino: <b>-u</b> en singular y <b>-os</b> en plural (el gatu, los gatos). Femenino: <b>-a</b> y <b>-es</b> (la neña, les neñes).",
        "Muchas palabras que en castellano empiezan por l- empiezan por <b>ll-</b>: llibru, lleche, llingua."
      ],
      dialogs: [
        { title: "Mirando la casa", lines: [
          ["El llibru ta equí.", "El libro está aquí."],
          ["Les cases tán equí.", "Las casas están aquí."],
          ["El gatu ta equí.", "El gato está aquí."]
        ] },
        { title: "Los niños", lines: [
          ["La neña ta bien.", "La niña está bien."],
          ["Los neños tán bien.", "Los niños están bien."]
        ] }
      ]
    },
    {
      title: "La familia",
      intro: "Las palabras de familia se reconocen fácil. Además aprendes “mi, tu, su”, que en asturiano son mio, to y so y valen para masculino y femenino.",
      items: [
        ["El mio padre", "el mio PÁ-dre", "Mi padre"],
        ["La mio madre", "la mio MÁ-dre", "Mi madre"],
        ["El to hermanu", "el to er-MÁ-nu", "Tu hermano"],
        ["La to hermana", "la to er-MÁ-na", "Tu hermana"],
        ["El so fíu", "el so FÍ-u", "Su hijo"],
        ["La so fía", "la so FÍ-a", "Su hija"],
        ["El güelu", "el GÜÉ-lu", "El abuelo"],
        ["La güela", "la GÜÉ-la", "La abuela"],
        ["El tíu", "el TÍ-u", "El tío"],
        ["La tía", "la TÍ-a", "La tía"],
        ["El primu", "el PRÍ-mu", "El primo"],
        ["L’amigu", "la-MÍ-gu", "El amigo"],
        ["L’amiga", "la-MÍ-ga", "La amiga"],
        ["El mio padre ye de Xixón", "el mio PÁ-dre ye de shi-SHÓN", "Mi padre es de Gijón"],
        ["La to güela ta bien", "la to GÜÉ-la ta bien", "Tu abuela está bien"],
        ["Ella ye la mio madre", "É-lla ye la mio MÁ-dre", "Ella es mi madre"]
      ],
      tips: [
        "<b>Mio</b>, <b>to</b> y <b>so</b> son “mi”, “tu” y “su”. No cambian entre masculino y femenino: el mio padre, la mio madre.",
        "<b>Fíu</b> y <b>fía</b> conservan la f- del latín; en castellano esa f- se perdió (hijo).",
        "Delante de vocal, “el” y “la” se acortan a <b>l’</b>: l’amigu, l’amiga."
      ],
      dialogs: [
        { title: "Presentando a la familia", lines: [
          ["¿Ella ye la to madre?", "¿Ella es tu madre?"],
          ["Sí, ye la mio madre.", "Sí, es mi madre."],
          ["¿Y él?", "¿Y él?"],
          ["Él ye el mio hermanu.", "Él es mi hermano."]
        ] },
        { title: "La abuela", lines: [
          ["¿Cómo ta la to güela?", "¿Cómo está tu abuela?"],
          ["Ta bien, gracies.", "Está bien, gracias."]
        ] }
      ]
    },
    {
      title: "Comer y beber",
      intro: "Vocabulario para el chigre (el bar) y la cocina. En Asturias la sidra es casi un idioma aparte.",
      items: [
        ["El pan", "el pan", "El pan"],
        ["La lleche", "la LLÉ-che", "La leche"],
        ["L’agua", "LÁ-gua", "El agua"],
        ["El café", "el ca-FÉ", "El café"],
        ["La sidra", "la SÍ-dra", "La sidra"],
        ["El quesu", "el KÉ-su", "El queso"],
        ["Les fabes", "les FÁ-bes", "Las fabes (alubias)"],
        ["La carne", "la CÁR-ne", "La carne"],
        ["El pexe", "el PÉ-she", "El pescado"],
        ["La fruta", "la FRÚ-ta", "La fruta"],
        ["La mazana", "la ma-ZÁ-na", "La manzana"],
        ["La sal", "la sal", "La sal"],
        ["L’azucre", "la-ZÚ-cre", "El azúcar"],
        ["Quiero un café", "KIÉ-ro un ca-FÉ", "Quiero un café"],
        ["Una sidra, por favor", "Ú-na SÍ-dra por fa-BOR", "Una sidra, por favor"],
        ["Tengo fame", "TÉN-go FÁ-me", "Tengo hambre"],
        ["Tengo sede", "TÉN-go SÉ-de", "Tengo sed"],
        ["La cuenta, por favor", "la CUÉN-ta por fa-BOR", "La cuenta, por favor"]
      ],
      tips: [
        "<b>Fame</b> es “hambre”: el asturiano conserva la f- latina, como en <b>fíu</b>.",
        "Delante de vocal, “la” y “el” se acortan: <b>l’agua</b>, <b>l’azucre</b>.",
        "Cultura: la sidra se <b>escancia</b>, echándola desde arriba para que gane burbuja. Lo que se sirve cada vez se llama <b>culín</b>."
      ],
      dialogs: [
        { title: "En el chigre", lines: [
          ["Bones tardes. ¿Qué quies?", "Buenas tardes. ¿Qué quieres?"],
          ["Quiero una sidra, por favor.", "Quiero una sidra, por favor."],
          ["Equí ta la sidra.", "Aquí está la sidra."],
          ["Munches gracies. La cuenta, por favor.", "Muchas gracias. La cuenta, por favor."]
        ] },
        { title: "Tengo fame", lines: [
          ["Tengo fame.", "Tengo hambre."],
          ["¿Quies pan y quesu?", "¿Quieres pan y queso?"],
          ["Sí, por favor.", "Sí, por favor."]
        ] }
      ]
    },
    {
      title: "Verbos regulares",
      intro: "Hay tres grupos de verbos: -ar, -er e -ir. Aprendiendo uno de cada grupo, sabes conjugar casi todos.",
      items: [
        ["Falar", "fa-LAR", "Hablar"],
        ["Comer", "co-MER", "Comer"],
        ["Vivir", "bi-BIR", "Vivir"],
        ["Trabayar", "tra-ba-YAR", "Trabajar"],
        ["Beber", "be-BER", "Beber"],
        ["Escribir", "es-cri-BIR", "Escribir"],
        ["Lleer", "lle-ER", "Leer"],
        ["Falo", "FÁ-lo", "Hablo"],
        ["Fales", "FÁ-les", "Hablas"],
        ["Fala", "FÁ-la", "Habla"],
        ["Falamos", "fa-LÁ-mos", "Hablamos"],
        ["Faláis", "fa-LÁIS", "Habláis"],
        ["Como", "CÓ-mo", "Como"],
        ["Comes", "CÓ-mes", "Comes"],
        ["Vivo", "BÍ-bo", "Vivo"],
        ["Viven", "BÍ-ben", "Viven"],
        ["Yo falo asturianu", "yo FÁ-lo as-tu-RIÁ-nu", "Yo hablo asturiano"],
        ["Nós comemos pan", "nos co-MÉ-mos pan", "Nosotros comemos pan"],
        ["Elles viven n’Asturies", "É-lles BÍ-ben nas-TÚ-ries", "Ellas viven en Asturias"],
        ["Tu trabayes en Xixón", "tu tra-BÁ-yes en shi-SHÓN", "Tú trabajas en Gijón"]
      ],
      tips: [
        "Terminaciones: <b>-o, -es, -e, -amos/-emos/-imos, -áis/-éis/-ís, -en</b>.",
        "En la forma de <b>vós</b> llevan tilde: faláis, coméis, vivís.",
        "Delante de vocal, “en” se acorta: <b>n’Asturies</b> (en Asturias), <b>n’Uviéu</b> (en Oviedo)."
      ],
      dialogs: [
        { title: "¿Falas asturianu?", lines: [
          ["¿Fales asturianu?", "¿Hablas asturiano?"],
          ["Sí, falo asturianu y castellanu.", "Sí, hablo asturiano y castellano."],
          ["¡Bien!", "¡Bien!"]
        ] },
        { title: "¿Ónde vives?", lines: [
          ["¿Vives en Xixón?", "¿Vives en Gijón?"],
          ["Non, vivo n’Uviéu.", "No, vivo en Oviedo."]
        ] }
      ]
    },
    {
      title: "Lugares y direcciones",
      intro: "Para moverte por Asturias: nombres de lugares, cómo preguntar dónde está algo y las contracciones con “en”, que son muy típicas.",
      items: [
        ["La playa", "la PLÁ-ya", "La playa"],
        ["La ciudá", "la ciu-DÁ", "La ciudad"],
        ["El chigre", "el CHÍ-gre", "El bar (chigre)"],
        ["La mar", "la mar", "El mar"],
        ["El monte", "el MÓN-te", "El monte"],
        ["El ríu", "el RRÍ-u", "El río"],
        ["La plaza", "la PLÁ-za", "La plaza"],
        ["La ilesia", "la i-LÉ-sia", "La iglesia"],
        ["La tienda", "la TIÉN-da", "La tienda"],
        ["El mercáu", "el mer-CÁU", "El mercado"],
        ["A la derecha", "a la de-RÉ-cha", "A la derecha"],
        ["A la izquierda", "a la iz-KIÉR-da", "A la izquierda"],
        ["Equí", "e-KÍ", "Aquí"],
        ["Ellí", "e-LLÍ", "Allí"],
        ["¿Ónde ta la playa?", "ON-de ta la PLÁ-ya", "¿Dónde está la playa?"],
        ["La playa ta ellí", "la PLÁ-ya ta e-LLÍ", "La playa está allí"],
        ["Voi a Xixón", "boi a shi-SHÓN", "Voy a Gijón"],
        ["Toi na plaza", "toi na PLÁ-za", "Estoy en la plaza"],
        ["Vivo nel pueblu", "BÍ-bo nel PUÉ-blu", "Vivo en el pueblo"]
      ],
      tips: [
        "Contracciones con “en”: <b>nel</b> (en el), <b>na</b> (en la), <b>nos</b> (en los), <b>nes</b> (en les) y <b>n’</b> delante de vocal.",
        "Las palabras que acaban en -ad en castellano acaban en <b>-á</b>: ciudá, verdá, llibertá.",
        "<b>¿Ónde ta…?</b> es la pregunta más útil para orientarte. El verbo ir: voi, vas, va, vamos, vais, van."
      ],
      dialogs: [
        { title: "Preguntando por la playa", lines: [
          ["Perdón. ¿Ónde ta la playa?", "Perdón. ¿Dónde está la playa?"],
          ["Ta ellí, a la derecha.", "Está allí, a la derecha."],
          ["Munches gracies.", "Muchas gracias."],
          ["De nada.", "De nada."]
        ] },
        { title: "¿Ónde vas?", lines: [
          ["¿Ónde vas?", "¿Adónde vas?"],
          ["Voi a Xixón. ¿Y tu?", "Voy a Gijón. ¿Y tú?"],
          ["Voi al mercáu.", "Voy al mercado."]
        ] }
      ]
    }
  ]
};
