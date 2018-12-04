import express from 'express';
import Services from 'src/domain/services';

var router = express.Router();

router.get('*', (req, res) => {
	let services = new Services();
	
	res.json(`routes ${services.get()}`);	
});

export default router;