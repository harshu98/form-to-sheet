const scriptURL = 'https://script.google.com/macros/s/AKfycby69j_xt6fDjgMqksKto9tqN_TQiP_5Tp7qv1OgfF8y/dev'
const formbody = document.querySelector('#google-sheet');
const getData = document.querySelector("#getData");

formbody.addEventListener('submit', (e) => {
    e.preventDefault()
    let formData = new FormData(formbody);
    let arrayOfFormData = Object.fromEntries(formData);
    let Name = arrayOfFormData['Name'];
    let Email = arrayOfFormData['Email'];
    let Phone = arrayOfFormData['Phone'];
    let Address = arrayOfFormData['Address'];
    var DestructredFormData = {
        Name: Name,
        Email: Email,
        Phone: Phone,
        Address: Address,
    }
    fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(DestructredFormData),
            mode: "no-cors",
            headers: {
                contentType: "application/json"
            }
        }).then(response => { alert("successfull") })
        .catch(error => alert('Error!', error));
    formbody.reset();
})
getData.addEventListener('click', () => {
    fetch(scriptURL, {
            method: 'GET',
        }).then(response => response.json())
        .then(res => {
            createTable(res);
        })
        .catch(error => console.log(error))
})