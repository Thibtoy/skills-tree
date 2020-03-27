import FarmerQueries from "./query"
import bcrypt from 'bcrypt';
import config from '../../config/server';
import jwt from 'jsonwebtoken';
import SkillQueries from '../Skills/query'
import FarmersSkillsLevelsQueries from '../FarmersSkillsLevels/query'

const refreshToken = (decoded) => {
    let now = new Date();
    let remainingTime = decoded.exp - parseInt(now.getTime().toString().slice(0, 10), 10);
    if (remainingTime < 420) {
        return jwt.sign({logged: true, id:decoded.id}, config.secret, {expiresIn: 900})
    }
    else return false;
}

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
    			.then(data => {
                    let token = jwt.sign({logged: true, id: data.insertId}, config.secret, {expiresIn: 900})
                    SkillQueries.getAllSkills()
                        .then(skills => {
                            skills.forEach(skill => {
                                FarmersSkillsLevelsQueries.createFarmerSkillLevel(data.insertId, skill.id)
                                    .catch(err => reject({ status: 400, payload: {success: false, message: err}}))
                            })
                        })
                        .catch(err => reject({ status: 400, payload: {success: false, message: err}}))
                    resolve({status: 201, token})
                })
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
            		let token = jwt.sign({logged: true, id: farmer.id}, config.secret, {expiresIn: 900})
            		delete farmer.password
            		resolve({ status: 200, token });
            	})
            	.catch(err => reject({ status: 400, payload: {success: false, message: err}}))
    	});
    },

    isAuth: token => {
        return new Promise((resolve, reject) => {
            jwt.verify(token, config.secret, function(err, decoded){
                if (err) reject({ status: 200, payload: {success: false, message: 'Connection expirée, veuillez vous reconnecter pour accéder à cette section'}})
                else {
                    let token = refreshToken(decoded);
                    resolve({status: 200, payload: {success: true, id: decoded.id, token}});
                };
            });
        })
    }
}
//req.cookies.token
export default FarmerServices;