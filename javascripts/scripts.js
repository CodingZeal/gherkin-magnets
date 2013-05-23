$(function(){

  $('.magnet').draggable({
      appendTo: "body",
      helper: "clone"
    });
  
  $('.scenario ul').droppable({
    accept: ":not(.ui-sortable-helper)",
    drop: function( event, ui ) {
        $(ui.draggable).clone(true).appendTo(this);
      }
  }).nestedSortable({
    handle: 'li',
    items: 'li',
    listType: 'ul',
    maxLevels: 1
  });


  $('.scenario-new').click(function(){
    $(this)
      .before($('#scenario-template')
        .clone(false)
        .removeAttr('id')
        .uniqueId())
      .prev('.scenario')
        .children('ul')
          .removeClass('ui-droppable')
          .droppable({
            accept: ":not(.ui-sortable-helper)",
            drop: function( event, ui ) {
                $(ui.draggable).clone().appendTo(this);
              }
          })
          .nestedSortable({
            handle: 'span',
            items: 'li',
            listType: 'ul',
            maxLevels: 1
          });
    return false;
  });

  $('.remove-magnet').on('click', function(event){
    $(this).parent().parent().remove();
  });

});