var today = new Date();
var year = today.getFullYear();
document.getElementById("year").innerHTML = "Today is " + year + " year"
var week = today.getDay();
let nameOfDay;
switch(week){
    case 0: 
        nameOfDay = 'Sunday';
        break;
    case 1:
        nameOfDay = 'Monday';
        break;
    case 2:
        nameOfDay = 'Tuesday';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        break;
    case 4:
        nameOfDay = 'Thursday';
        break;
    case 5:
        nameOfDay = 'Friday';
        break;
    case 6:
        nameOfDay = 'Saturday';
        break;

}
document.getElementById("week").innerHTML = "Today is " + nameOfDay + " week"
var day = today.getDate();
document.getElementById("day").innerHTML = "Today is " + day + " of month day"
var month = today.getMonth()+1;
let nameOfMonth;
switch (month) {
	case 1 :
		nameOfMonth = "Jan";
		break;
	case 2 :
		nameOfMonth = "Feb";
		break;
	case 3 :
		nameOfMonth = "Mar";
		break;
	case 4 :
		nameOfMonth = "Apr";
		break;
	case 5 :
		nameOfMonth = "May";
		break; 
	case 6 :
		nameOfMonth = "Jun";
		break;
	case 7 :
		nameOfMonth = "Jul";
		break;
	case 8 :
		nameOfMonth = "Avg";
		break;
	case 9 :
		nameOfMonth = "Sep";
		break;
	case 10 :
		nameOfMonth = "Oct";
		break;
	case 11 :
		nameOfMonth = "Nov";
		break;
	case 12 :
		nameOfMonth = "Dec";
		break;
}
document.getElementById("month").innerHTML = "Today is " + nameOfMonth + " month"
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("time").innerHTML = "Today is " + time + " time"

// Calculator
function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
		document.getElementById("result").innerHTML = num1 / num2;
}