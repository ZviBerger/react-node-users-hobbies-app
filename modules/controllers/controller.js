import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default class Controller {

    constructor(model){
        try {
            this.dbModel = prisma[model];
            if(!this.dbModel) throw Error('There is no such a model!')
        } catch (error) {
            console.log(error)
        }
    }
    /**
     * Override this method
     * @param {*} data 
     * @returns 
     */
    validator(data){
        return true
    }
    
    findById(id, idColName){
        try {
            return this.dbModel.findUnique({
                where: {
                  [idColName? idColName : 'id']: id,
                },
              })
        } catch (error) {
            console.log(error)
        }

    } 
    findAll(){
        return this.dbModel.findMany()
    }

    async create(data = {}){
        console.log('Creating')
        if(!this.validator(data)) return false
        try {
            const entity = await this.dbModel.create({data})
              return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async update(where = {}, data){
       try {
        await this.dbModel.update({
            where,
            data
          })
       } catch (error) {
        console.log(error)
       }
    }

    /**
     * trying to update, if not succeed - creating
     * @param {*} where 
     * @param {*} data 
     */
    async createOrUpdate(where = {}, data){
        if(!this.validator(data)) return false
        try {
             await this.dbModel.upsert({
                where,
                update: data,
                create: data,
              })
            return true
        } catch (error) {
            return false
        }
    }

    deleteById(id, idColName){
        try {
            return this.dbModel.delete({
                where: {
                  [idColName? idColName : 'id']: id,
                },
              })
        } catch (error) {
            console.log(error)
        }
    }

}