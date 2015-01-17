var pyrmont = new google.maps.LatLng(52.0833,4.3167); // de coordinaten van den haag

map = new google.maps.Map(document.getElementById('nothing'), {});

var request = {
location: pyrmont,
    //radius: '500',
rankBy: google.maps.places.RankBy.DISTANCE,
types: ["accounting", "airport", "amusement_park", "aquarium", "art_gallery", "atm", "bakery", "bank", "bar", "beauty_salon", "bicycle_store", "book_store", "bowling_alley", "bus_station", "cafe", "campground", "car_dealer", "car_rental", "car_repair", "car_wash", "casino", "cemetery", "church", "city_hall", "clothing_store", "convenience_store", "courthouse", "dentist", "department_store", "doctor", "electrician", "electronics_store", "embassy", "establishment", "finance", "fire_station", "florist", "food", "funeral_home", "furniture_store", "gas_station", "general_contractor", "grocery_or_supermarket", "gym", "hair_care", "hardware_store", "health", "hindu_temple", "home_goods_store", "hospital", "insurance_agency", "jewelry_store", "laundry", "lawyer", "library", "liquor_store", "local_government_office", "locksmith", "lodging", "meal_delivery", "meal_takeaway", "mosque", "movie_rental", "movie_theater", "moving_company", "museum", "night_club", "painter", "park", "parking", "pet_store", "pharmacy", "physiotherapist", "place_of_worship", "plumber", "police", "post_office", "real_estate_agency", "restaurant", "roofing_contractor", "rv_park", "school", "shoe_store", "shopping_mall", "spa", "stadium", "storage", "store", "subway_station", "synagogue", "taxi_stand", "train_station", "travel_agency", "university", "veterinary_care", "zoo"]
};

