$( function() {
  $( "#draggable1" ).draggable({ axis: "y" });
  $( "#draggable2" ).draggable({ axis: "x" });

  $( "#draggable3" ).draggable({ containment: "#containment-wrapper", scroll: false });
  $( "#draggable4" ).draggable({ containment: "parent" });
} );