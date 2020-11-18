import { CreateUserInput, stringToUserRole } from "../../model/User";

async createUser(user) {

    const idGenerator = idGenerator();
    const hashManager = hashManager();
    const userDatabase = userDatabase();
    const authenticator = authenticator();

    try{

        const input: CreateUserInput = {
            name: req.body.name,
            role: stringToUserRole(req.body.role)
        }

        if(!user.name || !user.email || !user.password || !user.role){
            throw new Error("Please fill all the fields");
        }

        if(user.email.indexOf("@") === -1){
            throw new Error("Invalid Email");
        }

        if(user.password.length < 6){
            throw new Error("Password must have at least 6 characters");
        }

        const id = idGenerator.generate();
        const hashPassword = await hashManager.hash(user.password);
        await userDatabase.createUser(id, user.email, user.name, hashPassword, user.role);
        const token = authenticator.generateToken({id, role});
        
        return token;

    }catch(error){
        throw new Error( error.message || "Error creating user. Please check your system administrator.");
    }
}