$(document).ready(function () {
  var SubscribRange = 0;
  function _addNewSbsciber() {
    SubscribRange++;
    var subscription =
      '<div class="subscriberBox col-12 row"> <div class="col-md-6"><form action="#"> <h5>Information ' +
      SubscribRange +
      "<sup>" +
      _getRange(SubscribRange) +
      '</sup> Assuré</sup></h5> <div class="row"> <div class="col-md-12 row d-inline"> <div class="form-group col-md-12 float-left"> <select name="civilité" id="civite_' +
      SubscribRange +
      '" class="form-control"> <option value="">civilité du client</option> <option value="">Mrs</option> <option value="">Mme</option> <option value="">Mlle</option> </select> </div> </div> </div> <div class="row"> <div class="col-md-12 row d-inline"> <div class="form-group col-md-6 float-left"> <input type="text" id="nom_' +
      SubscribRange +
      '" placeholder="Nom du client" name="nom" class="form-control"> </div> <div class="form-group col-md-6 float-right"> <input type="text" id="prenom_' +
      SubscribRange +
      '" placeholder="Prénom du client" name="prenom" class="form-control"> </div> </div> </div> <div class="row"> <div class="col-md-12 row d-inline"> <div class="form-group col-md-6 float-left"> <select name="civilité" id="situation_' +
      SubscribRange +
      '" class="form-control"> <option value="">Situation</option> <option value="">Résident Français</option> <option value="">Résident UE</option> <option value="">Résident Hors UE</option> </select> </div> <div class="form-group col-md-6 float-right"> <input type="text" id="youngGirlName_' +
      SubscribRange +
      '" placeholder="Nom de jeune fille" name="dob" class="form-control"> </div> </div> </div> <div class="row"> <div class="col-md-12 row d-inline"> <div class="form-group col-md-6 float-left"> <input type="date" id="dob_' +
      SubscribRange +
      '" placeholder="Date de naissance" name="dob" class="form-control"> </div> <div class="form-group col-md-6 float-left"> <input type="text" id="pob_' +
      SubscribRange +
      '" placeholder="Lieu de naissance" name="pob" class="form-control"> </div> </div> </div> <div class="row"> <div class="col-md-12 row d-inline"> <div class="form-group col-md-12 float-left"> <select name="nationalite" id="nationalite_' +
      SubscribRange +
      '" class="form-control"> <option value="">Nationalité</option> <option value="">Résident Français</option> <option value="">Résident UE</option> <option value="">Résident Hors UE</option> </select> </div> </div> </div> <div class="row"> <div class="col-md-12 row d-inline"> <div class="form-group col-md-6 float-left"> <input type="text" id="profession_' +
      SubscribRange +
      '" placeholder="Profession" name="profession" class="form-control"> </div> <div class="form-group col-md-6 float-right"> <input type="text" id="secteur_' +
      SubscribRange +
      '" placeholder="Secteur d\'activité" name="secteur" class="form-control"> </div> </div> </div> </form> </div><div class="col-md-6"> <form action="#"> <h5>Coordonnées ' +
      SubscribRange +
      "<sup>" +
      _getRange(SubscribRange) +
      '</sup> Assuré</sup></h5> <div class="row"> <div class="col-md-12 row d-inline"> <div class="form-group col-md-6 float-left"> <select name="pays" id="pays' +
      SubscribRange +
      '" class="form-control"> <option value="">Pays</option> <option value="">pays 1</option> <option value="">pays 2</option> <option value="">pays 3</option> </select> </div> </div> </div> <div class="row"> <div class="col-md-12 row d-inline"> <div class="form-group col-md-12 float-left"> <input type="text" id="adresse1_' +
      SubscribRange +
      '" placeholder="Adresse 1 du client" name="nom" class="form-control"> </div> </div> </div> <div class="row"> <div class="col-md-12 row d-inline"> <div class="form-group col-md-12 float-left"> <input type="text" id="adresse2_' +
      SubscribRange +
      '" placeholder="Adresse 2 du client" name="nom" class="form-control"> </div> </div> </div> <div class="row"> <div class="col-md-12 row d-inline"> <div class="form-group col-md-12 float-left"> <input type="text" id="adresse3_' +
      SubscribRange +
      '" placeholder="Adresse 3 du client" name="nom" class="form-control"> </div> </div> </div> <div class="row"> <div class="col-md-12 row d-inline"> <div class="form-group col-md-3 float-left"> <input type="text" id="cp_' +
      SubscribRange +
      '" placeholder="CP" name="cp" class="form-control"> </div> <div class="form-group col-md-7 float-left"> <input type="text" id="ville_' +
      SubscribRange +
      '" placeholder="Ville" name="ville" class="form-control"> </div> </div> </div> <div class="row"> <div class="col-md-12 row d-inline"> <div class="form-group col-md-6 float-left"> <input type="text" id="telephone_' +
      SubscribRange +
      '" placeholder="Télephone" name="telephone" class="form-control"> </div> <div class="form-group col-md-6 float-right"> <input type="text" id="portable_' +
      SubscribRange +
      '" placeholder="telephone Mobile" name="portable" class="form-control"> </div> </div> </div> <div class="row"> <div class="col-md-12 row d-inline"> <div class="form-group col-md-12 float-left"> <input type="email" id="mail' +
      SubscribRange +
      '" placeholder="Mail" name="mail" class="form-control"> </div> </div> </form></div> </div>';
    var choiceElt =
      '<div class="form-check"> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"> <label class="form-check-label" for="flexRadioDefault1">' +
      SubscribRange +
      "<sup>" +
      _getRange(SubscribRange) +
      "</sup> Assuré </label> </div>";

    $("#subscribersBox").append(subscription);
    $("#choice").append(choiceElt);

    console.log(SubscribRange);
  }
  $("#newSbcripter").click(function () {
    _addNewSbsciber();
  });
  function _getRange(number) {
    return number === 1 ? "er" : "éme";
  }

  _addNewSbsciber();
});
