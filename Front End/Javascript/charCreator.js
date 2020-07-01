// JavaScript source code
$(".classes").hide();
$(".classes > .iconBox").click(function () {
    $(".classes").hide();
});
$(".races > .iconBox").click(function () {
    $(".fwrdbkwd").removeClass("races");
    $(".fwrdbkwd").addClass("classes");
    $(".races").hide();
    $(".classes").show();
});