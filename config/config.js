module.exports = {
    development:{
        app:{
            name:'DashDog'
        },
        db:'mongodb://localhost/dashdog',
        google:{
            clientID:process.env.google_clientID, clientSecret:process.env.google_clientSecret, callbackURL:'http://localhost:5000/auth/google/callback'
        }
    },
    production:{
        app:{
            name:'DashDog'
        },
        db:process.env.MONGOLAB_URI || process.env.MONGOHQ_URL,
        google:{
            clientID:process.env.google_clientID, clientSecret:process.env.google_clientSecret, callbackURL:'http://www.dashdog.herokuapp.com/auth/google/callback'
        }

    }
}
