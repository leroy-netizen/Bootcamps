import express from 'express';

const router = express.Router();

//import controllers
import {
  getBootcamp,
  deleteBootcamp,
  getBootcamps,
  updateBootcamp,
  createBootcamp,
} from '../controllers/bootcamp-controllers.js';

// -------------routes-------------

//`````POST``````
// router.post('/', createBootcamp);

//`````GET``````
// router.get('/', getBootcamps);

// get a single bootcamp
// router.get('/:id', getBootcamp);

//`````update{PUT}``````
// router.put('/:id', updateBootcamp);

//`````DELETE``````
// router.delete('/:id', deleteBootcamp);

router.route('/').get(getBootcamps).post(createBootcamp);
router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

export default router;
