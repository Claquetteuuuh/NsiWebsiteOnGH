document.getElementById("connect-inputs").addEventListener("submit", function(e)
{
    e.preventDefault();
    var donnees = this.getElementsByTagName("input");
    var inputValues = Array.prototype.slice.call(
        this.getElementsByTagName('input')
    )
    
    var values = [];

    inputValues.forEach((value)=>{
        values.push(value.value);
    });

    console.log(values);

    if (donnees[1].value != '' & donnees[0].value != ''){
        const donnees = {
            email : values[0],
            password : values[1]
        };

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(donnees),
        })
        .then(res=> res.text())
        .then(data => console.log(data))
        .then(alert('Vous etes connecté'))
        .then(window.open('/javascript'), window.close())
        .catch(err => console.log(err))

    }else{
        console.log('aucun text n\'as été mis')
    }
    
});