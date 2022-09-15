import joi from 'joi';

const schemaOrder = joi.object({
  productsIds: joi.array().required().min(1).messages({
    'array.base': '422|"productsIds" must be an array',
    'array.min': '422|"productsIds" must include only numbers',
    'string.empty': '400|"productsIds" is required',
    'any.required': '400|"productsIds" is required',
  }),
});

export default schemaOrder;