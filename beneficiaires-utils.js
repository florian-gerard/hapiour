
/*
 * application : MesDocteurs ou vyv-avantages ...
 * authSrv : https://passconnect.groupe-vyv.fr ou https://passconnect-preprod.groupe-vyv.fr 
 * idpCode : harmonie-mutuelle, mgen, mgefi, vyv-umg, * mnt, ... 
 * nomBeneficiaire : Nom de la personne qui veut utiliser l'application
 * prenomBeneficiaire : prenom de la personne qui veut utiliser l'application
 * emailBeneficiaire : email de la personne qui veut utiliser l'application ou null
 * birthDateBeneficiaire : yyyy-mm-dd facultatif
 * cguconsent : 0 ou 1 factultatif pour mes docteurs
 * storageconsent : 0 ou 1 factultatif pour mes docteurs
 * oldIdBeneficiaireMesDocteurs: ID Mes Docteurs du beneficiaire facultatif
 * oldIdAssureMesDocteurs: ID Mes Docteurs de l'assurÃ© facultatif 
 * mesdocteursOrganisme: organime mes docteurs facultatif
 * mesdocteursNbTeleconsultMois: nb de tÃ©lÃ©consultation mensuelle facultatif
 * mesdocteursParentid: parent id mes docteurs facultatif
 */
function openApplicationPourUnBeneficiaire(application, authSrv, idpCode, nomBeneficiaire, prenomBeneficiaire, emailBeneficiaire,
		birthDateBeneficiaire, cguconsent, storageconsent, oldIdBeneficiaireMesDocteurs, oldIdAssureMesDocteurs, mesdocteursOrganisme,
		mesdocteursNbTeleconsultMois, mesdocteursParentid) {
	var urlApiBeneficiaire = authSrv + "/auth-beneficiaires/api/login/beneficiaire";

	var	form = document.createElement("form");
	form.setAttribute("acceptCharset", document.inputEncoding );
	form.setAttribute("charset", document.inputEncoding );
	form.setAttribute("method", "post");
	form.setAttribute("action", urlApiBeneficiaire);

	form.setAttribute("target", application);
	var params = {
		nom_beneficiaire : nomBeneficiaire,
		prenom_beneficiaire : prenomBeneficiaire,
		email_beneficiaire : emailBeneficiaire,
		birthdate_beneficiaire : birthDateBeneficiaire,
		oldIdBeneficiaireMesDocteurs : oldIdBeneficiaireMesDocteurs,
		oldIdAssureMesDocteurs : oldIdAssureMesDocteurs,
		kc_idp_hint : idpCode,
		idpCode : idpCode,
		application : application,
		cguconsent : cguconsent,
		storageconsent : storageconsent,
		mesdocteursOrganisme : mesdocteursOrganisme,
		mesdocteursNbTeleconsultMois : mesdocteursNbTeleconsultMois,
		mesdocteursParentid : mesdocteursParentid
	};

	for ( var key in params) {
		if (params.hasOwnProperty(key)) {
			var value = params[key];
			if ((value !== undefined) && (value !== null)) {
				var hiddenField = document.createElement("input");
				hiddenField.setAttribute("type", "hidden");
				hiddenField.setAttribute("name", key);
				hiddenField.setAttribute("value", value);
				form.appendChild(hiddenField);
				document.body.appendChild(form);
			}
		}
	}

	window.open('', application);
	form.submit();
	form.parentNode.removeChild(form);
}


/*
 * application : MesDocteurs ou vyv-avantages ... authSrv :
 * https://passconnect.groupe-vyv.fr ou
 * https://passconnect-preprod.groupe-vyv.fr idpCode : harmonie-mutuelle, mgen,
 * mgefi, vyv-umg, * mnt, ... cguconsent : 0 ou 1 factultatif pour mes docteurs
 * storageconsent : 0 ou 1 factultatif pour mes docteurs
 * oldIdBeneficiaireMesDocteurs: ID Mes Docteurs du beneficiaire facultatif
 * mesdocteursOrganisme: organime mes docteurs facultatif
 * mesdocteursNbTeleconsultMois: nb de tÃ©lÃ©consultation mensuelle facultatif
 * mesdocteursParentid: parent id mes docteurs facultatif
 */
function openApplication(application, authSrv, idpCode, cguconsent, storageconsent, oldIdBeneficiaireMesDocteurs, mesdocteursOrganisme,
		mesdocteursNbTeleconsultMois, mesdocteursParentid) {
	var urlApiBeneficiaire = authSrv + "/auth-beneficiaires/api/login";

	var	form = document.createElement("form");
	form.setAttribute("acceptCharset", document.inputEncoding );
	form.setAttribute("charset", document.inputEncoding );

	form.setAttribute("method", "post");
	form.setAttribute("action", urlApiBeneficiaire);

	form.setAttribute("target", application);
	var params = {
		kc_idp_hint : idpCode,
		idpCode : idpCode,
		application : application,
		oldIdBeneficiaireMesDocteurs : oldIdBeneficiaireMesDocteurs,
		cguconsent : cguconsent,
		storageconsent : storageconsent,
		mesdocteursOrganisme : mesdocteursOrganisme,
		mesdocteursNbTeleconsultMois : mesdocteursNbTeleconsultMois,
		mesdocteursParentid : mesdocteursParentid
	};

	for ( var key in params) {
		if (params.hasOwnProperty(key)) {
			var value = params[key];
			if ((value !== undefined) && (value !== null)) {
				var hiddenField = document.createElement("input");
				hiddenField.setAttribute("type", "hidden");
				hiddenField.setAttribute("name", key);
				hiddenField.setAttribute("value", value);
				form.appendChild(hiddenField);
				document.body.appendChild(form);
			}
		}
	}

	window.open('', application);
	form.submit();
	form.parentNode.removeChild(form);

}
