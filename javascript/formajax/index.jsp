<!DOCTYPE html>
<html lang=en>
<head>
<meta charset="UTF-8" />
<title>form Ajax</title>
<link rel="stylesheet" type="text/css" href="css/style.css" />
<script type="text/javascript" src="javascript/function.js"></script>
</head>
<body>
	<form action="ServerFormAjax" method="Post">
		<table>
			<tr>
				<td class="table-item"><p>Username:</p></td>
				<td><input type="text" id="user-name" onblur="checkUsername()" name="user"/></td>
				<td><p class="error" id="error-user"></p></td>
			</tr>
			<tr>
				<td class="table-item"><p>Password:</p></td>
				<td><input type="password" id="password" onblur="checkPassword()" name="pass"/></td>
				<td><p class="error" id="error-password"></p></td>
			</tr>
			<tr>
				<td class="table-item"><p>Email:</p></td>
				<td><input type="text" id="email" onblur="checkEmail()" name="email"/></td>
				<td><p class="error" id="error-email"></p></td>
			</tr>
			<tr>
				<td class="table-item"><p>Birthday:</p></td>
				<td><input type="text" class="input-date" id="in-date" /> <img
					class="icon-date" src="img/icon.jpg" alt="icon-date"
					onclick="showCalender()" />
					<table id="calender" class="table-calender">
						<tr>
							<th class="menu-item colum-calender" onclick="preYear()">&#x21C7;</th>
							<th class="menu-item colum-calender" onclick="preMonth()">&larr;</th>
							<th class="menu-item colum-calender" colspan="2"><select
								id="list-month" onclick="showDate()"></select></th>
							<th class="menu-item colum-calender"><select id="list-year"
								onclick="showDate()"></select></th>
							<th class="menu-item colum-calender" onclick="nextMonth()">&rarr;</th>
							<th class="menu-item colum-calender" onclick="nextYear()">&#x21C9;</th>
						</tr>
						<tr id="list-date">
							<th class="weekdays colum-calender">Sun</th>
							<th class="weekdays colum-calender">Mon</th>
							<th class="weekdays colum-calender">Tue</th>
							<th class="weekdays colum-calender">Wed</th>
							<th class="weekdays colum-calender">Thu</th>
							<th class="weekdays colum-calender">Fri</th>
							<th class="weekdays colum-calender">Sat</th>
						</tr>
						<tr>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
						</tr>
						<tr>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
						</tr>
						<tr>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
						</tr>
						<tr>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
						</tr>
						<tr>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
						</tr>
						<tr>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
							<td class="not-day colum-calender"></td>
						</tr>
					</table></td>
			</tr>
			<tr>
				<td></td>
				<td><button type="submit" class="button">Submit</button>
					<button type="reset" class="button">Reset</button></td>
			</tr>
		</table>
		<div id="result">
			<p>Check Username: ${result}</p>
		</div>
	</form>
</body>
</html>