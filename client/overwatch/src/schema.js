var yup = require('yup')

export const validation = yup.object().shape({
    platform: yup.string().min(2).max(2).required(),
    region: yup.string().min(2).max(2).required(),
    tag: yup.string().min(4).max(15).required()
});

