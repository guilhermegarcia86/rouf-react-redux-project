import axios from 'axios'
import { getOptionsGlobal } from './dogrouf-actions'
import { createAsyncAction } from 'redux-action-helper'

export const apiGetOptionsGlobal = createAsyncAction((dispatch, data) => {
  return axios.get('api/v1/rouf/full', function(_data) {
    return dispatch(getOptionsGlobal(_data.data))
  })
})