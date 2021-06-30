

//create new array for new products

let productArray = []


//submit data from backOFFice
    const addProduct = async(event) => {
        event.preventDefault()
        const url = "https://striveschool-api.herokuapp.com/api/product/"
    //DOM for each input field, 
        const newProduct = {
            name =  document.querySelector("#name").value,
            description = document.querySelector("#description").value,
            brand = document.querySelector("#brand").value,
            imageUrl = document.querySelector("#img-src").value,
            price = document.querySelector("#price").value,
        }
    
        let productArray = JSON.stringify(newProduct)
        return productArray
    }


// fetch post 
async function submitProduct(e) {
    try{
        e.preventDefault()
        let product = addProducts()
        let serverRes = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            method: "POST",
            body: product,
            headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNmQyM2IzNTgxNzAwMTVjMjI3NTEiLCJpYXQiOjE2MjUwNTg1OTUsImV4cCI6MTYyNjI2ODE5NX0.OnTMRQNkoQScU0m6lMiK6I521URcekwu0n90K_KScxM",
            "Content-Type": "application/json",
        }
    })

    let serverData = await serverRes.json()
    console.log(serverData)
    document.querySelector('form').reset()
    alert(`${serverData.name} added successfully`)
    } catch(e){
        alert(e)
    }

}

    


//display objects on homepage 
    function displayProduct () { 
        fetch ("https://striveschool-api.herokuapp.com/api/product/", {
            method:"GET",
            headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNmQyM2IzNTgxNzAwMTVjMjI3NTEiLCJpYXQiOjE2MjUwNTg1OTUsImV4cCI6MTYyNjI2ODE5NX0.OnTMRQNkoQScU0m6lMiK6I521URcekwu0n90K_KScxM"
            },
    
            body: JSON.stringify(product)
            })
        .then((res) => res.json())
        .then((data) => {
            let output = `<h2></h2>`;
            console.log(data);
    

//grip for display cards on homepage
            
        data.forEach(function (product) {
            output += `
        <div class="col-12 col-md-5 col-lg-3" id="karta">
        <div class="card" style="">
        <div src="${product.name}"         class="card-img-top"          alt="..."         />
        <div class="card-body">
        <h5 class="card-title">${product.description}</h5>
        <h5 class="card-title">${product.brand}</h5>
        <h5 class="card-title">${product.imageUrl}</h5>
        
        </p><a href="#" class="btn btn-primary">${post.price} </a>
                     </div></div></div>`;
                });
               
    document.getElementById("row1").innerHTML = output;
              });    }
    

