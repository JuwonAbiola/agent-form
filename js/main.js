 //<![CDATA[
 // array of possible local government in the same order as they appear in the local goverment selection list
 var localGov = new Array(4)
 localGov["empty"] = ["Select your Local Government"];
 localGov["Abia"] = ["Aba North",
     "AbaSouth",
     "Arochukwu",
     "Bende",
     "Ikwuano",
     "IsialaNgwaNorth",
     "Isiala Ngwa South",
     "Isuikwuato",
     "Obi Ngwa",
     "Ohafia", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South",
     "Umu Nneochi"
 ];
 localGov["Adamawa"] = ["Demsa",
     "Fufore",
     "Ganye",
     "Girei",
     "Gombi",
     "Guyuk",
     "Hong",
     "Jada",
     "Lamurde",
     "Madagali",
     "Maiha",
     "Mayo-Belwa",
     "Michika",
     "Mubi North",
     "Mubi South",
     "Numan",
     "Shelleng",
     "Song",
     "Toungo",
     "Yola North",
     "Yola South"
 ];
 localGov["Akwa Ibom"] = [
     "Abak",
     "Eastern Obolo",
     "Eket",
     "Esit Eket",
     "Essien Udim",
     "Etim Ekpo",
     "Etinan",
     "Ibeno",
     "Ibesikpo Asutan",
     "Ibiono-Ibom",
     "Ika",
     "Ikono",
     "Ikot Abasi",
     "Ikot Ekpene",
     "Ini",
     "Itu",
     "Mbo",
     "Mkpat-Enin",
     "Nsit-Atai",
     "Nsit-Ibom",
     "Nsit-Ubium",
     "Obot Akara",
     "Okobo",
     "Onna",
     "Oron",
     "Oruk Anam",
     "Udung-Uko",
     "Ukanafun",
     "Uruan",
     "Urue-Offong Oruko",
     "Uyo"
 ];
 localGov["Anambra"] = [
     "Aguata",

     "Anambra East",

     "Anambra West",

     "Anaocha",


     "Awka North",


     "Awka South",


     "Ayamelum",


     "Dunukofia",


     "Ekwusigo",


     "Idemili North",


     "Idemili South",


     "Ihiala",


     "Njikoka",


     "Nnewi North",


     "Nnewi South",


     "Ogbaru",


     "Onitsha North",


     "Onitsha South",


     "Orumba North",


     "Orumba South",


     "Oyi"
 ];
 localGov["Bauchi"] = [
     "Alkaleri",


     "Bauchi",


     "Bogoro",


     "Damban",


     "Darazo",


     "Dass",


     "Gamawa",


     "Ganjuwa",


     "Giade",


     "Itas\/Gadau",


     "Jama'are",


     "Katagum",


     "Kirfi",


     "Misau",


     "Ningi",


     "Shira",


     "Tafawa Balewa",


     "Toro",


     "Warji",


     "Zaki"

 ];
 localGov["Bayelsa"] = [

     "Ogbia",


     "Sagbama",


     "Southern Ijaw",


     "Yenagoa"
 ];
 localGov["Benue"] = [
     "Agatu",


     "Apa",


     "Ado",


     "Buruku",


     "Gboko",


     "Guma",


     "Gwer East",


     "Gwer West",


     "Katsina-Ala",


     "Konshisha",


     "Kwande",


     "Logo",


     "Makurdi",


     "Obi",


     "Ogbadibo",


     "Ohimini",


     "Oju",


     "Okpokwu",


     "Oturkpo",


     "Tarka",


     "Ukum",


     "Ushongo",


     "Vandeikya"
 ];
 localGov["Borno"] = [
     "Abadam",


     "Askira Uba",


     "Bama",


     "Bayo",


     "Biu",


     "Chibok",


     "Damboa",


     "Dikwa",


     "Gubio",


     "Guzamala",


     "Gwoza",


     "Hawul",


     "Jere",


     "Kaga",


     "Kala\/Balge",


     "Konduga",


     "Kukawa",


     "Kwaya Kusar",


     "Mafa",


     "Magumeri",


     "Maiduguri",


     "Marte",


     "Mobbar",


     "Monguno",


     "Ngala",


     "Nganzai",


     "Shani"
 ];
 localGov["CrossRiver"] = [
     "Abi",


     "Akamkpa",


     "Akpabuyo",


     "Bakassi",


     "Bekwarra",


     "Biase",


     "Boki",


     "Calabar Municipal",


     "Calabar South",


     "Etung",


     "Ikom",


     "Obanliku",


     "Obubra",


     "Obudu",


     "Odukpani",


     "Ogoja",


     "Yakuur",


     "Yala"
 ];
 localGov["Delta"] = [
     "Aniocha North",


     "Aniocha South",


     "Bomadi",


     "Burutu",


     "Ethiope East",


     "Ethiope West",


     "Ika North East",


     "Ika South",


     "Isoko North",


     "Isoko South",


     "Ndokwa East",


     "Ndokwa West",


     "Okpe",


     "Oshimili North",


     "Oshimili South",


     "Patani",


     "Sapele",


     "Udu",


     "Ughelli North",


     "Ughelli South",


     "Ukwuani",


     "Uvwie",


     "Warri North",


     "Warri South",


     "Warri South West"
 ];
 localGov["Ebonyi"] = [
     "Abakaliki",


     "Afikpo North",


     "Afikpo South",


     "Ebonyi",


     "Ezza North",


     "Ezza South",


     "Ikwo",


     "Ishielu",


     "Ivo",


     "Izzi",


     "Ohaozara",


     "Ohaukwu",


     "Onicha"
 ];
 localGov["Enugu"] = [
     "Aninri",


     "Awgu",


     "Enugu East",


     "Enugu North",


     "Enugu South",


     "Ezeagu",


     "Igbo Etiti",


     "Igbo Eze North",


     "Igbo Eze South",


     "Isi Uzo",


     "Nkanu East",


     "Nkanu West",


     "Nsukka",


     "Oji River",


     "Udenu",


     "Udi",


     "Uzo Uwani"
 ];
 localGov["Edo"] = [
     "Akoko-Edo",


     "Egor",


     "Esan Central",


     "Esan North-East",


     "Esan South-East",


     "Esan West",


     "Etsako Central",


     "Etsako East",


     "Etsako West",


     "Igueben",


     "Ikpoba Okha",


     "Orhionmwon",


     "Oredo",


     "Ovia North-East",


     "Ovia South-West",


     "Owan East",


     "Owan West",


     "Uhunmwonde"
 ];
 localGov["Ekiti"] = [
     "Ado Ekiti",


     "Efon",


     "Ekiti East",


     "Ekiti South-West",


     "Ekiti West",


     "Emure",


     "Gbonyin",


     "Ido Osi",


     "Ijero",


     "Ikere",


     "Ikole",


     "Ilejemeje",


     "Irepodun Ifelodun",


     "Ise Orun",


     "Moba",


     "Oye"
 ];
 localGov["Gombe"] = [
     "Akko",


     "Balanga",


     "Billiri",


     "Dukku",


     "Funakaye",


     "Gombe",


     "Kaltungo",


     "Kwami",


     "Nafada",


     "Shongom",


     "Yamaltu Deba"
 ];
 localGov["Imo"] = [
     "Aboh Mbaise",


     "Ahiazu Mbaise",


     "Ehime Mbano",


     "Ezinihitte",


     "Ideato North",


     "Ideato South",


     "Ihitte Uboma",


     "Ikeduru",


     "Isiala Mbano",


     "Isu",


     "Mbaitoli",


     "Ngor Okpala",


     "Njaba",


     "Nkwerre",


     "Nwangele",


     "Obowo",


     "Oguta",


     "Ohaji Egbema",


     "Okigwe",


     "Orlu",


     "Orsu",


     "Oru East",


     "Oru West",


     "Owerri Municipal",


     "Owerri North",


     "Owerri West",


     "Unuimo"
 ];
 localGov["Jigawa"] = [
     "Auyo",


     "Babura",


     "Biriniwa",


     "Birnin Kudu",


     "Buji",


     "Dutse",


     "Gagarawa",


     "Garki",


     "Gumel",


     "Guri",


     "Gwaram",


     "Gwiwa",


     "Hadejia",


     "Jahun",


     "Kafin Hausa",


     "Kazaure",


     "Kiri Kasama",


     "Kiyawa",


     "Kaugama",


     "Maigatari",


     "Malam Madori",


     "Miga",


     "Ringim",


     "Roni",


     "Sule Tankarkar",


     "Taura",


     "Yankwashi"
 ];
 localGov["Kaduna"] = [
     "Birnin Gwari",


     "Chikun",


     "Giwa",


     "Igabi",


     "Ikara",


     "Jaba",


     "Jema'a",


     "Kachia",


     "Kaduna North",


     "Kaduna South",


     "Kagarko",


     "Kajuru",


     "Kaura",


     "Kauru",


     "Kubau",


     "Kudan",


     "Lere",


     "Makarfi",


     "Sabon Gari",


     "Sanga",


     "Soba",


     "Zangon Kataf",


     "Zaria"
 ];
 localGov["Kano"] = [
     "Ajingi",


     "Albasu",


     "Bagwai",


     "Bebeji",


     "Bichi",


     "Bunkure",


     "Dala",


     "Dambatta",


     "Dawakin Kudu",


     "Dawakin Tofa",


     "Doguwa",


     "Fagge",


     "Gabasawa",


     "Garko",


     "Garun Mallam",


     "Gaya",


     "Gezawa",


     "Gwale",


     "Gwarzo",


     "Kabo",


     "Kano Municipal",


     "Karaye",


     "Kibiya",


     "Kiru",


     "Kumbotso",


     "Kunchi",


     "Kura",


     "Madobi",


     "Makoda",


     "Minjibir",


     "Nasarawa",


     "Rano",


     "Rimin Gado",


     "Rogo",


     "Shanono",


     "Sumaila",


     "Takai",


     "Tarauni",


     "Tofa",


     "Tsanyawa",


     "Tudun Wada",


     "Ungogo",


     "Warawa",


     "Wudil"
 ];
 localGov["Kastina"] = [
     "Bakori",


     "Batagarawa",


     "Batsari",


     "Baure",


     "Bindawa",


     "Charanchi",


     "Dandume",


     "Danja",


     "Dan Musa",


     "Daura",


     "Dutsi",


     "Dutsin Ma",


     "Faskari",


     "Funtua",


     "Ingawa",


     "Jibia",


     "Kafur",


     "Kaita",


     "Kankara",


     "Kankia",


     "Katsina",


     "Kurfi",


     "Kusada",


     "Mai'Adua",


     "Malumfashi",


     "Mani",


     "Mashi",


     "Matazu",


     "Musawa",


     "Rimi",


     "Sabuwa",


     "Safana",


     "Sandamu",


     "Zango"
 ];
 localGov["Kebbi"] = [
     "Aleiro",


     "Arewa Dandi",


     "Argungu",


     "Augie",


     "Bagudo",


     "Birnin Kebbi",


     "Bunza",


     "Dandi",


     "Fakai",


     "Gwandu",


     "Jega",


     "Kalgo",


     "Koko Besse",


     "Maiyama",


     "Ngaski",


     "Sakaba",


     "Shanga",


     "Suru",


     "Wasagu Danko",


     "Yauri",


     "Zuru"
 ];
 localGov["Kogi"] = [
     "Adavi",


     "Ajaokuta",


     "Ankpa",


     "Bassa",


     "Dekina",


     "Ibaji",


     "Idah",


     "Igalamela Odolu",


     "Ijumu",


     "Kabba Bunu",


     "Kogi",


     "Lokoja",


     "Mopa Muro",


     "Ofu",


     "Ogori Magongo",


     "Okehi",


     "Okene",


     "Olamaboro",


     "Omala",


     "Yagba East",


     "Yagba West"
 ];
 localGov["Kwara"] = [
     "Asa",


     "Baruten",


     "Edu",


     "Ekiti",


     "Ifelodun",


     "Ilorin East",


     "Ilorin South",


     "Ilorin West",


     "Irepodun",


     "Isin",


     "Kaiama",


     "Moro",


     "Offa",


     "Oke Ero",


     "Oyun",


     "Pategi"
 ];
 localGov["Lagos"] = [
     "Agege",


     "Ajeromi-Ifelodun",


     "Alimosho",


     "Amuwo-Odofin",


     "Apapa",


     "Badagry",


     "Epe",


     "Eti Osa",


     "Ibeju-Lekki",


     "Ifako-Ijaiye",


     "Ikeja",


     "Ikorodu",


     "Kosofe",


     "Lagos Island",


     "Lagos Mainland",


     "Mushin",


     "Ojo",


     "Oshodi-Isolo",


     "Shomolu",


     "Surulere"
 ];
 localGov["Nasarawa"] = [
     "Akwanga",


     "Awe",


     "Doma",


     "Karu",


     "Keana",


     "Keffi",


     "Kokona",


     "Lafia",


     "Nasarawa",


     "Nasarawa Egon",


     "Obi",


     "Toto",


     "Wamba"
 ];
 localGov["Niger"] = [
     "Agaie",


     "Agwara",


     "Bida",


     "Borgu",


     "Bosso",


     "Chanchaga",


     "Edati",


     "Gbako",


     "Gurara",


     "Katcha",


     "Kontagora",


     "Lapai",


     "Lavun",


     "Magama",


     "Mariga",


     "Mashegu",


     "Mokwa",


     "Moya",


     "Paikoro",


     "Rafi",


     "Rijau",


     "Shiroro",


     "Suleja",


     "Tafa",


     "Wushishi"
 ];
 localGov["Ogun"] = [
     "Abeokuta North",


     "Abeokuta South",


     "Ado-Odo Ota",


     "Egbado North",


     "Egbado South",


     "Ewekoro",


     "Ifo",


     "Ijebu East",


     "Ijebu North",


     "Ijebu North East",


     "Ijebu Ode",


     "Ikenne",


     "Imeko Afon",


     "Ipokia",


     "Obafemi Owode",


     "Odeda",


     "Odogbolu",


     "Ogun Waterside",


     "Remo North",


     "Shagamu"
 ];
 localGov["Ondo"] = [
     "Akoko North-East",


     "Akoko North-West",


     "Akoko South-West",


     "Akoko South-East",


     "Akure North",


     "Akure South",


     "Ese Odo",


     "Idanre",


     "Ifedore",


     "Ilaje",


     "Ile Oluji Okeigbo",


     "Irele",


     "Odigbo",


     "Okitipupa",


     "Ondo East",


     "Ondo West",


     "Ose",


     "Owo"
 ];
 localGov["Osun"] = [
     "Atakunmosa East",


     "Atakunmosa West",


     "Aiyedaade",


     "Aiyedire",


     "Boluwaduro",


     "Boripe",


     "Ede North",


     "Ede South",


     "Ife Central",


     "Ife East",


     "Ife North",


     "Ife South",


     "Egbedore",


     "Ejigbo",


     "Ifedayo",


     "Ifelodun",


     "Ila",


     "Ilesa East",


     "Ilesa West",


     "Irepodun",


     "Irewole",


     "Isokan",


     "Iwo",


     "Obokun",


     "Odo Otin",


     "Ola Oluwa",


     "Olorunda",


     "Oriade",


     "Orolu",


     "Osogbo"
 ];
 localGov["Oyo"] = [
     "Afijio",


     "Akinyele",


     "Atiba",


     "Atisbo",


     "Egbeda",


     "Ibadan North",


     "Ibadan North-East",


     "Ibadan North-West",


     "Ibadan South-East",


     "Ibadan South-West",


     "Ibarapa Central",


     "Ibarapa East",


     "Ibarapa North",


     "Ido",


     "Irepo",


     "Iseyin",


     "Itesiwaju",


     "Iwajowa",


     "Kajola",


     "Lagelu",


     "Ogbomosho North",


     "Ogbomosho South",


     "Ogo Oluwa",


     "Olorunsogo",


     "Oluyole",


     "Ona Ara",


     "Orelope",


     "Ori Ire",


     "Oyo",


     "Oyo East",


     "Saki East",


     "Saki West",


     "Surulere"
 ];
 localGov["Plateau"] = [
     "Bokkos",


     "Barkin Ladi",


     "Bassa",


     "Jos East",


     "Jos North",


     "Jos South",


     "Kanam",


     "Kanke",


     "Langtang South",


     "Langtang North",


     "Mangu",


     "Mikang",


     "Pankshin",


     "Qua'an Pan",


     "Riyom",


     "Shendam",


     "Wase"
 ];
 localGov["Rivers"] = [
     "Abua Odual",


     "Ahoada East",


     "Ahoada West",


     "Akuku-Toru",


     "Andoni",


     "Asari-Toru",


     "Bonny",


     "Degema",


     "Eleme",


     "Emuoha",


     "Etche",


     "Gokana",


     "Ikwerre",


     "Khana",


     "Obio Akpor",


     "Ogba Egbema Ndoni",


     "Ogu Bolo",


     "Okrika",


     "Omuma",


     "Opobo Nkoro",


     "Oyigbo",


     "Port Harcourt",


     "Tai"
 ];
 localGov["Sokoto"] = [
     "Binji",


     "Bodinga",


     "Dange Shuni",


     "Gada",


     "Goronyo",


     "Gudu",


     "Gwadabawa",


     "Illela",


     "Isa",


     "Kebbe",


     "Kware",


     "Rabah",


     "Sabon Birni",


     "Shagari",


     "Silame",


     "Sokoto North",


     "Sokoto South",


     "Tambuwal",


     "Tangaza",


     "Tureta",


     "Wamako",


     "Wurno",


     "Yabo"
 ];
 localGov["Taraba"] = [
     "Ardo Kola",


     "Bali",


     "Donga",


     "Gashaka",


     "Gassol",


     "Ibi",


     "Jalingo",


     "Karim Lamido",


     "Kumi",


     "Lau",


     "Sardauna",


     "Takum",


     "Ussa",


     "Wukari",


     "Yorro",


     "Zing"
 ];
 localGov["Yobe"] = [
     "Bade",


     "Bursari",


     "Damaturu",


     "Fika",


     "Fune",


     "Geidam",


     "Gujba",


     "Gulani",


     "Jakusko",


     "Karasuwa",


     "Machina",


     "Nangere",


     "Nguru",


     "Potiskum",


     "Tarmuwa",

     "Yunusari",


     "Yusufari"
 ];
 localGov["Zamfara"] = [
     "Anka",


     "Bakura",


     "Birnin Magaji Kiyaw",


     "Bukkuyum",


     "Bungudu",


     "Gummi",


     "Gusau",


     "Kaura Namoda",


     "Maradun",


     "Maru",


     "Shinkafi",


     "Talata Mafara",


     "Chafe",


     "Zurmi"
 ];
 localGov["Abuja"] = [
     "Abaji",


     "Bwari",


     "Gwagwalada",


     "Kuje",


     "Kwali",


     "Municipal Area Council"
 ];

 /* localGovChange() is called from the onchange event of a select element.
  * param selectObj - the select object which fired the on change event.
  */
 function localGovChange(selectObj) {
     // get the index of the selected option
     var idx = selectObj.selectedIndex;
     // get the value of the selected option
     var which = selectObj.options[idx].value;
     // use the selected option value to retrieve the list of items from the coutnryLists array
     cList = localGov[which];
     // get the country select element via its known id
     var cSelect = document.getElementById("country");
     // remove the current options from the country select
     var len = cSelect.options.length;
     while (cSelect.options.length > 0) {
         cSelect.remove(0);
     }
     var newOption;
     // create new options
     for (var i = 0; i < cList.length; i++) {
         newOption = document.createElement("option");
         newOption.value = cList[i]; // assumes option string and value are the same
         newOption.text = cList[i];
         // add the new option
         try {
             cSelect.add(newOption); // this will fail in DOM browsers but is needed for IE
         } catch (e) {
             cSelect.appendChild(newOption);

         }
     }
 }
 //]]>



 function showfield(name) {
     if (name == 'Other') {
         document.getElementById('div1').innerHTML = 'If Other, Please Specify  <input type="text" name="advert" class="form-control" id="specify" placeholder="Specify Here" />';
     } else {
         document.getElementById('div1').innerHTML = '';
     }
 }


























 var local = new Array(4)
 local["empty"] = ["Select your Local Government"];
 local["yes"] = ['Cellulant', 'E-Tranzaxt PocketMoni', 'FirstMonie', 'Kudi', 'Paga', 'Other'];

 function resChange(selectObj) {
     var idx = selectObj.selectedIndex;
     var which = selectObj.options[idx].value;
     cList = local[which];
     var cSelect = document.getElementById("rest");
     var len = cSelect.options.length;
     while (cSelect.options.length > 0) {
         cSelect.remove(0);
     }
     var newOption;
     for (var i = 0; i < cList.length; i++) {
         newOption = document.createElement("option");
         newOption.value = cList[i];
         newOption.text = cList[i];
         try {
             cSelect.add(newOption);
         } catch (e) {
             cSelect.appendChild(newOption);

         }
     }
 }