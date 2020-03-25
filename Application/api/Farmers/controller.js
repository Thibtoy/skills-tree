import FarmerServices from './service';

const FarmerController = {
    register : (req, res) => {
    	FarmerServices.register(req.body)
    		.then(response => {res.status(response.status).send(response)})
    		.catch( err => res.status(err.status).send(err));
    },

    authenticate: (req, res) => {
    	FarmerServices.authenticate(req.body)
    		.then(response => res.status(response.status).send(response))
    		.catch( err => res.status(err.status).send(err));
    }
}

export default FarmerController;