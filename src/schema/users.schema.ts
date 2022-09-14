import joi from 'joi';

const schemaUser = joi.object({
  username: joi.string().required().min(3).messages({
    'string.base': '422|"username" must be a string',
    'string.min': '422|"username" length must be at least 3 characters long',
    'string.empty': '400|"username" is required',
    'any.required': '400|"username" is required',
  }),
  classe: joi.string().required().min(3).messages({
    'string.base': '422|"classe" must be a string',
    'string.min': '422|"classe" length must be at least 3 characters long',
    'string.empty': '400|"classe" is required',
    'any.required': '400|"classe" is required',
  }),
  level: joi.number().required().min(1).messages({
    'number.base': '422|"level" must be a number',
    'number.min': '422|"level" must be greater than or equal to 1',
    'number.empty': '400|"level" is required',
    'any.required': '400|"level" is required',
  }),
  password: joi.string().required().min(8).messages({
    'string.base': '422|"password" must be a string',
    'string.min': '422|"password" length must be at least 8 characters long',
    'string.empty': '400|"password" is required',
    'any.required': '400|"password" is required',
  }),
});

export default schemaUser;