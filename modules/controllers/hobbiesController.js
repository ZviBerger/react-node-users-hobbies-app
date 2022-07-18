import Controller from './controller.js'

export default class HobbiesController extends Controller {
    constructor(){
        super('hobbie')
    }

    validator(data = {}){
        console.log(data)
        return data?.userId && data?.userId !== '' &&
               data?.hobbies &&  Array.isArray(data?.hobbies)
    }
}


 