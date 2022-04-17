import BootcampModel from '../models/Bootcamp-model.js';

// @desc  create a bootcamp
// @route POST /api/v1/bootcamps
// @access private

export const createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootcampModel.create(req.body);
    console.log(req.body);
    res.status(201).json({
      sucess: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
  const bootcamp = await BootcampModel.create(req.body);
  console.log(req.body);
  res.status(201).json({
    sucess: true,
    data: bootcamp,
  });
};

// @desc  Get all bootcamps
// @route GET /api/v1/bootcamps
// @access public

export const getBootcamps = (req, res) => {
  res.json({ success: true, message: `create bootcamp ${req.params.id}` });
};

// @desc  get a single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access private

export const getBootcamp = (req, res) => {
  res.json({
    success: true,
    message: 'get a single bootcamp',
  });
};
// @desc  update a bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access private
export const updateBootcamp = (req, res) => {
  res.json({ success: true, message: `update bootcamp ${req.params.id}` });
};

// @desc  delete a bootcamps
// @route DELETE /api/v1/bootcamps/:id
// @access private

export const deleteBootcamp = (req, res) => {
  res.json({ success: true, message: `delete bootcamp ${req.params.id}` });
};
