
# GET http://localhost:4444/devs

# POST http://localhost:4444/devs

{
	"github_username":"SmythyCosta", 
	"techs": "Java, Python, Php",
	"latitude": -27.2029052,
	"longitude": -49.6401092
}


{
    "techs": [
        "java",
        "python",
        "php"
    ],
    "_id": "5e2ddbf5f4cd3b11743a5bda",
    "github_username": "SmythyCosta",
    "name": "A Smythy C Costa",
    "avatar_url": "https://avatars3.githubusercontent.com/u/13079258?v=4",
    "bio": "Systems Analyst",
    "location": {
        "coordinates": [
            -49.6401092,
            -27.2029052
        ],
        "_id": "5e2ddbf5f4cd3b11743a5bdb",
        "type": "Point"
    },
    "__v": 0
}


# PUT http://localhost:4444/devs/5e2ddbf5f4cd3b11743a5bda

{
	"github_username":"SmythyCosta", 
	"techs": "Java",
	"latitude": -27.2029052,
	"longitude": -49.6401092
}


# DELETE http://localhost:4444/devs/5e2ddbf5f4cd3b11743a5bda