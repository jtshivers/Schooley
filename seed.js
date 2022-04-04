const { green, red } = require("chalk");
const { db, Campus, Student } = require("./server/db");

const students = [
  {
    firstName: "Randy",
    lastName: "BoBandy",
    email: "poopscoop@gmail.com",
    gpa: 3.0,
  },
  {
    firstName: "Eloisa",
    lastName: "Barbara",
    email: "ebarbara0@gmpg.org",
    gpa: 1.6,
    campusId: 58,
  },
  {
    firstName: "Janeen",
    lastName: "Jordon",
    email: "jjordon1@bizjournals.com",
    gpa: 3.9,
    campusId: 50,
  },
  {
    firstName: "Christie",
    lastName: "Toulson",
    email: "ctoulson2@sogou.com",
    gpa: 1.1,
    campusId: 42,
  },
  {
    firstName: "Farrell",
    lastName: "Willford",
    email: "fwillford3@narod.ru",
    gpa: 2.1,
    campusId: 36,
  },
  {
    firstName: "Nollie",
    lastName: "Sebring",
    email: "nsebring4@tinyurl.com",
    gpa: 0.8,
    campusId: 97,
  },
  {
    firstName: "Chrystel",
    lastName: "Wadeson",
    email: "cwadeson5@irs.gov",
    gpa: 0.1,
    campusId: 99,
  },
  {
    firstName: "Tabbitha",
    lastName: "Kincla",
    email: "tkincla6@cisco.com",
    gpa: 1.9,
    campusId: 94,
  },
  {
    firstName: "Margarete",
    lastName: "Louedey",
    email: "mlouedey7@slate.com",
    gpa: 0.2,
    campusId: 47,
  },
  {
    firstName: "Rolph",
    lastName: "Konig",
    email: "rkonig8@w3.org",
    gpa: 1.1,
    campusId: 13,
  },
  {
    firstName: "Franzen",
    lastName: "Ellington",
    email: "fellington9@msu.edu",
    gpa: 2.2,
    campusId: 18,
  },
  {
    firstName: "Roosevelt",
    lastName: "Laver",
    email: "rlavera@yale.edu",
    gpa: 2.5,
    campusId: 26,
  },
  {
    firstName: "Devin",
    lastName: "Dowry",
    email: "ddowryb@chicagotribune.com",
    gpa: 1.6,
    campusId: 26,
  },
  {
    firstName: "Gunther",
    lastName: "Fowley",
    email: "gfowleyc@tumblr.com",
    gpa: 1.2,
    campusId: 43,
  },
  {
    firstName: "Hamil",
    lastName: "Sutor",
    email: "hsutord@baidu.com",
    gpa: 2.8,
    campusId: 25,
  },
  {
    firstName: "Karalynn",
    lastName: "Palle",
    email: "kpallee@sphinn.com",
    gpa: 0.9,
    campusId: 5,
  },
  {
    firstName: "Florentia",
    lastName: "Quickenden",
    email: "fquickendenf@miibeian.gov.cn",
    gpa: 1.9,
    campusId: 19,
  },
  {
    firstName: "Corty",
    lastName: "Spark",
    email: "csparkg@baidu.com",
    gpa: 0.2,
    campusId: 66,
  },
  {
    firstName: "Bartlet",
    lastName: "Willacot",
    email: "bwillacoth@blogtalkradio.com",
    gpa: 2.8,
    campusId: 77,
  },
  {
    firstName: "Krystyna",
    lastName: "Meah",
    email: "kmeahi@shutterfly.com",
    gpa: 3.7,
    campusId: 47,
  },
  {
    firstName: "Gates",
    lastName: "Harbottle",
    email: "gharbottlej@live.com",
    gpa: 1.8,
    campusId: 41,
  },
  {
    firstName: "Christopher",
    lastName: "Snell",
    email: "csnellk@nps.gov",
    gpa: 3.6,
    campusId: 31,
  },
  {
    firstName: "Nicki",
    lastName: "Kingston",
    email: "nkingstonl@nyu.edu",
    gpa: 0.9,
    campusId: 82,
  },
  {
    firstName: "Reggis",
    lastName: "Balhatchet",
    email: "rbalhatchetm@vimeo.com",
    gpa: 1.2,
    campusId: 97,
  },
  {
    firstName: "Timmy",
    lastName: "Koppel",
    email: "tkoppeln@unicef.org",
    gpa: 1.2,
    campusId: 52,
  },
  {
    firstName: "Prue",
    lastName: "Bellerby",
    email: "pbellerbyo@vkontakte.ru",
    gpa: 2.0,
    campusId: 28,
  },
  {
    firstName: "Krystle",
    lastName: "Langthorn",
    email: "klangthornp@java.com",
    gpa: 1.5,
    campusId: 99,
  },
  {
    firstName: "Amanda",
    lastName: "Heatley",
    email: "aheatleyq@salon.com",
    gpa: 1.0,
    campusId: 2,
  },
  {
    firstName: "Jeffie",
    lastName: "Pavkovic",
    email: "jpavkovicr@geocities.jp",
    gpa: 3.0,
    campusId: 81,
  },
  {
    firstName: "Nikolaos",
    lastName: "Goathrop",
    email: "ngoathrops@naver.com",
    gpa: 1.2,
    campusId: 39,
  },
  {
    firstName: "Burt",
    lastName: "Giraudot",
    email: "bgiraudott@usatoday.com",
    gpa: 1.3,
    campusId: 90,
  },
  {
    firstName: "Eli",
    lastName: "Cammomile",
    email: "ecammomileu@dell.com",
    gpa: 2.2,
    campusId: 58,
  },
  {
    firstName: "Hart",
    lastName: "De Gregorio",
    email: "hdegregoriov@npr.org",
    gpa: 1.1,
    campusId: 38,
  },
  {
    firstName: "Gae",
    lastName: "Kitchinghan",
    email: "gkitchinghanw@ed.gov",
    gpa: 0.8,
    campusId: 80,
  },
  {
    firstName: "Caritta",
    lastName: "Van Hesteren",
    email: "cvanhesterenx@webs.com",
    gpa: 3.3,
    campusId: 16,
  },
  {
    firstName: "Cathy",
    lastName: "Sandercock",
    email: "csandercocky@google.ca",
    gpa: 3.6,
    campusId: 48,
  },
  {
    firstName: "Kerr",
    lastName: "Romanski",
    email: "kromanskiz@dot.gov",
    gpa: 1.7,
    campusId: 49,
  },
  {
    firstName: "Mic",
    lastName: "Rickerby",
    email: "mrickerby10@biglobe.ne.jp",
    gpa: 0.2,
    campusId: 61,
  },
  {
    firstName: "Kelley",
    lastName: "Schonfelder",
    email: "kschonfelder11@163.com",
    gpa: 2.3,
    campusId: 68,
  },
  {
    firstName: "Norry",
    lastName: "Cadlock",
    email: "ncadlock12@barnesandnoble.com",
    gpa: 1.1,
    campusId: 87,
  },
  {
    firstName: "Ronna",
    lastName: "Chadney",
    email: "rchadney13@howstuffworks.com",
    gpa: 0.5,
    campusId: 6,
  },
  {
    firstName: "Obidiah",
    lastName: "Leynagh",
    email: "oleynagh14@wsj.com",
    gpa: 4.0,
    campusId: 40,
  },
  {
    firstName: "Glen",
    lastName: "Boncore",
    email: "gboncore15@intel.com",
    gpa: 2.6,
    campusId: 98,
  },
  {
    firstName: "Vevay",
    lastName: "Pavy",
    email: "vpavy16@miibeian.gov.cn",
    gpa: 3.9,
    campusId: 2,
  },
  {
    firstName: "Jaine",
    lastName: "Cobb",
    email: "jcobb17@merriam-webster.com",
    gpa: 1.9,
    campusId: 30,
  },
  {
    firstName: "Leopold",
    lastName: "O'Fihily",
    email: "lofihily18@hibu.com",
    gpa: 1.9,
    campusId: 40,
  },
  {
    firstName: "Barnabe",
    lastName: "Hotson",
    email: "bhotson19@columbia.edu",
    gpa: 2.4,
    campusId: 57,
  },
  {
    firstName: "Wanids",
    lastName: "MacCheyne",
    email: "wmaccheyne1a@washingtonpost.com",
    gpa: 2.5,
    campusId: 50,
  },
  {
    firstName: "Jacquelynn",
    lastName: "Asel",
    email: "jasel1b@bbb.org",
    gpa: 0.2,
    campusId: 2,
  },
  {
    firstName: "Dena",
    lastName: "Sate",
    email: "dsate1c@quantcast.com",
    gpa: 1.4,
    campusId: 66,
  },
  {
    firstName: "Johnnie",
    lastName: "Kirimaa",
    email: "jkirimaa1d@dedecms.com",
    gpa: 3.2,
    campusId: 37,
  },
  {
    firstName: "Timothy",
    lastName: "Hunnam",
    email: "thunnam1e@ed.gov",
    gpa: 0.2,
    campusId: 48,
  },
  {
    firstName: "Adrianna",
    lastName: "Epinoy",
    email: "aepinoy1f@fema.gov",
    gpa: 3.3,
    campusId: 94,
  },
  {
    firstName: "Maryjo",
    lastName: "Tidball",
    email: "mtidball1g@wsj.com",
    gpa: 2.4,
    campusId: 89,
  },
  {
    firstName: "Yvonne",
    lastName: "Ferrai",
    email: "yferrai1h@bravesites.com",
    gpa: 1.9,
    campusId: 51,
  },
  {
    firstName: "Meredith",
    lastName: "Ferfulle",
    email: "mferfulle1i@wiley.com",
    gpa: 2.0,
    campusId: 89,
  },
  {
    firstName: "Rainer",
    lastName: "Mathewes",
    email: "rmathewes1j@simplemachines.org",
    gpa: 1.7,
    campusId: 13,
  },
  {
    firstName: "Minerva",
    lastName: "Lingwood",
    email: "mlingwood1k@globo.com",
    gpa: 3.3,
    campusId: 18,
  },
  {
    firstName: "Adrian",
    lastName: "Thorrold",
    email: "athorrold1l@goodreads.com",
    gpa: 3.1,
    campusId: 25,
  },
  {
    firstName: "Prudence",
    lastName: "La Wille",
    email: "plawille1m@amazon.de",
    gpa: 2.7,
    campusId: 68,
  },
  {
    firstName: "Neddy",
    lastName: "Kinsey",
    email: "nkinsey1n@i2i.jp",
    gpa: 3.4,
    campusId: 57,
  },
  {
    firstName: "Ashlen",
    lastName: "Tillerton",
    email: "atillerton1o@cisco.com",
    gpa: 0.0,
    campusId: 23,
  },
  {
    firstName: "Barthel",
    lastName: "Hoolaghan",
    email: "bhoolaghan1p@time.com",
    gpa: 1.7,
    campusId: 9,
  },
  {
    firstName: "Kirsten",
    lastName: "Jeyes",
    email: "kjeyes1q@surveymonkey.com",
    gpa: 0.2,
    campusId: 59,
  },
  {
    firstName: "Tanney",
    lastName: "Teligin",
    email: "tteligin1r@google.it",
    gpa: 0.6,
    campusId: 38,
  },
  {
    firstName: "Pace",
    lastName: "Luckings",
    email: "pluckings1s@scientificamerican.com",
    gpa: 3.4,
    campusId: 23,
  },
  {
    firstName: "Denyse",
    lastName: "Grigorkin",
    email: "dgrigorkin1t@prnewswire.com",
    gpa: 1.1,
    campusId: 96,
  },
  {
    firstName: "Celine",
    lastName: "Wilkison",
    email: "cwilkison1u@google.de",
    gpa: 3.2,
    campusId: 97,
  },
  {
    firstName: "Benedikta",
    lastName: "D'Onisi",
    email: "bdonisi1v@independent.co.uk",
    gpa: 2.0,
    campusId: 78,
  },
  {
    firstName: "Jeanelle",
    lastName: "Mattiassi",
    email: "jmattiassi1w@dell.com",
    gpa: 2.2,
    campusId: 53,
  },
  {
    firstName: "Ernst",
    lastName: "Cureton",
    email: "ecureton1x@tiny.cc",
    gpa: 3.5,
    campusId: 29,
  },
  {
    firstName: "Melony",
    lastName: "Iredell",
    email: "miredell1y@cafepress.com",
    gpa: 3.0,
    campusId: 20,
  },
  {
    firstName: "Ronalda",
    lastName: "Achromov",
    email: "rachromov1z@de.vu",
    gpa: 3.6,
    campusId: 48,
  },
  {
    firstName: "Phil",
    lastName: "Fontanet",
    email: "pfontanet20@xrea.com",
    gpa: 3.2,
    campusId: 83,
  },
  {
    firstName: "Georgine",
    lastName: "Kinze",
    email: "gkinze21@europa.eu",
    gpa: 1.2,
    campusId: 2,
  },
  {
    firstName: "Brucie",
    lastName: "Hanes",
    email: "bhanes22@fotki.com",
    gpa: 1.1,
    campusId: 12,
  },
  {
    firstName: "Aguste",
    lastName: "Strangeway",
    email: "astrangeway23@youku.com",
    gpa: 1.5,
    campusId: 8,
  },
  {
    firstName: "Jerrie",
    lastName: "Quinlan",
    email: "jquinlan24@shutterfly.com",
    gpa: 2.7,
    campusId: 71,
  },
  {
    firstName: "Hagan",
    lastName: "Sherwell",
    email: "hsherwell25@unc.edu",
    gpa: 3.7,
    campusId: 10,
  },
  {
    firstName: "Dierdre",
    lastName: "Pecha",
    email: "dpecha26@people.com.cn",
    gpa: 0.0,
    campusId: 60,
  },
  {
    firstName: "Jackelyn",
    lastName: "Scoyne",
    email: "jscoyne27@flavors.me",
    gpa: 2.7,
    campusId: 40,
  },
  {
    firstName: "Jo",
    lastName: "Baudry",
    email: "jbaudry28@webs.com",
    gpa: 3.7,
    campusId: 48,
  },
  {
    firstName: "Annissa",
    lastName: "Brisker",
    email: "abrisker29@apache.org",
    gpa: 0.2,
    campusId: 13,
  },
  {
    firstName: "Alberto",
    lastName: "De Ruggero",
    email: "aderuggero2a@smh.com.au",
    gpa: 1.0,
    campusId: 74,
  },
  {
    firstName: "Maxie",
    lastName: "Gartell",
    email: "mgartell2b@chronoengine.com",
    gpa: 2.9,
    campusId: 6,
  },
  {
    firstName: "Gard",
    lastName: "Aleksic",
    email: "galeksic2c@dedecms.com",
    gpa: 3.4,
    campusId: 65,
  },
  {
    firstName: "Fee",
    lastName: "Husher",
    email: "fhusher2d@joomla.org",
    gpa: 0.7,
    campusId: 57,
  },
  {
    firstName: "Waldon",
    lastName: "Donett",
    email: "wdonett2e@joomla.org",
    gpa: 2.4,
    campusId: 99,
  },
  {
    firstName: "Meyer",
    lastName: "O'Brian",
    email: "mobrian2f@pbs.org",
    gpa: 2.4,
    campusId: 100,
  },
  {
    firstName: "Cthrine",
    lastName: "Abrahamsson",
    email: "cabrahamsson2g@msn.com",
    gpa: 0.9,
    campusId: 4,
  },
  {
    firstName: "Diarmid",
    lastName: "Feaveer",
    email: "dfeaveer2h@loc.gov",
    gpa: 0.1,
    campusId: 7,
  },
  {
    firstName: "Dorolisa",
    lastName: "Foskew",
    email: "dfoskew2i@dell.com",
    gpa: 1.4,
    campusId: 1,
  },
  {
    firstName: "Gerek",
    lastName: "Scowen",
    email: "gscowen2j@youtu.be",
    gpa: 2.5,
    campusId: 95,
  },
  {
    firstName: "Rene",
    lastName: "Adair",
    email: "radair2k@wordpress.com",
    gpa: 1.6,
    campusId: 21,
  },
  {
    firstName: "Pavel",
    lastName: "Rutt",
    email: "prutt2l@prweb.com",
    gpa: 2.6,
    campusId: 92,
  },
  {
    firstName: "Olwen",
    lastName: "Trevarthen",
    email: "otrevarthen2m@usa.gov",
    gpa: 0.4,
    campusId: 62,
  },
  {
    firstName: "Emmery",
    lastName: "Clausner",
    email: "eclausner2n@is.gd",
    gpa: 3.5,
    campusId: 60,
  },
  {
    firstName: "Vivyan",
    lastName: "Eydel",
    email: "veydel2o@yahoo.co.jp",
    gpa: 3.4,
    campusId: 65,
  },
  {
    firstName: "Merna",
    lastName: "Worsley",
    email: "mworsley2p@examiner.com",
    gpa: 3.5,
    campusId: 13,
  },
  {
    firstName: "Sergeant",
    lastName: "Hierro",
    email: "shierro2q@cloudflare.com",
    gpa: 3.8,
    campusId: 51,
  },
  {
    firstName: "Hedda",
    lastName: "Gittoes",
    email: "hgittoes2r@yolasite.com",
    gpa: 1.9,
    campusId: 42,
  },
];

