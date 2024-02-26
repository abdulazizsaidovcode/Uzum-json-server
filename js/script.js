fetch("http://localhost:3000/category/1")
    .then(res => {
        return res.json()
    })
    .then(ress => {
        console.log(ress.categarysType);
    }).catch((err) => {
        console.error(err)
    })