service = new google.maps.places.PlacesService(map);
service.nearbySearch(request, callback);

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        
        // Zet het hele ding op de pagina
        //$("#resultsraw").html(JSON.stringify(results, null, 2))
        
        // vanaf dit moment heet de plek `place`
        var place = results[0];
        
        //alert("Je bent bij: " + place.types[0] + "  " + place.name);
        
        var message;
        
        
        if(place.types[0] == "airport"){
            if( Math.round( Math.random() ) == 0){
                message = "Het paradijs is niet voor jou bestemd, blijf maar gewoon in Nederland.";
            } else {
                message = "Nee nee, niet vluchten, vakanties zijn voor mensen die het verdienen.";
            }
        }
        else if(place.types[0] == "amusement_park"){
            if( Math.round( Math.random() ) == 0){
                message = "Heb je al je klusjes voor elkaar? Nee? Dan geen lol voor jou.";
            } else {
                message = "Amusement is niet voor jou weggelegd, ga maar thuis je klusjes doen.";
            }
        }
        else if(place.types[0] == "art_gallery"){
            if( Math.round( Math.random() ) == 0){
                message = "Kunst is voor de rijken of mensen met ambitie. ";
            } else {
                message = "Kunst? Veel te duur! Koop maar bij de kringloopwinkel.";
            }
        }
        else if(place.types[0] == "atm"){
            message = "Geld opnemen is voor mensen die het ook bezitten. Doe maar niet";
        }
        else if(place.types[0] == "bakery"){
            message = "De bakkerij is veel te duur, ga maar naar de ALDI.";
        }
        else if(place.types[0] == "bank"){
            if( Math.round( Math.random() ) == 0){
                message = "Je nagels kan je zelf ook vijlen.";
            } else {
                message = "Een scrub kan je ook kopen bij de Action. Loop maar door.";
            }
        }
        else if(place.types[0] == "bar"){
            message = "PLAASTHIERJEMESSAGE";
        }
        else if(place.types[0] == "bicycle_store"){
            message = "PLAASTHIERJEMESSAGE";
        }
        else if(place.types[0] == "book_store"){
            message = "Ebooks kosten niks, boeken zijn toch onhandig";
        }
        else if(place.types[0] == "cafe"){
            message = "Plezier heb je met je vrienden in de kroeg, jij niet. ";
        }
        else if(place.types[0] == "casino"){
            message = "Spelen met geld is voor rijke mensen. Speel maar gewoon Monopoly thuis op de bank.";
        }
        else if(place.types[0] == "church"){
            message = "Het geloof heeft jou allang in de steek gelaten.";
        }
        else if(place.types[0] == "clothing_store"){
            if( Math.round( Math.random() ) == 0){
                message = "Deze kledingwinkel is veel te duur voor jou, ga maar naar de Zeeman";
            } else {
                message = "De Primark is een goedkopere optie voor jou, draai maar om";
            }
        }
        else if(place.types[0] == "establishment"){
            message = "HOU JE BEK";
        }
        
        else if(place.types[0] == "fire_station"){
            message = "Maak je maar geen zorgen, zo heet ben je niet.";
        }
        else if(place.types[0] == "florist"){
            message = "	Bloemetje kopen? Oh wacht, je hebt toch niemand om het aan te geven.";
        }
        else if(place.types[0] == "food"){
            if( Math.round( Math.random() ) == 0){
                message = "Vreetzak. Beter stop je met eten.";
            } else {
                message = "Kijk naar je vetrollen. Past er nog 1 bij?";
            }
        }
        else if(place.types[0] == "furniture_store"){
            message = "	Meubels hoef je niet te kopen, niet nodig in je slobberhuis.";
        }
        else if(place.types[0] == "grocery_or_supermarket"){
            if( Math.round( Math.random() ) == 0){
                message = "Niet verder kijken dan de AH Basic. Dat is namelijk hoe ver je portemonnee reikt.";
            } else {
                message = "Ben je van plan om te kopen of om te solliciteren voor een baan? Dat tweede lijkt mij verstandiger aangezien je omstandigheden.";
            }
        }
        else if(place.types[0] == "gym"){
            if( Math.round( Math.random() ) == 0){
                message = "Hahahaha. Laat me niet lachen. Je hebt waarschijnlijk in minstens 3 jaar geen sportschool niet bezocht.";
            } else {
                message = "Misschien wordt het eens tijd?";
            }
        }
        else if(place.types[0] == "hair_care"){
            if( Math.round( Math.random() ) == 0){
                message = "Zelfs een kapper kan jouw haar niet meer redden.";
            } else {
                message = "Misschien kun je de kapper vragen wat te doen aan je bad-hair-life.";
            }
        }
        else if(place.types[0] == "health"){
            message = "	Tijd om wat te doen aan die onverzorgdheid van je.";
        }
        else if(place.types[0] == "hospital"){
            if( Math.round( Math.random() ) == 0){
                message = "Misschien moet je eerder op zoek naar een mentaal ziekenhuis?";
            } else {
                message = "Laat maar gelijk die neus van je fixen.";
            }
        }
        else if(place.types[0] == "insurance_agency"){
            message = "PLAASTHIERJEMESSAGE";
        }
        else if(place.types[0] == "jewelry_store"){
            message = "WAAAAT? Daar heb je echt geen geld voor hoor!";
        }
        else if(place.types[0] == "laundry"){
            message = "	Ruik je dat? Zo ruiken schone kleren nou!";
        }
        else if(place.types[0] == "library"){
            if( Math.round( Math.random() ) == 0){
                message = "Misschien is het tijd om dat IQ maar eens naar een hoger level te krijgen.";
            } else {
                message = "Jij, en een boek? Laat me niet lachen.";
            }
        }
        else if(place.types[0] == "liquor_store"){
            if( Math.round( Math.random() ) == 0){
                message = "Zo zo, alcoholist. Even rustig aan he.";
            } else {
                message = "Beter blijf je uit te buurt, we weten allemaal hoe agressief je wordt met een drankje op.";
            }
        }
        else if(place.types[0] == "meal_delivery"){
            message = "Toppunt van een dikkerd: eten laten bezorgen.";
        }
        else if(place.types[0] == "meal_takeaway"){
            if( Math.round( Math.random() ) == 0){
                message = "Niet eens je eigen voedsel koken?";
            } else {
                message = "Ga je nou echt wéér voor die rotzooi?";
            }
        }
        else if(place.types[0] == "mosque"){
            message = "Zelfs een geloof kan jou niet meer redden.";
        }
        else if(place.types[0] == "movie_theater"){
            if( Math.round( Math.random() ) == 0){
                message = "Haha, alsof je hier geld voor hebt.";
            } else {
                message = "Wist je dat er meer mensen alleen naar de bios gaan? Is niet erg hoor, dat je een loner bent.";
            }
        }
        else if(place.types[0] == "museum"){
            message = "Kijk uit voor je verslaving voor cultuur snuiven!";
        }
        else if(place.types[0] == "night_club"){
            message = "Je wilt lekker dansen hè?! Heb je geen huiswerk te maken?";
        }
        else if(place.types[0] == "park"){
            message = "Is het een beetje mooi weer om te picknicken?";
        }
        else if(place.types[0] == "parking"){
            message = "Een beetje lui met de auto gaan zeker.";
        }
        else if(place.types[0] == "pet_store"){
            message = "Je hebt nu de kans een chiwawa te kopen. ";
        }
        else if(place.types[0] == "pharmacy"){
            message = "Haal die pillen maar gewoon, het blijft toch kut gaan.";
        }
        else if(place.types[0] == "police"){
            message = "Weet je zeker dat je jou ID kaart bij je hebt?";
        }
        else if(place.types[0] == "post_office"){
            message = "Stuur jij nou nog brieven?";
        }
        else if(place.types[0] == "real_estate_agency"){
            message = "Het is beter voor jou om gewoon bij je ouders te blijven wonen.";
        }
        else if(place.types[0] == "restaurant"){
            message = "Let nou op je gewicht!";
        }
        else if(place.types[0] == "school"){
            message = "Is je huiswerk al gemaakt?";
        }
        else if(place.types[0] == "shoe_store"){
            message = "Je heb al genoeg ongebruikte schoenen en je draagt al een paar!";
        }
        else if(place.types[0] == "shopping_mall"){
            message = "Je kunt beter naar het casino gaan.";
        }
        else if(place.types[0] == "stadium"){
            message = "Heb je zin om te vechten ofzo?";
        }
        else if(place.types[0] == "storage"){
            message = "Weer je illegale praktijken verbergen?";
        }
        else if(place.types[0] == "subway_station"){
            message = "Ben je wel ingecheckt?";
        }
        else if(place.types[0] == "synagogue"){
            message = "Wie is er nou nog gelovig tegenwoordig?";
        }
        else if(place.types[0] == "taxi_stand"){
            message = "Ga gewoon lopen!";
        }
        else if(place.types[0] == "train_station"){
            message = "Ben je wel ingecheckt?";
        }
        else if(place.types[0] == "travel_agency"){
            message = "Altijd maar willen vluchten.";
        }
        else if(place.types[0] == "university"){
            message = "Leerbeer";
        }
        else if(place.types[0] == "zoo"){
            message = "Even je familie bezoeken?";
        }
        
        
        
        else {
            message = "Hier heb ik echt niets over te zeggen. Veel plezier";
        }
        
        
        // stuur een alert.
        alert(message);
        
    }
}

