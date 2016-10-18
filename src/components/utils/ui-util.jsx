import React, {PropTypes} from 'react'
import classnames from 'classnames'
import JsUtils from './js-utils'

/* Options */
export const Options = (id, value, capa, list) => {
  let _list = list ? list : [],
  _options = _list.map( (item, idx) => {
    if (_.isObject(item))
      return <option key={idx + 1} value={item[id]}>{item[value]}</option>
    return <option key={idx + 1} value={item}>{item}</option>
  })
  if (capa)
    _options.unshift(<option key={0} value="">{capa}</option>)
  return _options
}

/* Row */
export const Row = ({children, isAnimated, className}) => {
  let _class = classnames((isAnimated ? "row animated fadeInRight" : "row"), className)
  return (<div className={_class}>{children}</div>)
}

/* Column */
export const Column = ({col, children, className}) => {
  let _class = classnames((col ? `col col-md-${col} col-lg-${col}` : "col col-md-12 col-lg-12"), className)
  return (<div className={_class}>{children}</div>)
}

/* Alert */
export const Alert = (props) => {
  return (
    <div className="alert alert-warning">
      <strong>ATENÇÃO: {props.message}</strong>
    </div>
  )
}

/* Note */
export const Note = (props) => {
  let _style= props.required? {color:'red'} : null,
      required = <label style={props.required? {color:'red'} : ''}>*</label>
  return (<div className="note">{props.text}{props.required? required: null}</div>)
}

/* Section */
export const Section = ({col, children, className}) => {
  let classes = classnames({[`col col-${col}`]: col}, className)
  return (
    <section className={classes}>{children}</section>
  )
}

/* FormGroup */
export const FormGroup = ({children, className}) => {
  let classes = classnames('form-group', className)
  return (<div className={classes}>{children}</div>)
}

/* Ibox */
export const Ibox = React.createClass({
  getDefaultProps() {
    return { hasFooter: false, title: '', footerActionTitle: '', disabled: false }
  },

  componentDidMount() {
    const { disabled } = this.props

    if(disabled) {
      JsUtils.disableChildren(this.refs.iboxContent)
    }
  },

  renderFooter() {
    return (
      <div className="ibox float-e-margins">
        <div className="ibox-title"><h2>{this.props.title}</h2></div>
        <div className="ibox-content" ref="iboxContent">{this.props.children}</div>
        <div className="ibox-footer">
          <a href="#" onClick={this.props.onFooterAction}>
            {this.props.footerActionTitle}
          </a>
        </div>
      </div>
    )
  },

  renderWithoutFooter() {
    return (
      <div className="ibox float-e-margins">
        <div className="ibox-title"><h2>{this.props.title}</h2></div>
        <div className="ibox-content" ref="iboxContent">{this.props.children}</div>
      </div>
    )
  },

  render() {
    if (this.props.hasFooter)
      return this.renderFooter()
    return this.renderWithoutFooter()
  }
})

/* EditButton */
export const EditButton = ({onEdit}) => {
  return (<button type="button"
    className="btn btn-sm btn-primary pull-right"
    onClick={onEdit}>
    <i className="fa fa-pencil fa-fw"></i>
    Editar
  </button>)
}

/* SubmitButton */
export const SubmitButton = ({className, label, disabled, icon }) => {
  let classes = classnames('btn btn-sm btn-primary', className)

  const iconElem = icon ? <i className={`fa ${icon}`} /> : null

  return <button type='submit' className={classes} disabled={disabled}>{iconElem}{label || 'Salvar'}</button>
}

/* SaveButton */
export const SaveButton = ({onSave, className}) => {
  let _stylBtn = { marginRight: '5px' },
      classes = classnames('btn btn-sm btn-primary', className)
  return (<button type='button' className={classes} style={_stylBtn} onClick={onSave}> Salvar</button>)
}

/* CancelButton */
export const CancelButton = ({ onCancel, className, disabled }) => {// (params) => {}
  let _stylBtn = { float: 'left !Important' },
      classes = classnames('btn btn-sm btn-danger', className)
  return (<button type='button' className={classes} style={_stylBtn} onClick={onCancel} disabled={disabled}> Cancelar</button>)
}

/* DeleteButton */
export const DeleteButton = ({onDelete, disabled, className, label}) => {
  let classes = classnames('btn btn-sm btn-default pull-right', className)

  return disabled
      ? <button type='button' className={classes} onClick={onDelete} disabled>{label || 'Remover'}</button>
      : <button type='button' className={classes} onClick={onDelete}>{label || 'Remover'}</button>
}

/* Button - btn-default | btn-danger | btn-primary */
export const Button = ({onClick, disabled, className, label, icon}) => {
  let _stylBtn = { marginRight: '5px' },
      _stylBtnDisabled = { marginRight: '5px', cursor: 'not-allowed' },
      classes = classnames('btn btn-sm', className),
      iconElem = icon ? <i className={`fa ${icon}`} /> : null
  return disabled
      ? <button type='button' className={classes} style={_stylBtnDisabled} disabled >{iconElem}{label}</button>
      : <button type='button' className={classes} style={_stylBtn} onClick={onClick}>{iconElem}{label}</button>
}

/* BackButton */
export const BackButton = ({onBack, disabled, className}) => {
  let _stylBtn = { marginRight: '5px' },
      _stylBtnDisabled = { marginRight: '5px', cursor: 'not-allowed' },
      classes = classnames('btn btn-sm btn-default', className)
  return disabled
      ? <button type='button' className={classes} style={_stylBtnDisabled} onClick={onBack} disabled > Voltar</button>
      : <button type='button' className={classes} style={_stylBtn} onClick={onBack}> Voltar</button>
}

/* PrimaryButton */
export const PrimaryButton = ({ label, onClick, className, disabled, icon }) => {
  let _stylBtn = { marginRight: '5px' },
      classes = classnames('btn btn-sm btn-primary', className),
      iconElem = icon ? <i className={`fa ${icon}`} /> : null

  return (
    <button
      type='button'
      className={classes}
      onClick={onClick}
      style={_stylBtn}
      disabled={disabled}>{iconElem}{label || 'Salvar'}
    </button>
  )
}