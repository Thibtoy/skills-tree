import FarmerQueries from "./query"
import bcrypt from 'bcrypt';
import config from '../../config/server';
import jwt from 'jsonwebtoken';

const FarmerServices = {
    register: body => {
    	return new Promise((resolve, reject) => {
    		const {email, firstName, lastName, password} = body;
    		if (typeof email !== "string" || typeof firstName !== "string" 
                || typeof lastName !== "string" || typeof password !== "string") 
            	reject({ status: 400, payload: { success: false, message: "All fields are required and must be a string type"}});

    		bcrypt.genSalt()
    			.then(salt => bcrypt.hash(password, salt))
    			.then(hashedPassword => FarmerQueries.register({email, firstName, lastName, password: hashedPassword}))
    			.then(message => resolve({status: 201, payload: { success: true, message}}))
    			.catch(err => reject({ status: 400, payload: {success: false, message: err}}))
    	});
    },

    authenticate:  body => {
    	return new Promise((resolve, reject) => {
    		const {email, password} = body;
    		if (typeof email !== "string" || typeof password !== "string") 
            	reject({ status: 400, payload: { success: false, message: "All fields are required and must be a string type"}});
            FarmerQueries.getFarmer(body)
            	.then(async farmer => {
            		if (!await bcrypt.compare(password, farmer.password)) 
            			reject({status: 400, payload:{success: false, message: "Incorrect password"}});
            		let token = jwt.sign({id: farmer.id}, config.secret)
            		delete farmer.password
            		resolve({ status: 200, payload: { success: true, message: 'Farmer connection', data:{ token, farmer } } });
            	})
            	.catch(err => reject({ status: 400, payload: {success: false, message: err}}))
    	});
    }

}

export default FarmerServices;