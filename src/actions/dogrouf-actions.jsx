'use strict'

import { createSimpleAction } from 'redux-action-helper'
import { hashHistory } from 'react-router'

export const GET_OPTIONS_GLOBAL = 'GET_OPTIONS_GLOBAL'
export const getOptionsGlobal = createSimpleAction(GET_OPTIONS_GLOBAL)
export const ADD_DOG = 'ADD_DOG'
export const addDog = createSimpleAction(ADD_DOG)
export const EDT_DOG = 'EDT_DOG'
export const editDog = createSimpleAction(EDT_DOG)
export const DEL_DOG = 'DEL_DOG'
export const deleteDog = createSimpleAction(DEL_DOG)