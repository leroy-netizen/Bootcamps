// @desc  Get all bootcamps
// @route GET /api/v1/bootcamps
// @access public

export const getBootcamps = (req, res) => {
  res.json({ success: true, message: 'create a bootcamp' });
};

// @desc  get single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access private

export const getBootcamp = (req, res) => {
  res.json({
    success: true,
    message: 'get a single bootcamp',
  });
};
// @desc  create a bootcamp
// @route POST /api/v1/bootcamps
// @access private

export const createBootcamp = (req, res) => {
  res.json({ success: true, message: 'create a bootcamp' });
};
// @desc  update a bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access private
export const updateBootcamp = (req, res) => {
  res.json({ success: true, message: 'update bootcamp' });
};

// @desc  delete a bootcamps
// @route DELETE /api/v1/bootcamps/:id
// @access private

export const deleteBootcamp = (req, res) => {
  res.json({ success: true, message: `delete bootcamp` });
};
