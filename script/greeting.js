var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow >= 18 && hourNow < 22){
  greeting = 'Good Evening, our Last load time is 8:30pm <script>$("#greeting").css("background-color","#ffcb66");</script>';
} else if (hourNow >= 22){
  greeting = 'R7Laundry is now closed, see you tommorow at 7:30am <script>$("#greeting").css("background-color","#ff8080");</script>'
} else if (hourNow >= 12) {
    greeting = 'Good afternoon, R7Laundry is open!'
} else if (hourNow >= 0 && hourNow <= 7){
  greeting = 'Good morning, R7Laundry will be open at 7:30am <script>$("#greeting").css("background-color","#ffcb66");</script>';
} else if (hourNow >= 8){
  greeting = 'Good morning, R7Laundry is now open!';
}else{
  greeting = 'Welcome we open at 7:30am and last load is at 8:30pm'
}
document.write('<div id="greeting"> <script> $(document).ready(function(){$("#greeting").slideDown(1000); $("#greeting").click(function(){$("#greeting").slideUp(800)})});</script><p>X &nbsp;&nbsp' + greeting + '</p></div>');
