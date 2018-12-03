import express from 'express';
import services from '../services';

var router = express.Router();

router.get('*', (req, res) => {
	res.json(`routes ${services}`);	
});

export default router;