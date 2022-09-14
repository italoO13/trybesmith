import joi from 'joi';

const schemaProduct = joi.object({
  name: joi.string().required().min(2).messages({
    'string.base': '422|"name" must be a string',
    'string.min': '422|"name" length must be at least 3 characters long',
    'string.empty': '400|"name" is required',
    'any.required': '400|"name" is required',
  }),
  amount: joi.string().required().min(2).messages({
    'string.base': '422|"amount" must be a string',
    'string.min': '422|"amount" length must be at least 3 characters long',
    'string.empty': '400|"amount" is required',
    'any.required': '400|"amount" is required',
  }),
});

export default schemaProduct;