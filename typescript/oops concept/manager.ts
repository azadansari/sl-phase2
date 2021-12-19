import { DependencyResolver } from "./dependency-resolver";
import { IDeveloper } from "./IDeveloper";


class Manager{

    developer: IDeveloper;

    // call service and request to get instance for IDeveloper

    scheduleMeeting(){
        this.developer = DependencyResolver.resolveDeveloper("1", "Xyz", "IT", "Banking");
        console.log("Schedule a meeting");
        this.developer.invite();
    }
}

var manager = new Manager();
manager.scheduleMeeting();