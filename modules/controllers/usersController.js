import Controller from  './controller.js'

export default class UsersController extends Controller {
    constructor(){
        super('user')
    }

    validator(data = {}){
        console.log(data)
        return data?.firstName &&   data?.firstName !== '' &&
               data?.lastName &&   data?.lastName !== ''  &&
               data?.address &&     data?.address !== '' &&
               data?.phoneNumber &&   data?.phoneNumber !== '' 
    }

    findAllWithHobbies(){
        return this.dbModel.findMany({
            include: {
              hobbies: true,
            },
          })
    }
}


 