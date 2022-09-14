import joi from 'joi';

const schemaSession = joi.object({
  username: joi.string().min(1).required().error(new Error('"username" is required')),
  password: joi.string().required().error(new Error('"password" is required')),
});

export default schemaSession;