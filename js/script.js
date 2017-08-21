
function push_desplegable(modulo){
  var element = document.getElementById(modulo);
  if(isclassActivated(element)){
    $("div#"+modulo+" .text_module").css({"height":"0"});
    $("div#"+modulo+" .icon_arrow_down").css({"transform":"rotate(0deg)"});
    element.classList.add('desactivated');
    clearActivated(element);
  }else{
    $("div#"+modulo+" .text_module").css({"height":"auto"});
    $("div#"+modulo+" .icon_arrow_down").css({"transform":"rotate(180deg)"});
    element.classList.add('activated');
    clearDesactivated(element);
  }
}

function clearActivated(element){//elminar la clase activated de un elemento determinado
  for(var i = 0;i<element.classList.length;i++){
    if(element.classList[i]=== 'activated'){
      element.classList.remove('activated');
    }
  }
}
function clearDesactivated(element){//elminar la clase desactivated de un elemento determinado
  for(var i = 0;i<element.classList.length;i++){
    if(element.classList[i]==='desactivated'){
      element.classList.remove('desactivated');

    }
  }
}

function isclassActivated(element){//comprobar que dicho elemento dispone de la clase activated
  var isActivated = false;
  for(var i = 0;i<element.classList.length;i++){
    if(element.classList[i]==='activated'){
      isActivated = true;
    }
  }
  return isActivated;
}
