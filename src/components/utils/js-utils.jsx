
const JsUtils = {

    disableChildren(element) {
    // Adiciona classe 'state-disabled' aos labels
    sizzle('label[data-forcedisabled="false"]', element).forEach(function (elem) {
      JsUtils.addClass(elem, 'state-disabled')
    })

    // Desabilita todos os inputs
    sizzle(':input[data-forcedisabled="false"]', element).forEach(function(elem) {
      elem.disabled=true
    })
  }

}

export default JsUtils