var yup = require('yup')

export const validation = yup.object().shape({
    platform: yup.string().min(2).max(2).required(),
    region: yup.string().min(2).max(2).required(),
    tag: yup.string().min(4).max(15).required()
});

export const inviteValidation = yup.object().shape({
  to: yup.string().min(8).email().max(25).required(),
  subject: yup.string().min(4).max(25).required(),
  text: yup.string().min(4).max(200).required()
});

