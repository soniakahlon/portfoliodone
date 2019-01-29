function toggleStuff() {$('#menu-bar').on('click', event=>{
  const turnActive= $(".turnactive");
turnActive.toggleClass("active");
    
})}

$(toggleStuff);
