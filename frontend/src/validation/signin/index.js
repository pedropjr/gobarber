import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('Campo obrigatório.'),
  password: Yup.string().required('Campo obrigatório'),
});
export default schema;
