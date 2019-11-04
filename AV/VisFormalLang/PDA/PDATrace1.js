// Written by Mostafa Mohammed, Fall 2018
$(document).ready(function() {
  "use strict";

  var av_name = "PDATrace1";
  var av = new JSAV(av_name);
  var url = "../../../AV/VisFormalLang/PDA/Machines/PDADeterministic.jff";
  av.umsg("Let us see the tace for accepting the string $aaabbb$.");
  av.displayInit();
  var inputString = "aaabbb";
  var pda = new av.ds.PDA({width: 600, height: 200, url: url});
  runPDA(pda, inputString, true);
  av.recorded();
});
