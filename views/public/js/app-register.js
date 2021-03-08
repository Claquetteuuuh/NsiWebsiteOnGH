document
  .getElementById("register-inputs")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    var inputValues = Array.prototype.slice.call(
      this.getElementsByTagName("input")
    );
    
    //creation d'une liste des valeurs du formulaire
    var values = [];

    // boucle pour chaque valeur mettre la valeur dans la liste des valeurs
    inputValues.forEach((value) => {
      values.push(value.value);
    });

    console.log(values);

    //vérification de si les 2 mots de passes sont les même
    if (values[2].length >= 8 & values[2] == values[3]) {
      values.pop(); //retirer le derniere élément pour éviter d'avoir 2passwords identiques

      //creation d'un objet données
      const donnees = {
        username: values[0],
        email: values[1],
        password: values[2]
      };

      //connection au port du backend pour y envoyer le formulaire
      fetch("http://claquetteuuuh.alwaysdata.net/signup", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(donnees),
      })
      .then(res => res.text())
      .then(data =>console.log(data))
      .then(alert('vous etes engeristré'))
      .then(window.open('/login'), window.close())
      .catch(err => console.log(err))
    
      //les deux password ne sont pas identiques
    } else {
      alert("les mots de passe ne sont pas identiques ! ou il ne fait pas 8 caracteres");
    }
  });
