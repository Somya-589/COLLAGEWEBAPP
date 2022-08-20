var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
function start(){
    Recognition.start();
}
Recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript;
    if(content=="selfie"){
        speak();
    }
}
function speak(){
    var synth=window.speechSynthesis;
    Speach = "Taking your selfie in 5 Seconds";
    var uttering = new SpeechSynthesisUtterance(Speach);
    synth.speak(uttering);
    Webcam.attach(camera);
    setTimeout(function(){
        img_id = "selfie1";
        takesnapshot();
    },5000)
    setTimeout(function(){
        img_id = "selfie2";
        takesnapshot();
    },10000)
    setTimeout(function(){
        img_id = "selfie3";
        takesnapshot();
    },15000)
};
var camera = document.getElementById("camera");
Webcam.set({
    width:350,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});
function takesnapshot(){
    Webcam.snap(function(srcofimg){
        if(img_id=="selfie1"){
            document.getElementById("pic1").src=srcofimg;
        }
        if(img_id=="selfie2"){
            document.getElementById("pic2").src=srcofimg;
        }
        if(img_id=="selfie3"){
            document.getElementById("pic3").src=srcofimg;
        }
    });
}
