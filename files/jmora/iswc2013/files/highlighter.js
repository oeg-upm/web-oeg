// as seen on http://css-tricks.com/row-and-column-highlighting/

function byclasses(e) {
    if (e.type == 'mouseover') {
      $(this).parent().addClass("hover");
      $("col").eq($(this).index()).addClass("hover");
      $("div#querysnippet").html('Query used in this test case: ' + $(this).parent().attr("query"));
    }
    else {
      $("div#querysnippet").html(' ');
      $(this).parent().removeClass("hover");
      $("col").eq($(this).index()).removeClass("hover");
    }
  }
    
function boxvis(e){
  if (e.type == 'mouseover') 
    $("div#container").css('display', 'block');
  else  
    $("div#container").css('display', 'none');
}

function selectColum() {
  var cg = $("col").eq($(this).index());
  if (cg.hasClass("selected"))
    cg.removeClass("selected");
  else
    cg.addClass("selected");
}

function selectRow() {
  var p = $(this).parent();
  if (p.hasClass("rowselected"))
    p.removeClass("rowselected");
  else
    p.addClass("rowselected");
}

function toggle(i,e) {
  var part = $(e);
  if (part.hasClass("hidden"))
    part.removeClass("hidden");
  else
    part.addClass("hidden");
}

function moreToggle(i, e){
  i = $(this).index();
  toggle(i, e);
  toggle(i, $('th').eq(i));
  $('tr').each(function(j,e){
    toggle(j, $('td',this).eq(i));
  });
}

function showStuff(e){
  var group = $(this).attr('name');
  var v = $(this).attr('value');
  if (group == 'ontology'){
    $('tr[ontology='+v+']').each(toggle);
  }
  if (group == 'system'){
    $('col[system='+v+']').each(moreToggle);
  }
}

var count = 0;
function itsASecret(e){
  count += 1;
  if (count >= 3){
    count = count % 3;
    $('div.hidden', '#menu').each(toggle);
  }
}


$(function() {
  $("table").delegate('td','mouseover mouseleave', byclasses);
  $("table").delegate('tbody','mouseover mouseleave', boxvis);
  $('th').bind('click', selectColum);
  $('td').bind('click', selectRow)
  /*$('#menu').delegate('input', 'click', showStuff);*/
  $('input:checkbox').bind('click', showStuff);
  $('img#mail').bind('click', itsASecret);
  $('#menu').parent().attr({
    marginwidth: 8,
    marginheight: 8
  });
});

