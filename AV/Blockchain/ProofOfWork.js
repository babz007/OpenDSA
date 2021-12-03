/*global ODSA */
// Inseh1234 slideshow
$(document).ready(function() {
    "use strict";
    var av_name = "ProofOfWork";
    var config = ODSA.UTILS.loadConfig({av_name: av_name}),
        interpret = config.interpreter;                   // get the code object
    var av = new JSAV(av_name);
    
    var topMargin = 50;
    var leftMargin = 390;
    let leftAdding = 54;
    var topProposal = "-5%";
    var leftProposal = "3.5%";
    let topCenterGraph = "35%";
    let leftCenterGraph = "14%";
    let node4ALeft = "55%";
  let node4ATop = "90%";
  var blocktop = 17;

    var blockchain = av.ds.list({top: blocktop + 0, left: leftMargin, nodegap: 10});
    var blockchain2 = av.ds.list({top: blocktop + 50, left: leftMargin, nodegap: 10});
    var blockchain3 = av.ds.list({top: blocktop + 100, left: leftMargin, nodegap: 10});
    var blockchain4 = av.ds.list({top: blocktop + 150, left: leftMargin, nodegap: 10});
    
    var graph = av.ds.graph({visible: true, left: -10, top: blocktop });

    // this code is the starting state of the graph
    graph.css({"font-size": "12px"});
    const a = graph.addNode('1', { "left": "30%", "bottom":"90%"});
    const b = graph.addNode('2', {"right": "80%", "left":"20%", "top":"10%"});
    const c = graph.addNode('3', {"right": "90%", "left":"10%", "top":"25%"});
    const d = graph.addNode('4', {"right": "95%", "left":"5%", "top":"50%"});
    const e = graph.addNode('5', {"right": "90%", "left":"10%", "top":"75%"});
    const f = graph.addNode('6', {"right": "80%", "left":"20%", "top":"90%"});
    const g = graph.addNode('7', {"right": "70%", "left":"30%", "top":"100%"});
    const h = graph.addNode('8', {"right": "60%", "left":"40%", "top":"90%"});
    const i = graph.addNode('9', {"right": "50%", "left":"50%", "top":"75%"});
    const j = graph.addNode('10', {"right": "45%", "left":"55%", "top":"50%"});
    const k = graph.addNode('11', {"right": "50%", "left":"50%", "top":"25%"});
    const l = graph.addNode('12', {"right": "60%", "left":"40%", "top":"10%"});

    const m1 = graph.addNode('M1', {"right": "80%", "left":"20%", "top":"30%"});
    const m2 = graph.addNode('M2', {"right": "80%", "left":"20%", "top":"70%"});
    const m3 = graph.addNode('M3', {"right": "60%", "left":"40%", "top":"70%"});
    const m4 = graph.addNode('M4', {"right": "60%", "left":"40%", "top":"30%"});

    const f1 = graph.addNode('F1', {"right": "85%", "left":"15%", "top":"50%"});
    const f2 = graph.addNode('F2', {"right": "75%", "left":"25%", "top":"50%"});
    const f3 = graph.addNode('F3', {"right": "65%", "left":"35%", "top":"50%"});
    const f4 = graph.addNode('F4', {"right": "55%", "left":"45%", "top":"50%"});


    const f1Chain = graph.addNode('F1', {"right": "12%", "left":"88%", "top":"5%"});
    const f2Chain = graph.addNode('F2', {"right": "12%", "left":"88%", "top":"30%"});
    const f3Chain = graph.addNode('F3', {"right": "12%", "left":"88%", "top":"55%"});
    const f4Chain = graph.addNode('F4', {"right": "12%", "left":"88%", "top":"80%"});

    m1.addClass('brownnode')
    m2.addClass('brownnode')
    m3.addClass('brownnode')
    m4.addClass('brownnode')

    f1.addClass('bluenode')
    f2.addClass('bluenode')
    f3.addClass('bluenode')
    f4.addClass('bluenode')
    f1Chain.addClass('bluenode')
    f2Chain.addClass('bluenode')
    f3Chain.addClass('bluenode')
    f4Chain.addClass('bluenode')
    
    av.g.line(300, 10, 300, 220);

    graph.addClass('backward'); //move the graph behind the new proposed blocks
    graph.layout();
  
    //-----------------------------------------------
    // Slide 1
    av.umsg("Brown squares labeled (M1-M4) are mining nodes, Blue Circles labeled (F1-F4) are full nodes, White circles represent thin nodes");

    blockchain.addFirst("Blk 2").addFirst("Blk 1");
    blockchain2.addFirst("Blk 2").addFirst("Blk 1");
    blockchain3.addFirst("Blk 2").addFirst("Blk 1");
    blockchain4.addFirst("Blk 2").addFirst("Blk 1");

    let forkMargin = 163; //the distance we want in the fork

    blockchain.layout({updateTop: false});
    blockchain2.layout({updateTop: false});
    blockchain3.layout({updateTop: false});
    blockchain4.layout({updateTop: false});
        

    av.displayInit();
  
    //-----------------------------------------------
    // Slide 2
    av.umsg("Thin node 7 has a new transaction it wants to broadcast. It begins telling all the nodes nearby. Orange lines denote an UNCONFIRMED transaction being broadcast to various nodes throughout the network.");
    
    g.addClass("orangenode");
    const gm2Edge = graph.addEdge(g,m2).addClass("orangeedge");
    const gm3Edge = graph.addEdge(g,m3).addClass("orangeedge");
    const gf2Edge = graph.addEdge(g,f2).addClass("orangeedge");
    const gf3Edge = graph.addEdge(g,f3).addClass("orangeedge");

    av.step();
    
    //-----------------------------------------------
    // Slide 3
    av.umsg("Transactions continue to propagate throughout the network via each node that receives them in transmission.");
    const m2f1Edge = graph.addEdge(m2, f1).addClass("orangeedge");
    const m2f2Edge = graph.addEdge(m2, f2).addClass("orangeedge");
    const m3f3Edge = graph.addEdge(m3, f3).addClass("orangeedge");
    const m3f4Edge = graph.addEdge(m3, f4).addClass("orangeedge");


    const f1m1Edge = graph.addEdge(f1, m1).addClass("orangeedge");
    const f2m1Edge = graph.addEdge(f2, m1).addClass("orangeedge");
    const f3m4Edge = graph.addEdge(f3, m4).addClass("orangeedge");
    const f4m4Edge = graph.addEdge(f4, m4).addClass("orangeedge");
    
    av.step();

    //-----------------------------------------------
    // Slide 4
    av.umsg("An important note is that no other thin node can broadcast transactions on behalf of someone else. Each thin node can ONLY broadcast transactions when it holds the private key for the sending wallet. This prevents fake transactions from being sent on behalf of someone else.");
    //@TODO: Reword the private key usage
    //@TODO: 
    //Animate a lock icon next to thin node 7 as to denote that it must hold its own private key
    
    av.step();

    //-----------------------------------------------
    // Slide 5
    av.umsg("As shown below, each mining node now maintains its own ledger of unconfirmed transactions denoted A1-A4. It is important to recognize that each mining node will have slightly different ledgers of unconfirmed transactions as not all transactions are propagated at the same speed across the network.");
    gm2Edge.hide();
    gm3Edge.hide();
    gf2Edge.hide();
    gf3Edge.hide();
    m2f1Edge.hide();
    m2f2Edge.hide();
    m3f3Edge.hide();
    m3f4Edge.hide();
    f1m1Edge.hide();
    f2m1Edge.hide();
    f3m4Edge.hide();
    f4m4Edge.hide();

    g.removeClass("orangenode");

    var m1Bundle = av.ds.list({"top": "25%", left: "12%", nodegap: 10}).addFirst("A1");
    var m2Bundle = av.ds.list({"top": "65%", left: "12%", nodegap: 10}).addFirst("A2");
    var m3Bundle = av.ds.list({"top": "65%", left: "21%", nodegap: 10}).addFirst("A3");
    var m4Bundle = av.ds.list({"top": "25%", left: "21%", nodegap: 10}).addFirst("A4");
    
    av.step();

    //-----------------------------------------------
    // Slide 6
    av.umsg("As now evident by the orange block A1, M1 has received enough transaction for it to begin proposing solutions to the block. This process of hashing is described in 3.1.");
    m1Bundle.addClass("orangenode") //THIS DOES NOT WORK, NEED TO FIND A WAY TO TARGET FIRST ELEMENT IN LIST
    av.step();
    
    //-----------------------------------------------
    // Slide 7
    av.umsg("M1 now has arrived at a valid solution which it proposes to the full node, F2. Because this is the first solution to be proposed and it is valid, the solution is accepted by F2 and begins to get propagated throughout the network. Notice how the state of F2's chain has been updated but the other full nodes still have the original chain. Currently this network lacks consensus.");
    // Be more specific about what a valid solution is
    f2m1Edge.removeClass("orangeedge");
    f2m1Edge.addClass("greenedge");
    f2m1Edge.show();

    f2.removeClass("bluenode");
    f2.addClass("greennode");

    f2Chain.removeClass("bluenode");
    f2Chain.addClass("greennode");
    

    // @TODO:
    // Is there a way to just append to existing chain rather than hiding it and making a copy?
    blockchain2.hide();
    var blockchain2_1 = av.ds.list({top: 50, left: leftMargin, nodegap: 10});
    blockchain2_1.addFirst("A1").addFirst("Blk2").addFirst("Blk1");
    blockchain2_1.layout({updateTop: false});
    

    av.step();

    //-----------------------------------------------
    // Slide 8
    av.umsg("F2 will begin to propagate its valid solution to other neighboring full nodes.");
    const f2f3Edge = graph.addEdge(f2, f3).addClass("greenedge");
    const f2f1Edge = graph.addEdge(f2, f1).addClass("greenedge");
    const f3f4Edge = graph.addEdge(f3, f4).addClass("greenedge");

    f1.removeClass("bluenode");
    f1.addClass("greennode");
    f3.removeClass("bluenode");
    f3.addClass("greennode");
    f4.removeClass("bluenode");
    f4.addClass("greennode");

    blockchain.hide();
    blockchain3.hide();
    blockchain4.hide();

    var blockchain1_1 = av.ds.list({top: 0, left: leftMargin, nodegap: 10});
    var blockchain3_1 = av.ds.list({top: 100, left: leftMargin, nodegap: 10});
    var blockchain4_1 = av.ds.list({top: 150, left: leftMargin, nodegap: 10});
    
    blockchain1_1.addFirst("A1").addFirst("Blk2").addFirst("Blk1");
    blockchain3_1.addFirst("A1").addFirst("Blk2").addFirst("Blk1");
    blockchain4_1.addFirst("A1").addFirst("Blk2").addFirst("Blk1");

    blockchain1_1.layout({updateTop: false});
    blockchain3_1.layout({updateTop: false});
    blockchain4_1.layout({updateTop: false});

    f1Chain.removeClass("bluenode");
    f1Chain.addClass("greennode");
    f3Chain.removeClass("bluenode");
    f3Chain.addClass("greennode");
    f4Chain.removeClass("bluenode");
    f4Chain.addClass("greennode");


    av.step();

    //-----------------------------------------------
    // Slide 9
    av.umsg("At this point, all full nodes have accepted the solution of M1. The network has reached consensus on the current state of the blockchain.");
    f2m1Edge.hide();
    f2f1Edge.hide();
    f2f3Edge.hide();
    f3f4Edge.hide();


    av.recorded();
  });
  
