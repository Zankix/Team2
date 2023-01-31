
import React from 'react'

class userstore{
    constructor(){
        extendedObservable(this, {
            loading: true,
            isLoggedIn: false,
            username: ""
        })
    }
}
export default new userstore();
