import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {


    @Get() //GET /users or /users?role=value&ute
    findAll(@Query('role') role?:'INTERN'|'ENGINEER'|'ADMIN'){
        return []
    }

    @Get (':id') //GET /users/:id
    findOne(@Param('id') id:string){
        return {id}
    }

    @Post() //POST /users
    create(@Body() user:{}){
        return user
    }

    @Patch(':id') //PATCH /user:id
    update(@Param('id') id:string, @Body() userUpdate:{}){
        return {id, ...userUpdate}
    }
    
    @Delete (':id') //DELETE /user:id
    delete(@Param('id') id:string){
       return {id}
    }
    
}
