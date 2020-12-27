var refineResults = true;

function Add_Search_Param(param, value, append, forceRefine) {
	if (param == 'pricerange') {
		value = value.split('-');
		Add_Search_Param('minprice', value[0]);
		Add_Search_Param('maxprice', value[1], append, forceRefine);
		return;
	}
	if (SearchParams.indexOf(param + '=') != -1) {
		if (append) {
			SearchParams = SearchParams.replace(new RegExp(param + '=([^&]*)'), param + '=$1' + escape(value));
		}
		else {
			SearchParams = SearchParams.replace(new RegExp(param + '=([^&]*)'), param + '=' + escape(value));
		}
	}
	else {
		SearchParams = SearchParams + '&' + param + '=' + escape(value);
	}
	if (param != 'page') {
		Add_Search_Param('page', 1);
	}
	if (forceRefine) {
		Refine();
	}
}

function Refine() {
	if (SearchParams.substr(0, 1) == '&') {
		SearchParams = SearchParams.substr(1);
	}
	location.href = location.pathname + '?' + SearchParams;
	return false;
}

function OpenNewWindow(url, width, height) {
	window.open(url, null, 'top=10,left=10,toolbar=no,titlebar=no,location=no,directories=no,status=no,menubar=no,resizable=1,scrollbars=1,width=' + width + ',height=' + height)
}

function OnSubmitSearchForm(event, form) {
	var additionalSearch = v$('additionalsearch');
	if (additionalSearch) {
		if (additionalSearch.value != 'Search Within') {
			Add_Search_Param('search', ' ' + additionalSearch.value, true);
		}
	}

	if (refineResults) {
		CancelEvent(event);
		return Refine();
	}
	else {
		return true;
	}
}

function OnKeyDownPageInputBox(evt, inputBox) {
	if (IsReturnKey(evt)) {
		Add_Search_Param('page', inputBox.value);
		Refine();
		return false;
	}
}
