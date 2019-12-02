var order = [];
var images = [
	"a_1_bike_ooo",
	"a_2_bike_xoo",
	"a_3_bike_oxo",
	"a_4_bike_oox",
	"a_5_bike_xxo",
	"a_6_bike_xox",
	"a_7_bike_oxx",
	"a_8_bike_xxx",
	"b_1_fridge_ooo",
	"b_2_fridge_xoo",
	"b_3_fridge_oxo",
	"b_4_fridge_oox",
	"b_5_fridge_xxo",
	"b_6_fridge_xox",
	"b_7_fridge_oxx",
	"b_8_fridge_xxx"];
var question_surprise = [
	"How surprised are you to encounter an actual bike with wheels by TREK on a street?",
	"How surprised are you to encounter an actual bike with blades by TREK on a street?",
	"How surprised are you to encounter an actual bike with wheels by Disney on a street?",
	"How surprised are you to encounter an actual bike with wheels by TREK on a bed?",
	"How surprised are you to encounter an actual bike with blades by Disney on a street?",
	"How surprised are you to encounter an actual bike with blades by TREK on a bed?",
	"How surprised are you to encounter an actual bike with wheels by Disney on a bed?",
	"How surprised are you to encounter an actual bike with blades by Disney on a bed?",
	"How surprised are you to encounter an actual fridge with doors by AEG in a kitchen?",
	"How surprised are you to encounter an actual fridge with wings by AEG in a kitchen?",
	"How surprised are you to encounter an actual fridge with doors by Kodak in a kitchen?",
	"How surprised are you to encounter an actual fridge with doors by AEG in a forest?",
	"How surprised are you to encounter an actual fridge with wings by Kodak in a kitchen?",
	"How surprised are you to encounter an actual fridge with wings by AEG in a forest?",
	"How surprised are you to encounter an actual fridge with doors by Kodak in a forest?",
	"How surprised are you to encounter an actual fridge with wings by Kodak in a forest?"];
var question_imagine = [
	"How easily can you imagine an actual bike with wheels by TREK on a street?",
	"How easily can you imagine an actual bike with blades by TREK on a street?",
	"How easily can you imagine an actual bike with wheels by Disney on a street?",
	"How easily can you imagine an actual bike with wheels by TREK on a bed?",
	"How easily can you imagine an actual bike with blades by Disney on a street?",
	"How easily can you imagine an actual bike with blades by TREK on a bed?",
	"How easily can you imagine an actual bike with wheels by Disney on a bed?",
	"How easily can you imagine an actual bike with blades by Disney on a bed?",
	"How easily can you imagine an actual fridge with doors by AEG in a kitchen?",
	"How easily can you imagine an actual fridge with wings by AEG in a kitchen?",
	"How easily can you imagine an actual fridge with doors by Kodak in a kitchen?",
	"How easily can you imagine an actual fridge with doors by AEG in a forest?",
	"How easily can you imagine an actual fridge with wings by Kodak in a kitchen?",
	"How easily can you imagine an actual fridge with wings by AEG in a forest?",
	"How easily can you imagine an actual fridge with doors by Kodak in a forest?",
	"How easily can you imagine an actual fridge with wings by Kodak in a forest?"];
var question_example = [
	"How good an example of bike do you consider an actual bike with wheels by TREK on a street?",
	"How good an example of bike do you consider an actual bike with blades by TREK on a street?",
	"How good an example of bike do you consider an actual bike with wheels by Disney on a street?",
	"How good an example of bike do you consider an actual bike with wheels by TREK on a bed?",
	"How good an example of bike do you consider an actual bike with blades by Disney on a street?",
	"How good an example of bike do you consider an actual bike with blades by TREK on a bed?",
	"How good an example of bike do you consider an actual bike with wheels by Disney on a bed?",
	"How good an example of bike do you consider an actual bike with blades by Disney on a bed?",
	"How good an example of fridge do you consider an actual fridge with doors by AEG in a kitchen?",
	"How good an example of fridge do you consider an actual fridge with wings by AEG in a kitchen?",
	"How good an example of fridge do you consider an actual fridge with doors by Kodak in a kitchen?",
	"How good an example of fridge do you consider an actual fridge with doors by AEG in a forest?",
	"How good an example of fridge do you consider an actual fridge with wings by Kodak in a kitchen?",
	"How good an example of fridge do you consider an actual fridge with wings by AEG in a forest?",
	"How good an example of fridge do you consider an actual fridge with doors by Kodak in a forest?",
	"How good an example of fridge do you consider an actual fridge with wings by Kodak in a forest?"];

var question_ideal = [
	"How similar is an actual bike with wheels by TREK on a street to an ideal bike?",
	"How similar is an actual bike with blades by TREK on a street to an ideal bike?",
	"How similar is an actual bike with wheels by Disney on a street to an ideal bike?",
	"How similar is an actual bike with wheels by TREK on a bed to an ideal bike?",
	"How similar is an actual bike with blades by Disney on a street to an ideal bike?",
	"How similar is an actual bike with blades by TREK on a bed to an ideal bike?",
	"How similar is an actual bike with wheels by Disney on a bed to an ideal bike?",
	"How similar is an actual bike with blades by Disney on a bed to an ideal bike?",
	"How similar is an actual fridge with doors by AEG in a kitchen to an ideal fridge?",
	"How similar is an actual fridge with wings by AEG in a kitchen to an ideal fridge?",
	"How similar is an actual fridge with doors by Kodak in a kitchen to an ideal fridge?",
	"How similar is an actual fridge with doors by AEG in a kitchen to an ideal forest?",
	"How similar is an actual fridge with wings by Kodak in a kitchen to an ideal fridge?",
	"How similar is an actual fridge with wings by AEG in a kitchen to an ideal forest?",
	"How similar is an actual fridge with doors by Kodak in a kitchen to an ideal forest?",
	"How similar is an actual fridge with wings by Kodak in a kitchen to an ideal forest?"];



