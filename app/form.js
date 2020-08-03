function submitForm(e){
	const body = {}

	const type =  e.target.type;
	const phone =  e.target.phone;

	body[type.name] = type.value;
	body[phone.name] = phone.value;
	googleForm(body);
	telegramForm(type.value,  phone.value);

	
	e.preventDefault();
	return false;
}

function googleForm(body){
	$.ajax({
	url: "https://docs.google.com/forms/d/e/1FAIpQLSd_6gAvcTz8gXosFZ-d1CqlH0fX3_0Pv5Ef7RYvYr8p8EjdjA/formResponse",
		data: body,
		type: "POST",
		dataType: "xml",
		success: function () {
			console.log('@@@@@@@@@@@@@@@@@@@@@@')
			alert('form was submitted');
		}
	});
}

function telegramForm(type, phone){
	try {
		const data = {
			user_name: type,
			user_phone: phone,
		};	
		console.log('typetypetype', data)
	$.ajax({
		type: 'POST',
		url: 'telegram.php',
		data: data,
		success: function () {
		alert('form was submitted');
		},
		error: function(xhr, status, errorThrown){
			console.log('error!',xhr);
			console.log('error!',status);
			console.log('error!',errorThrown);
		  }
	});
} catch (error) {
		console.error('11111111', error)
}
}

function telegramForm(type, phone){
	try {
		const data = {
			user_name: type,
			user_phone: phone,
		};	
		console.log('typetypetype', data)
	$.ajax({
		type: 'POST',
		url: 'telegram-watch.php',
		data: data,
		success: function () {
		alert('form was submitted');
		},
		error: function(xhr, status, errorThrown){
			console.log('error!',xhr);
			console.log('error!',status);
			console.log('error!',errorThrown);
		  }
	});
} catch (error) {
		console.error('11111111', error)
}
}