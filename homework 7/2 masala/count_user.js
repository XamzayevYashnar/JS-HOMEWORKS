class User {

    static count = 0;

    static getUserCount(){
        User.count += 1
        console.log(User.count)
    }

    constructor (name){
        this.name = name;
    }
}

const user = new User('yashnar')
User.getUserCount()