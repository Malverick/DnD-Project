// JavaScript source code

/* debug to see what is being clicked
$("div").click(function(){
console.log($(this).attr("class"));
});
*/

// Switch between choosing your Class or Race
let isClass = false;
let raceClassChosen = false;
$(".classes").hide();
$(".iconBox").click(function () {
    switchClassRace();
});
function switchClassRace(){
	if (isClass == true){
    	$(".classes").hide();
    	isClass = false;
    	raceClassChosen= true;
	} else {
		$(".races").hide();
    	$(".classes").show();
    	isClass = true;
	}
}