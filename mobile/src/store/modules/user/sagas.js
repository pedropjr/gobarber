/* eslint-disable prefer-object-spread */
import { Alert } from 'react-native';
import { takeLatest, put, call, all } from 'redux-saga/effects';

import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;
    // const profile = { name, email, avatar_id ...(rest.oldPassword ? rest : {}) };
    const profile = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    );
    const response = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso!');
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert('Falhou!', 'Erro ao atualizar o perfil!');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
