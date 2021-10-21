const scriptURL = 'https://script.google.com/macros/s/AKfycbzlfb5tM622oJLck3bxF5pCRAubOQvBXJgyZEu2leUupxzzb3WTluVClxMIeyeVqnNIoA/exec'
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
    window.open("../table/table.html")
})