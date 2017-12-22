const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).json({
        	message: 'Order were fetched'
        });
});

router.post('/', (req, res, next) => {
	    res.status(201).json({
	            message: 'Order created'
        });
});

router.get('/:orderId', (req, res, next) => {
	const id = req.params.productId;
	if (id === 'special'){
		res.status(200).json({
			message: 'Order details',
			orderId: req.params.orderId
		});
	}else {
		res.status(200).json({
			message: 'you passed an ID'
		});
	}
});

router.patch('/:orderId', (req, res, next) => {
	res.status(200).json({
        	message: 'updated order'
        });
});


router.delete('/:orderId', (req, res, next) => {
	res.status(200).json({
        	message: 'deleted order'
        });
});

module.exports = router;