var index = 0;

(function(){
    // Your web app's Firebase configuration
    var config = {
        apiKey: "AIzaSyDuMfH66rv7R_A3JKhstTanRlOCFFRjXKE",
        authDomain: "surveytest-ec05d.firebaseapp.com",
        databaseURL: "https://surveytest-ec05d.firebaseio.com",
        projectId: "surveytest-ec05d",
        storageBucket: "surveytest-ec05d.appspot.com",
        messagingSenderId: "842946839037",
        appId: "1:842946839037:web:eddfc5fee601547a1f9994"
    };

    // Initialize Firebase
    firebase.initializeApp(config);
    //const preObject = document.getElementById('object');
    //const dbRefObject = firebase.database().ref().child('object');

    //dbRefObject.on('value', snap => console.log(snap.val()));
    createOrder();
    order = shuffle(order);
    updateQuestion();
}());

var key = firebase.database().ref().push().key;

function createOrder(){
    for(var i = 0; i < images.length; i++){
        order.push(i);
    }
}

function submit() {
    var age = $("#age").val();
    var gender = $("#gender").val();
    var ethnicity = $("#ethnicity").val();
    var nationality = $("#nationality").val();
    var education = $("#education").val();
    var occupation = $("#occupation").val();

    firebase.database().ref(key).push({
        "age": age,
        "gender": gender,
        "ethnicity": ethnicity,
        "nationality": nationality,
        "education": education,
        "occupation": occupation
    });
};

$(window).load(function () {
    $("#demographics_form").submit(submit);

});

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var answered = 0;
var currentButtons = [];
var currentAnswers = [];
var answers = [];

function updateQuestion(){
    //console.log("Showing question " + order[index] + "(" + index + "): " + questions[order[index]]);
    if (currentButtons != null){
        for(var i = 0; i < currentButtons.length; i++){
            currentButtons[i].disabled = false;
        }
    }
    
    currentButtons = [];
    currentAnswers = [];
    answered = 0;
//    document.getElementById("answer_button").style.visibility = "hidden";
    document.getElementById("answer_button").disabled = true;
    
    var img = "url(set_01_images/" + images[order[index]] + ".png";
    document.getElementById("question_image").style.background = img;
    document.getElementById("question_image").style.backgroundSize = "contain";
    document.getElementById("question1").innerHTML = question_surprise[order[index]];
    document.getElementById("question2").innerHTML = question_imagine[order[index]];
    document.getElementById("question3").innerHTML = question_example[order[index]];
    document.getElementById("question4").innerHTML = question_ideal[order[index]];
}

function answer(button, num, score) {
    //console.log(order[index]+" : "+ answers);
    if(currentButtons[num] != null){
        currentButtons[num].disabled = false;
    } else {
        answered++;
    }
    currentButtons[num] = button;
    currentAnswers[num] = score;
    button.disabled = true;
    console.log("true")
    
    if(answered == 4){
//        document.getElementById("answer_button").style.visibility = "visible";
        document.getElementById("answer_button").disabled = false;
    }
}

function submitAnswers(){
    answers[index] = currentAnswers;
    index++;
    if(index < images.length) {
        updateQuestion();
    } else {
        firebase.database().ref(key).update({
            results: answers
        });
        showDebrief();
    }
}

function submit() {
    var age = $("#age").val();
    var gender = $('input[name=gender]:checked').val()
    var ethnicity = $("#ethnicity").val();
    var nationality = $("#nationality").val();
    var education = $("#education").val();
    var occupation = $("#occupation").val();

    firebase.database().ref(key).update({
        "age": age,
        "gender": gender,
        "ethnicity": ethnicity,
        "nationality": nationality,
        "education": education,
        "occupation": occupation
    });
};

$('#demographics_form').submit(function(e) {
    e.preventDefault();
    submit();
    document.getElementById("demographics_form").style.display = "none";
    document.getElementById("instructions").style.display = "block";
});

function showStart(){
    document.getElementById("instructions").style.display = "none";
    document.getElementById("start").style.display = "block";
}

function showQuestions(){
    document.getElementById("start").style.display = "none";
    document.getElementById("questions").style.display = "block";
}

function showDebrief(){
    document.getElementById("questions").style.display = "none";
    document.getElementById("debrief").style.display = "block";
}

function showEnding(){
    document.getElementById("debrief").style.display = "none";
    document.getElementById("ending").style.display = "block";
}

//function testDatabase(){
//    firebase.database().ref("questions").set(questions); 
//    for(j = 0; j < 70; j++){
//        console.log(questions.length);
//        var key = firebase.database().ref().push().key; 
//        firebase.database().ref(key+"/questions").update({
//            [questions[0]]: questions
//        });
//    }
//}