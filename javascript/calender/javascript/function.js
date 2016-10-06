var check = true;
var today = new Date();
var nowYear = today.getFullYear();
var nowMonth = today.getMonth();
var nowDate = today.getDate();
var monthSelected = 0; // month seleted option
var yearSelected = 0; // year seleted option

function showCalender(){
	if(check == true){
		showYear();
		showMonth();
		showDate();
		document.getElementById("calender").style.display = "block";
	}else{
		document.getElementById("calender").style.display = "none";
	}
	check = !check;
}

// display list option year
function showYear(){
	var listYear = "";
	var indexYear = 0;
	for(var i = (nowYear - 300); i <= (nowYear + 100); i++){
		if(i == nowYear){
			listYear += '<option selected>' + i + '</option>';
		}else{
			listYear += '<option>' + i + '</option>';
		}
	}
	document.getElementById("list-year").innerHTML = listYear;
}

// display list option month
function showMonth(){
	var listMonth = "";
	for(var i = 0; i <= 11; i++){
		if(i == nowMonth){
			listMonth += '<option selected>' + changeMonth(i) + '</option>';
		}else{
			listMonth += '<option>' + changeMonth(i) + '</option>';
		}
	}
	document.getElementById("list-month").innerHTML = listMonth;
}

function showDate(){
	yearSelected = document.getElementById("list-year").selectedIndex;
	monthSelected = document.getElementById("list-month").selectedIndex;
	var dateCurrent = new Date(changeMonth(monthSelected) + " 1, " + (yearSelected + nowYear -300));
	var dayCurrent = dateCurrent.getDay();	
	var date = 1;	
	for(var i = 0; i < 42; i++){
		if((i >= dayCurrent) && (date <= sumDateOfMonth(monthSelected, yearSelected))){
			if(date == nowDate && monthSelected == nowMonth && (yearSelected + nowYear -300) == nowYear){
				document.getElementsByTagName("td")[i].setAttribute("class", "today");
			}else{
				document.getElementsByTagName("td")[i].setAttribute("class", "day");
			}
			var strDate = "chooseDate(" + date + ", " + (monthSelected + 1) + ", " + (yearSelected + nowYear -300) + ")";
			var attrOnclick = document.createAttribute("onclick");
			attrOnclick.value = strDate;
			document.getElementsByTagName("td")[i].textContent = date;
			document.getElementsByTagName("td")[i].setAttributeNode(attrOnclick);
			date++;
		}else{
			document.getElementsByTagName("td")[i].setAttribute("class", "not-day");
			document.getElementsByTagName("td")[i].textContent = "";
		}
	}
}

function nextYear(){
	try{
		yearSelected = document.getElementById("list-year").selectedIndex;
		 if(yearSelected > 399){
			throw "number of year too big!"
		}else{
			// add attribute selected to option element of year next
			yearSelected += 1;
			document.getElementById("list-year").selectedIndex = yearSelected;
			showDate();
		}
	}catch(err){
		alert(err);
	}
}

function preYear(){
	yearSelected = document.getElementById("list-year").selectedIndex;
	try{
		if(yearSelected <= 0){
			throw "number of year too small!";
		}else{
			// add attribute selected to option element of year next
			yearSelected -= 1;
			document.getElementById("list-year").selectedIndex = yearSelected;
			showDate();
		}
	}catch(err){
		alert(err);
	}
}

function nextMonth(){
	monthSelected = document.getElementById("list-month").selectedIndex;
	yearSelected = document.getElementById("list-year").selectedIndex;
	try{
		// if december next january
		if(monthSelected == 11){
			if(yearSelected < 399){
				monthSelected = 0;
				yearSelected++;
			}else{
				throw "number of year too big!"
			}
		}else{
			monthSelected += 1;
		}
	}catch(err){
		alert(err);
	}
	// add attribute selected to option element of month next
	document.getElementById("list-month").selectedIndex = monthSelected;
	document.getElementById("list-year").selectedIndex = yearSelected;
	showDate();
}

function preMonth(){
	monthSelected = document.getElementById("list-month").selectedIndex;
	yearSelected = document.getElementById("list-year").selectedIndex;
	try{
		// if january previous december
		if(monthSelected == 0){
			if(yearSelected > 0){
				monthSelected = 11;
				yearSelected--;
			}else{
				throw "number of year too small!"
			}
		}else{
			monthSelected -= 1;
		}
	}catch(err){
		alert(err);
	}
	// add attribute selected to option element of month next
	document.getElementById("list-month").selectedIndex = monthSelected;
	document.getElementById("list-year").selectedIndex = yearSelected;
	showDate();
}

// input date
function chooseDate(day, month, year){
	document.getElementById("in-date").value = day + "/" + month + "/" + year;
}

function checkLeadYear(year){
	if(year % 100 == 0){
		if(year % 400 == 0){
			return true;
		}else{
			return false;
		}	
	}else if(year % 4 == 0){
		return true;
	}else{
		return false;
	}
}

function sumDateOfMonth(month, year){
	switch(month){
		case 1:
			if (checkLeadYear(year)){
				return 29;
			}else{
				return 28;
			}
		case 3:	
			return 30;
		case 5:	
			return 30;
		case 8:	
			return 30;
		case 10:	
			return 30;
		default:
			return 31;
	}
}

// change month num --> text 
function changeMonth(num){
		switch (num){
			case 0:
				return "January";
			case 1:
				return "February";
			case 2:
				return "March";
			case 3:
				return "April";
			case 4:
				return "May";
			case 5:
				return "June";
			case 6:
				return "July";
			case 7:
				return "August";
			case 8:
				return "September";
			case 9:
				return "October";
			case 10:
				return "November";
			default:
				return "December";
		}
}
