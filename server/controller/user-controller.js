import User from "../model/user-schema.js"
import bcrypt from 'bcrypt'

export const signupUser = async (request, response) => {
    try {
        const user = request.body;

        const existUser = await User.findOne({email: user.email});
        
        if(existUser) {
            return response.status(400).json({ message: 'user already exist!' });
        }
        user.password = bcrypt.hashSync(user.password, 10);

        const newUser = await new User(user);
        await newUser.save();
        return response.status(200).json(newUser);
    } catch (error) {
        return response.status(400).json({ message: error.message });
    }
}