import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('Campo obrigatório.'),
  password: Yup.string()
    .required('Campo obrigatório')
    .min(6, 'Mínimo de 6 caracteres.'),
});
export default schema;
