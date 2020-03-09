const remoteURL = "http://localhost:8000"

export default {
  get(id) {
    return fetch(`${remoteURL}/paymenttype/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/paymenttype`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:8000/paymenttypes/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  post(newPayment) {
    return fetch(`${remoteURL}/paymenttype`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPayment)
    }).then(data => data.json())
  },
  update(editedPayment) {
    return fetch(`${remoteURL}/paymenttype/${editedPayment.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedPayment)
    }).then(data => data.json());
  }
}