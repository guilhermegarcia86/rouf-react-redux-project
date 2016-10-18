import axios from 'axios'
import { getOptionsGlobal, addDog, editDog, deleteDog } from './dogrouf-actions'
import { createAsyncAction } from 'redux-action-helper'

export const apiGetDogs = createAsyncAction((dispatch, data) => {
  axios.get('api/v1/rouf/full').then((response) => {
    let _data = response.data
    if(_data.status.code == 0){
      return dispatch(getOptionsGlobal(_data.data))
    }
  }).catch((err) => {
    if (err.message === 'Network Error') {
      swal('Verifique sua conexão.', '', 'warning')
      return
    }
    console.error(err.message)
    swal('Falha na operação.', '', 'warning')
  })
})

export const apiAddDog = createAsyncAction((dispatch, data) => {
  axios.post(`api/v1/rouf/dogs`, data).then((response) => {
    let _data = response.data
    if (_data.status.code == 0) {
      data.id = _data.data
      swal(_data.status.text, '', 'success')
      return dispatch(addDog(_data.data))
    }
  }).catch((err) => {
    if (err.message === 'Network Error') {
      swal('Verifique sua conexão', '', 'warning')
    }
    console.error(err.message)
    swal('Falha na operação', '', 'warning')
  })
})

export const apiEditDog = createAsyncAction((dispatch, data) => {
  axios.put(`api/v1/rouf/dogs`).then((response) => {
    let _data = response.data
    if(_data.status.code == 0){
      data.id = _data.data
      swal(_data.status.text, '', 'sucess')
      return dispatch(editDog(_data.data))  
    }    
  }).catch((err) => {
    if(err.message === 'Network Error'){
      swal('Verifique sua conexão', '', 'warning')
    }
    console.error(err.message)
    swal('Falha ma operação', '', 'warning')
  })
})

export const apiDeleteDog = createAsyncAction((dispatch, data) => {
  axios.delete(`api/v1/rouf/dogs/${data.id}`).then((response) => {
    let _data = response.data
    if(_data.status.code == 0){
      data.id = _data.data
      swal(_data.status.text, '', 'sucess')
      return dispatch(deleteDog(_data.data)) 
    }    
  }).catch((err) => {
    if(err.message === 'Network Error'){
      swal('Verifique sua conexão', '', 'warning')
    }
    console.error(err.message)
    swal('Falha ma operação', '', 'warning')
  })
})