const campuses = [
  {
    name: "Lahey Reformatory",
    address: "4567 Main St, Somewhere In Canada",
    description: "We make burgers!",
  },
  {
    name: "Toughjoyfax School",
    address: "605 Jackson Parkway",
  },
  {
    name: "Duobam School",
    address: "955 Waxwing Place",
  },
  {
    name: "Ventosanzap School",
    address: "09009 Derek Center",
  },
  {
    name: "Regrant School",
    address: "219 Artisan Center",
  },
  {
    name: "Tampflex School",
    address: "4 Merrick Street",
  },
  {
    name: "Zoolab School",
    address: "4 Norway Maple Parkway",
  },
  {
    name: "Subin School",
    address: "4 Dovetail Park",
  },
  {
    name: "Gembucket School",
    address: "8 Maple Road",
  },
  {
    name: "Span School",
    address: "0 Aberg Drive",
  },
  {
    name: "Overhold School",
    address: "475 Pond Hill",
  },
  {
    name: "Sonsing School",
    address: "27 Cascade Parkway",
  },
  {
    name: "Bamity School",
    address: "945 Corry Drive",
  },
  {
    name: "Zathin School",
    address: "28311 Village Terrace",
  },
  {
    name: "Subin School",
    address: "104 Elgar Place",
  },
  {
    name: "Keylex School",
    address: "91 Cherokee Junction",
  },
  {
    name: "Tempsoft School",
    address: "4 Homewood Crossing",
  },
  {
    name: "Viva School",
    address: "1 Pawling Junction",
  },
  {
    name: "Redhold School",
    address: "6 Wayridge Street",
  },
  {
    name: "Konklux School",
    address: "63 Norway Maple Point",
  },
  {
    name: "Kanlam School",
    address: "51 Saint Paul Avenue",
  },
  {
    name: "Wrapsafe School",
    address: "23 Gerald Place",
  },
  {
    name: "Mat Lam Tam School",
    address: "3 Sheridan Place",
  },
  {
    name: "Flexidy School",
    address: "2 Holy Cross Center",
  },
  {
    name: "Stim School",
    address: "56588 Eliot Crossing",
  },
  {
    name: "Matsoft School",
    address: "5847 Magdeline Center",
  },
  {
    name: "Zaam-Dox School",
    address: "04 Luster Plaza",
  },
  {
    name: "Bytecard School",
    address: "0365 Di Loreto Plaza",
  },
  {
    name: "Zamit School",
    address: "1280 Butternut Point",
  },
  {
    name: "Tin School",
    address: "9292 Hermina Crossing",
  },
  {
    name: "Bamity School",
    address: "0764 Pankratz Drive",
  },
  {
    name: "Fixflex School",
    address: "3 Golden Leaf Terrace",
  },
  {
    name: "Subin School",
    address: "57541 Arrowood Center",
  },
  {
    name: "Kanlam School",
    address: "9 Farragut Place",
  },
  {
    name: "Temp School",
    address: "8507 Shelley Avenue",
  },
  {
    name: "Greenlam School",
    address: "185 Valley Edge Point",
  },
  {
    name: "Lotstring School",
    address: "9069 Ridgeway Parkway",
  },
  {
    name: "It School",
    address: "5763 Anderson Plaza",
  },
  {
    name: "Rank School",
    address: "5 5th Crossing",
  },
  {
    name: "Bitchip School",
    address: "55 Dorton Parkway",
  },
  {
    name: "Transcof School",
    address: "62 Westend Terrace",
  },
  {
    name: "Mat Lam Tam School",
    address: "8085 Moland Alley",
  },
  {
    name: "Domainer School",
    address: "63991 Magdeline Alley",
  },
  {
    name: "Solarbreeze School",
    address: "6 Miller Terrace",
  },
  {
    name: "Ronstring School",
    address: "43 Lake View Street",
  },
  {
    name: "Ventosanzap School",
    address: "7649 Anniversary Junction",
  },
  {
    name: "Sonair School",
    address: "6780 Weeping Birch Junction",
  },
  {
    name: "Zamit School",
    address: "51 Stuart Plaza",
  },
  {
    name: "Flowdesk School",
    address: "2 Maryland Junction",
  },
  {
    name: "Zamit School",
    address: "780 Claremont Drive",
  },
  {
    name: "Y-find School",
    address: "6 American Place",
  },
  {
    name: "Keylex School",
    address: "527 Debra Place",
  },
  {
    name: "Namfix School",
    address: "8 Shasta Point",
  },
  {
    name: "Cookley School",
    address: "80046 Trailsway Place",
  },
  {
    name: "Holdlamis School",
    address: "76 Lotheville Drive",
  },
  {
    name: "Transcof School",
    address: "57 Mallard Hill",
  },
  {
    name: "Veribet School",
    address: "6 Hagan Parkway",
  },
  {
    name: "Flowdesk School",
    address: "6 Heath Park",
  },
  {
    name: "Konklab School",
    address: "138 Veith Circle",
  },
  {
    name: "Otcom School",
    address: "99934 Manufacturers Terrace",
  },
  {
    name: "Regrant School",
    address: "49676 Packers Alley",
  },
  {
    name: "Kanlam School",
    address: "5 Lukken Center",
  },
  {
    name: "Domainer School",
    address: "3 Menomonie Crossing",
  },
  {
    name: "Y-find School",
    address: "730 Brown Park",
  },
  {
    name: "Sonair School",
    address: "8 Banding Road",
  },
  {
    name: "Hatity School",
    address: "2 West Court",
  },
  {
    name: "Sub-Ex School",
    address: "49 Macpherson Way",
  },
  {
    name: "Zoolab School",
    address: "98 Rigney Place",
  },
  {
    name: "Flexidy School",
    address: "40106 Helena Place",
  },
  {
    name: "Bamity School",
    address: "676 Mcbride Pass",
  },
  {
    name: "Fintone School",
    address: "6 Ludington Crossing",
  },
  {
    name: "Otcom School",
    address: "83 Dovetail Place",
  },
  {
    name: "Transcof School",
    address: "97382 Bobwhite Plaza",
  },
  {
    name: "Zaam-Dox School",
    address: "0919 Ohio Court",
  },
  {
    name: "Tresom School",
    address: "89892 Esker Center",
  },
  {
    name: "Mat Lam Tam School",
    address: "69208 Scott Street",
  },
  {
    name: "Opela School",
    address: "7 Loeprich Road",
  },
  {
    name: "Latlux School",
    address: "45627 Park Meadow Park",
  },
  {
    name: "Redhold School",
    address: "06 Transport Court",
  },
  {
    name: "Solarbreeze School",
    address: "0120 Kedzie Crossing",
  },
  {
    name: "Bigtax School",
    address: "88774 Anhalt Hill",
  },
  {
    name: "Span School",
    address: "89 Nobel Plaza",
  },
  {
    name: "Veribet School",
    address: "94472 Buell Lane",
  },
  {
    name: "Voyatouch School",
    address: "6708 Bluestem Lane",
  },
  {
    name: "Mat Lam Tam School",
    address: "86 Mosinee Pass",
  },
  {
    name: "Regrant School",
    address: "7 Cordelia Trail",
  },
  {
    name: "Sub-Ex School",
    address: "24 Springview Park",
  },
  {
    name: "Span School",
    address: "465 Mccormick Trail",
  },
  {
    name: "It School",
    address: "140 Reinke Circle",
  },
  {
    name: "Biodex School",
    address: "6 Sherman Center",
  },
  {
    name: "Home Ing School",
    address: "195 Springview Center",
  },
  {
    name: "Toughjoyfax School",
    address: "87 Walton Circle",
  },
  {
    name: "Bamity School",
    address: "299 Cody Hill",
  },
  {
    name: "Aerified School",
    address: "7206 Luster Pass",
  },
  {
    name: "Bitchip School",
    address: "7 Arkansas Street",
  },
  {
    name: "Pannier School",
    address: "855 Rigney Pass",
  },
  {
    name: "Gembucket School",
    address: "2964 8th Park",
  },
  {
    name: "Hatity School",
    address: "95 Grasskamp Point",
  },
  {
    name: "Treeflex School",
    address: "92119 Montana Point",
  },
  {
    name: "Span School",
    address: "968 Sunnyside Circle",
  },
  {
    name: "Redhold School",
    address: "335 Nobel Street",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!

    await Promise.all(campuses.map((campus) => Campus.create(campus)));
    await Promise.all(students.map((student) => Student.create(student)));

    db.close();
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
