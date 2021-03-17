db = db.getSiblingDB('local-travel-app-db')

db.createUser(
  {
    user: "localuser",
    pwd: "qwerty123",
    roles: [
        {
            role: "readWrite",
            db: "local-travel-app-db"
        }
    ]
  }
);