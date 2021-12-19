import { BaseModel } from "./basemodel";



export class ApiService<Xyz extends BaseModel>{

    add(record: Xyz){
        // calling API to add
    }

    delete(record: Xyz){
        // calling API to delete
    }

    upate(record: Xyz){
        // calling API to upate
    }
}