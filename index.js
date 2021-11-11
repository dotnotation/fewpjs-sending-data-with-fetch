function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify ({
            name,
            email
        })
    })
    .then(resp => resp.json())
    .then(object => {
        const body = document.querySelector("body");
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        body.append(ul);
        ul.append(li);
        const userID = object.id;
        li.innerHTML = userID;
    })
    .catch(error => document.body.innerHTML = error.message)
}