const remoteURL = "http://localhost:8000"

export default {
    getAll(endpoint) {
        return fetch(`${remoteURL}/${endpoint}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
            }
        })
            .then(response => response.json())
    },
    get(endpoint, id) {
        return fetch(`${remoteURL}/${endpoint}/${id}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
            }
        })
    },
    post(endpoint, newObject) {
        return fetch(`${remoteURL}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
            },
            body: JSON.stringify(newObject)
        }).then(response => response.json())
    }
}