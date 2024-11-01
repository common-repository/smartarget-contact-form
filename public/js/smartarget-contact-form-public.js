function init_contact_form (hash)
{
	if (!hash)
	{
		return;
	}

	insertJs_contact_form(hash);
}

function insertJs_contact_form (hash)
{
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = `https://smartarget.online/loader.js?ver=${Math.random()}&u=${hash}&source=wordpress_contact_form`;
	document.head.appendChild(script);
}

init_contact_form(smartarget_contact_form_params.hash);
