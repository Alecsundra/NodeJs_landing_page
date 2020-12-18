function myFunction() {
    var x, result='';
    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;
     console.log(x)
    fetch(`https://api.github.com/users/${x}/repos`)
    .then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data) {
        if (data.length > 0){
            // This is the JSON from our response, retireving a list and taking only the name of the repo
            data.forEach(function (item) {
                result += "<li>" + item.full_name.substring(item.full_name.indexOf("/") + 1);
            });
                // console.log(data[0].full_name);
                document.getElementById("demo").innerHTML = result;
        } else {
            document.getElementById("demo").innerHTML = '<span style="color: #d72323">Oops, this user do not have any public repos or do not exist!</span>';
        }
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });

}