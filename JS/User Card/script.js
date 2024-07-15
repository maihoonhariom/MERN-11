var data = [
    {
        "id": 1,
        "name": "Alice Johnson",
        "username": "alicej",
        "email": "alice.johnson@example.com",
        "profilePicture": "https://example.com/images/alice.jpg",
        "bio": "Food enthusiast and home cook.",
        "location": "New York, USA"
    },
    {
        "id": 2,
        "name": "Bob Smith",
        "username": "bobsmith",
        "email": "bob.smith@example.com",
        "profilePicture": "https://example.com/images/bob.jpg",
        "bio": "Professional chef with a love for Italian cuisine.",
        "location": "Rome, Italy"
    },
    {
        "id": 3,
        "name": "Catherine Zeta",
        "username": "cathyzet",
        "email": "catherine.zeta@example.com",
        "profilePicture": "https://example.com/images/catherine.jpg",
        "bio": "Pastry chef and dessert lover.",
        "location": "Paris, France"
    },
    {
        "id": 4,
        "name": "David Brown",
        "username": "davidb",
        "email": "david.brown@example.com",
        "profilePicture": "https://example.com/images/david.jpg",
        "bio": "Grill master and BBQ expert.",
        "location": "Austin, USA"
    },
    {
        "id": 5,
        "name": "Eva Green",
        "username": "evagreen",
        "email": "eva.green@example.com",
        "profilePicture": "https://example.com/images/eva.jpg",
        "bio": "Vegan chef and healthy living advocate.",
        "location": "Berlin, Germany"
    },
    {
        "id": 6,
        "name": "Frank Miller",
        "username": "frankm",
        "email": "frank.miller@example.com",
        "profilePicture": "https://example.com/images/frank.jpg",
        "bio": "Seafood specialist and lover of coastal cuisines.",
        "location": "Sydney, Australia"
    },
    {
        "id": 7,
        "name": "Grace Lee",
        "username": "gracelee",
        "email": "grace.lee@example.com",
        "profilePicture": "https://example.com/images/grace.jpg",
        "bio": "Sushi chef and Japanese food aficionado.",
        "location": "Tokyo, Japan"
    },
    {
        "id": 8,
        "name": "Hank Green",
        "username": "hankg",
        "email": "hank.green@example.com",
        "profilePicture": "https://example.com/images/hank.jpg",
        "bio": "Baker and bread artisan.",
        "location": "San Francisco, USA"
    },
    {
        "id": 9,
        "name": "Ivy Taylor",
        "username": "ivyt",
        "email": "ivy.taylor@example.com",
        "profilePicture": "https://example.com/images/ivy.jpg",
        "bio": "Chef with a focus on sustainable cooking.",
        "location": "Vancouver, Canada"
    },
    {
        "id": 10,
        "name": "Jake White",
        "username": "jakew",
        "email": "jake.white@example.com",
        "profilePicture": "https://example.com/images/jake.jpg",
        "bio": "Chef with a passion for fusion cuisine.",
        "location": "Los Angeles, USA"
    }
]

var main = document.querySelector("main");

data.forEach((element ,index)=> {
    main.innerHTML = `<div class="card">
            <div class="id">
                <h4>Id:</h4>
                <p>${data[index].id}</p>
            </div>
            <div class="name">
                <h4>Name:</h4>
                <p>${data[index].name}</p>
            </div>
            <div class="username">
                <h4>UserName:</h4>
                <p>${data[index].username}</p>
            </div>
            <div class="email">
                <h4>Email:</h4>
                <p>${data[index].email}</p>
            </div>
            <div class="profile">
                <h4>Profile Picture:</h4>
                <img src= "${data[index].profilePicture}" alt="">
            </div>
            <div class="bio">
                <h4>Bio:</h4>
                <p>${data[index].bio}</p>
            </div>
            <div class="location">
                <h4>Location:</h4>
                <p>${data[index].location}</p>
            </div>
        </div>`
});