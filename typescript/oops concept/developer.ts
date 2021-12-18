import { Employee } from "./employee";

class Developer extends Employee{
    projectName: string;
    constructor(_name, _dept, _id, _projectName){
        super(_name, _dept, _id);
        this.projectName = _projectName;
    }

    writeCode(){
        console.log("writing code");
    }

    getProject(){
        console.log(this.projectName);
    }
}
var dev = new Developer("Dev1", "Bank", 2, "ICICI");
dev.writeCode();