'use strict'

import { createSimpleAction } from 'redux-action-helper'
import { hashHistory } from 'react-router'

export const GET_OPTIONS_GLOBAL = 'GET_OPTIONS_GLOBAL'
export const getOptionsGlobal = createSimpleAction(GET_OPTIONS_GLOBAL)

