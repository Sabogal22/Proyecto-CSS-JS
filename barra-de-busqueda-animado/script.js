function searchToggle(obj, evt){
  var container = $(obj).closest('.search-wrapper');
  if(!container.hasClass('active')){
    container.addClass('active');
    evt.preventDefault();
  }
  else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
    container.removeClass('active');
    // Limpia la barra de busqueda
    container.find('.search-input').val('');
  }
}