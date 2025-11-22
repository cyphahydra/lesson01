import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id":1,
            "name":"Edem",
            "email":"edem@gamil.com",
            "role":"INTERN"
        },
        {
            "id":2,
            "name":"Ken",
            "email":"ken@gamil.com",
            "role":"ADMIN"
        },
        {
            "id":1,
            "name":"Brignt",
            "email":"bright@gamil.com",
            "role":"ENGINEER"
        },
        {
            "id":1,
            "name":"Ben",
            "email":"ben@gamil.com",
            "role":"INTERN"
        },
        {
            "id":1,
            "name":"Emma",
            "email":"emma@gamil.com",
            "role":"ENGINEER"
        },
        {
            "id":1,
            "name":"Sharp",
            "email":"sharp@gamil.com",
            "role":"ADMIN"
        }
    ]

    findAll(role?:'INTERN'|'ENGINEER'|'ADMIN'){
        if(role){
            return this.users.filter(user=>user.role ===role)
        }
        return this.users
    }

    findOne(id:number){
        const user = this.users.find(user => user.id ===id)
        return user
    }

    create(user:{name:string, email:string, role:'INTERN'|'ENGINEER'|'ADMIN'}){
        const usersByHighestId = [...this.users].sort((a,b)=>b.id= a.id)
        const newUser= {
             id: usersByHighestId[0].id+1,
              ...user
        }
        this.push(newUser)
        return newUser
    }

    update(id:number, updatedUser:{name?:string, email?:string, role?:'INTERN'|'ENGINEER'|'ADMIN'}){
        this.users = this.users.map(user=> {
            if(user.id===id){
                return {...user, ...updatedUser}
            }
            return user
        })
        return this.findOne(id)
    }

    delete(id:number){
        const removeUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !==id)
        return removeUser
    }

}
