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
};

// @desc  Get all bootcamps
// @route GET /api/v1/bootcamps
// @access public

export const getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await BootcampModel.find();
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc  get a single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access private

export const getBootcamp = async (req, res) => {
  try {
    const bootcamp = await BootcampModel.findById(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ sucess: false }); // check whether the bootcamp ID exists
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      sucess: false,
    });
  }
};
// @desc  update a bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access private
export const updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootcampModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    } else {
      res.status(200).json({
        sucess: true,
        data: bootcamp,
      });
    }
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc  delete a bootcamps
// @route DELETE /api/v1/bootcamps/:id
// @access private

export const deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootcampModel.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({
        success: false,
      });
    } else {
      res.status(200).json({
        success: true,
        data: req.params.id,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};
