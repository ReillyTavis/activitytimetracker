//Variables to access the #userActivity <p> tag, and the userGoal <p> tag
let userActivityName = document.getElementById('userActivity');

let userHours = document.getElementById('userHours');


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='number']").keypress(function(event){
	if (event.which === 13) {
		var userGoal = $(this).val();
		//append the name of the user's activity to the inner html of #userActivity, activity name will display on time-tracking page
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + "<strong>Hours:   </strong>"+ "<br>" + userGoal + "</li>");
//	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + "<strong>HOURS TO SPEND:   </strong>" + "<br>" + desiredHours);
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + "<br>");
		userHours.innerHTML = userGoal;
	}
})
