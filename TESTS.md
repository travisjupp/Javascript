## Latest Test Results
<div>

> js@1.0.0 test
> NODE_OPTIONS=--experimental-vm-modules jest

<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Find middle should find middle item in four item list </span> 

<b><head> A B C D <tail></b>
C
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Find middle should find middle item in three item list </span> 

<b><head> A B C <tail></b>
B
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Find middle should find middle item in two item list </span> 

<b><head> A B <tail></b>
B
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Find middle should find middle item in one item list </span> 

<b><head> A <tail></b>
A
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Find node iteratively should find the specified node </span> 

<b><head> A B C D <tail></b>
Node { data: <span style="color:#0A0">'C'<span style="color:#FFF">, next: Node { data: <span style="color:#0A0">'D'<span style="color:#FFF">, next: <b>null<span style="font-weight:normal;text-decoration:none;font-style:normal"> } }
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></b></span></span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Find node iteratively should return null </span> 

<b>null<span style="font-weight:normal;text-decoration:none;font-style:normal">
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></b>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Find node recursively should find the specified node </span> 

Node { data: <span style="color:#0A0">'C'<span style="color:#FFF">, next: Node { data: <span style="color:#0A0">'D'<span style="color:#FFF">, next: <b>null<span style="font-weight:normal;text-decoration:none;font-style:normal"> } }
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></b></span></span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Find node recursively should return null </span> 

<b>null<span style="font-weight:normal;text-decoration:none;font-style:normal">
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></b>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Print node should print list using `printNode` method </span> 

═══════════════════════════════════════════════════════════════════════════════^─────────────────────────────────────────────────────────────────────────────↑0═══════════════════════════════════════════════════════════════════════════════$
A→B→C→D→n	
<b>A</b>→B→C→D→<span style="color:#A00">n	</span>
A	
<b>A</b>	
A→B→C→D→n	
<b><head> A B C D <tail></b>
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Graph should render a Graph </span> 

Graph { vertices: [], isWeighted: <span style="color:#A50">false<span style="color:#FFF">, isDirected: <span style="color:#A50">false<span style="color:#FFF"> }
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Graph should add a Vertex </span> 

Graph { vertices: [ Vertex { data: <span style="color:#0A0">'vtx1'<span style="color:#FFF">, edges: [] } ], isWeighted: <span style="color:#A50">false<span style="color:#FFF">, isDirected: <span style="color:#A50">false<span style="color:#FFF"> }
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Graph should remove a Vertex </span> 

Graph { vertices: [ Vertex { data: <span style="color:#0A0">'vtx1'<span style="color:#FFF">, edges: [] } ], isWeighted: <span style="color:#A50">false<span style="color:#FFF">, isDirected: <span style="color:#A50">false<span style="color:#FFF"> }
Graph { vertices: [], isWeighted: <span style="color:#A50">false<span style="color:#FFF">, isDirected: <span style="color:#A50">false<span style="color:#FFF"> }
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span></span></span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Graph should add an Edge </span> 

vtx1 --> 
vtx1 --> vtx2
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Graph should remove an Edge </span> 

vtx1 --> vtx2
vtx1 --> 
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Graph should add a weighted Edge </span> 

vtx1 --> vtx2 (200)
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Graph should create a directed Graph </span> 

Graph { vertices: [], isWeighted: <span style="color:#A50">false<span style="color:#FFF">, isDirected: <span style="color:#A50">true<span style="color:#FFF"> }
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Graph should add edge to a directed Graph </span> 

vtx1 --> 
vtx1 --> vtx2
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Graph should remove edge from a directed Graph </span> 

vtx1 --> vtx2
vtx1 --> 
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Graph should complete depth first traversal </span> 

      A---1        
         / \      
    B---2---3---C  
vtx1 --> vtx2, vtx3, vtxA
vtx2 --> vtx1, vtx3, vtxB
vtx3 --> vtx2, vtx1, vtxC
vtxA --> vtx1
vtxB --> vtx2
vtxC --> vtx3
[ <span style="color:#0A0">'vtx1'<span style="color:#FFF">, <span style="color:#0A0">'vtx2'<span style="color:#FFF">, <span style="color:#0A0">'vtx3'<span style="color:#FFF">, <span style="color:#0A0">'vtxC'<span style="color:#FFF">, <span style="color:#0A0">'vtxB'<span style="color:#FFF">, <span style="color:#0A0">'vtxA'<span style="color:#FFF"> ]
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span></span></span></span></span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Graph should complete breadth first traversal </span> 

      A---1        
         / \      
    B---2---3---C  
vtx1 --> vtx2, vtx3, vtxA
vtx2 --> vtx1, vtx3, vtxB
vtx3 --> vtx2, vtx1, vtxC
vtxA --> vtx1
vtxB --> vtx2
vtxC --> vtx3
[ <span style="color:#0A0">'vtx1'<span style="color:#FFF">, <span style="color:#0A0">'vtx2'<span style="color:#FFF">, <span style="color:#0A0">'vtx3'<span style="color:#FFF">, <span style="color:#0A0">'vtxA'<span style="color:#FFF">, <span style="color:#0A0">'vtxB'<span style="color:#FFF">, <span style="color:#0A0">'vtxC'<span style="color:#FFF"> ]
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span></span></span></span></span></span></span>
Storing someVal at index 2
Storing someVal at index 2
Storing someNewVal at index 2
Storing someVal at index 2
Storing someUpdatedVal at index 2
Storing someVal at index 2

Retrieving someVal from index 2
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Reverse nodes in 4 item list (dummy node) should reverse all nodes in the list (dummy node) </span> 

═══════════════════════════════════════════════════════════════════════════════^
DUMMY	0→A→B→C→D→n	CURR	A→B→C→D→n	
PREV	0→A→B→C→D→n	NEXT	n	

store next	
NEXT	<b>B</b>→C→D→<span style="color:#A00">n	</span>

orphan next (point curr -> next.next)	
DUMMY	<b>0</b>→A→C→D→<span style="color:#A00">n	</span>
CURR	<b>A</b>→C→D→<span style="color:#A00">n	</span>
PREV	<b>0</b>→A→C→D→<span style="color:#A00">n	</span>

point orphan -> curr (prev.next)	
NEXT	<b>B</b>→A→C→D→<span style="color:#A00">n	</span>

point prev -> next	
DUMMY	<b>0</b>→B→A→C→D→<span style="color:#A00">n	</span>
PREV	<b>0</b>→B→A→C→D→<span style="color:#A00">n	</span>
─────────────────────────────────────────────────────────────────────────────↑0
DUMMY	0→B→A→C→D→n	CURR	A→C→D→n	
PREV	0→B→A→C→D→n	NEXT	B→A→C→D→n	

store next	
NEXT	<b>C</b>→D→<span style="color:#A00">n	</span>

orphan next (point curr -> next.next)	
DUMMY	<b>0</b>→B→A→D→<span style="color:#A00">n	</span>
CURR	<b>A</b>→D→<span style="color:#A00">n	</span>
PREV	<b>0</b>→B→A→D→<span style="color:#A00">n	</span>

point orphan -> curr (prev.next)	
NEXT	<b>C</b>→B→A→D→<span style="color:#A00">n	</span>

point prev -> next	
DUMMY	<b>0</b>→C→B→A→D→<span style="color:#A00">n	</span>
PREV	<b>0</b>→C→B→A→D→<span style="color:#A00">n	</span>
─────────────────────────────────────────────────────────────────────────────↑1
DUMMY	0→C→B→A→D→n	CURR	A→D→n	
PREV	0→C→B→A→D→n	NEXT	C→B→A→D→n	

store next	
NEXT	<b>D</b>→<span style="color:#A00">n	</span>

orphan next (point curr -> next.next)	
DUMMY	<b>0</b>→C→B→A→<span style="color:#A00">n	</span>
CURR	<b>A</b>→<span style="color:#A00">n	</span>
PREV	<b>0</b>→C→B→A→<span style="color:#A00">n	</span>

point orphan -> curr (prev.next)	
NEXT	<b>D</b>→C→B→A→<span style="color:#A00">n	</span>

point prev -> next	
DUMMY	<b>0</b>→D→C→B→A→<span style="color:#A00">n	</span>
PREV	<b>0</b>→D→C→B→A→<span style="color:#A00">n	</span>
─────────────────────────────────────────────────────────────────────────────↑2
DUMMY	0→D→C→B→A→n	CURR	A→n	
PREV	0→D→C→B→A→n	NEXT	D→C→B→A→n	
=>	D→C→B→A→n	
═══════════════════════════════════════════════════════════════════════════════$
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Reverse nodes in 2 item list (dummy node) should reverse all nodes in the list (dummy node) </span> 

═══════════════════════════════════════════════════════════════════════════════^
DUMMY	0→A→B→n	CURR	A→B→n	
PREV	0→A→B→n	NEXT	n	

store next	
NEXT	<b>B</b>→<span style="color:#A00">n	</span>

orphan next (point curr -> next.next)	
DUMMY	<b>0</b>→A→<span style="color:#A00">n	</span>
CURR	<b>A</b>→<span style="color:#A00">n	</span>
PREV	<b>0</b>→A→<span style="color:#A00">n	</span>

point orphan -> curr (prev.next)	
NEXT	<b>B</b>→A→<span style="color:#A00">n	</span>

point prev -> next	
DUMMY	<b>0</b>→B→A→<span style="color:#A00">n	</span>
PREV	<b>0</b>→B→A→<span style="color:#A00">n	</span>
─────────────────────────────────────────────────────────────────────────────↑0
DUMMY	0→B→A→n	CURR	A→n	
PREV	0→B→A→n	NEXT	B→A→n	
=>	B→A→n	
═══════════════════════════════════════════════════════════════════════════════$
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Linked list reference value should return reference-equal list (dummy node) </span> 

═══════════════════════════════════════════════════════════════════════════════^
DUMMY	0→A→B→C→D→n	CURR	A→B→C→D→n	
PREV	0→A→B→C→D→n	NEXT	n	

store next	
NEXT	<b>B</b>→C→D→<span style="color:#A00">n	</span>

orphan next (point curr -> next.next)	
DUMMY	<b>0</b>→A→C→D→<span style="color:#A00">n	</span>
CURR	<b>A</b>→C→D→<span style="color:#A00">n	</span>
PREV	<b>0</b>→A→C→D→<span style="color:#A00">n	</span>

point orphan -> curr (prev.next)	
NEXT	<b>B</b>→A→C→D→<span style="color:#A00">n	</span>

point prev -> next	
DUMMY	<b>0</b>→B→A→C→D→<span style="color:#A00">n	</span>
PREV	<b>0</b>→B→A→C→D→<span style="color:#A00">n	</span>
─────────────────────────────────────────────────────────────────────────────↑0
DUMMY	0→B→A→C→D→n	CURR	A→C→D→n	
PREV	0→B→A→C→D→n	NEXT	B→A→C→D→n	

store next	
NEXT	<b>C</b>→D→<span style="color:#A00">n	</span>

orphan next (point curr -> next.next)	
DUMMY	<b>0</b>→B→A→D→<span style="color:#A00">n	</span>
CURR	<b>A</b>→D→<span style="color:#A00">n	</span>
PREV	<b>0</b>→B→A→D→<span style="color:#A00">n	</span>

point orphan -> curr (prev.next)	
NEXT	<b>C</b>→B→A→D→<span style="color:#A00">n	</span>

point prev -> next	
DUMMY	<b>0</b>→C→B→A→D→<span style="color:#A00">n	</span>
PREV	<b>0</b>→C→B→A→D→<span style="color:#A00">n	</span>
─────────────────────────────────────────────────────────────────────────────↑1
DUMMY	0→C→B→A→D→n	CURR	A→D→n	
PREV	0→C→B→A→D→n	NEXT	C→B→A→D→n	

store next	
NEXT	<b>D</b>→<span style="color:#A00">n	</span>

orphan next (point curr -> next.next)	
DUMMY	<b>0</b>→C→B→A→<span style="color:#A00">n	</span>
CURR	<b>A</b>→<span style="color:#A00">n	</span>
PREV	<b>0</b>→C→B→A→<span style="color:#A00">n	</span>

point orphan -> curr (prev.next)	
NEXT	<b>D</b>→C→B→A→<span style="color:#A00">n	</span>

point prev -> next	
DUMMY	<b>0</b>→D→C→B→A→<span style="color:#A00">n	</span>
PREV	<b>0</b>→D→C→B→A→<span style="color:#A00">n	</span>
─────────────────────────────────────────────────────────────────────────────↑2
DUMMY	0→D→C→B→A→n	CURR	A→n	
PREV	0→D→C→B→A→n	NEXT	D→C→B→A→n	
=>	D→C→B→A→n	
═══════════════════════════════════════════════════════════════════════════════$
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Reverse nodes in 4 item list (dummy node II) should reverse all nodes in the list (dummy node II) </span> 

═══════════════════════════════════════════════════════════════════════════════^
DUMMY	0→A→B→C→D→n	
PREV	0→A→B→C→D→n	
store next	
NEXT	<b>B</b>→C→D→<span style="color:#A00">n	</span>
point curr -> prev (dummy)	
CURR	<b>A</b>→0→[Circular]A	
setup prev for next iter	
PREV	<b>A</b>→0→[Circular]A	
iterate	
CURR	B→C→D→n	
─────────────────────────────────────────────────────────────────────────────↑0
store next	
NEXT	<b>C</b>→D→<span style="color:#A00">n	</span>
point curr -> prev (dummy)	
CURR	<b>B</b>→A→0→[Circular]A	
setup prev for next iter	
PREV	<b>B</b>→A→0→[Circular]A	
iterate	
CURR	C→D→n	
─────────────────────────────────────────────────────────────────────────────↑1
store next	
NEXT	<b>D</b>→<span style="color:#A00">n	</span>
point curr -> prev (dummy)	
CURR	<b>C</b>→B→A→0→[Circular]A	
setup prev for next iter	
PREV	<b>C</b>→B→A→0→[Circular]A	
iterate	
CURR	D→n	
─────────────────────────────────────────────────────────────────────────────↑2
store next	
NEXT	<span style="color:#A00">n	</span>
point curr -> prev (dummy)	
CURR	<b>D</b>→C→B→A→0→[Circular]A	
setup prev for next iter	
PREV	<b>D</b>→C→B→A→0→[Circular]A	
iterate	
CURR	n	
─────────────────────────────────────────────────────────────────────────────↑3
DUMMY	0→A→[Circular]0	
DUMMY	0→A→n	
=> 	D→C→B→A→n	
═══════════════════════════════════════════════════════════════════════════════$
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Reverse nodes in 2 item list (dummy node II) should reverse all nodes in the list (dummy node II) </span> 

═══════════════════════════════════════════════════════════════════════════════^
DUMMY	0→A→B→n	
PREV	0→A→B→n	
store next	
NEXT	<b>B</b>→<span style="color:#A00">n	</span>
point curr -> prev (dummy)	
CURR	<b>A</b>→0→[Circular]A	
setup prev for next iter	
PREV	<b>A</b>→0→[Circular]A	
iterate	
CURR	B→n	
─────────────────────────────────────────────────────────────────────────────↑0
store next	
NEXT	<span style="color:#A00">n	</span>
point curr -> prev (dummy)	
CURR	<b>B</b>→A→0→[Circular]A	
setup prev for next iter	
PREV	<b>B</b>→A→0→[Circular]A	
iterate	
CURR	n	
─────────────────────────────────────────────────────────────────────────────↑1
DUMMY	0→A→[Circular]0	
DUMMY	0→A→n	
=> 	B→A→n	
═══════════════════════════════════════════════════════════════════════════════$
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span>
<span style="color:#A50">1<span style="color:#FFF">
c0
gc0
ggc0
c1
gc1
ggc1
<span style="color:#ff00ff"> ▷ <span style="color:#00afff"> findJudge
 should find judge among 2 people </span></span></span></span> 

<span style="color:#A50">2<span style="color:#FFF"> [ [ <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">2<span style="color:#FFF"> ] ]
(truster) [ <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF"> ]
(trusted) [ <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF"> ]
<span style="color:#A50">2<span style="color:#FFF">
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
<span style="color:#ff00ff"> ▷ <span style="color:#00afff"> findJudge
 should find judge among 3 people </span></span> 

<span style="color:#A50">3<span style="color:#FFF"> [ [ <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF"> ], [ <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF"> ] ]
(truster) [ <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF"> ]
(trusted) [ <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">2<span style="color:#FFF"> ]
<span style="color:#A50">3<span style="color:#FFF">
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
<span style="color:#ff00ff"> ▷ <span style="color:#00afff"> findJudge
 should NOT find judge among 3 people </span></span> 

<span style="color:#A50">3<span style="color:#FFF"> [ [ <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF"> ], [ <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF"> ], [ <span style="color:#A50">3<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF"> ] ]
(truster) [ <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF"> ]
(trusted) [ <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">2<span style="color:#FFF"> ]
<span style="color:#A50">-1<span style="color:#FFF">
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
<span style="color:#ff00ff"> ▷ <span style="color:#00afff"> findJudge
 should NOT find judge among 3 people </span></span> 

<span style="color:#A50">3<span style="color:#FFF"> [ [ <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF"> ], [ <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF"> ], [ <span style="color:#A50">3<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF"> ] ]
(truster) [ <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF"> ]
(trusted) [ <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">2<span style="color:#FFF"> ]
<span style="color:#A50">-1<span style="color:#FFF">
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
<span style="color:#ff00ff"> ▷ <span style="color:#00afff"> findJudge
 should find judge among 4 people </span></span> 

<span style="color:#A50">4<span style="color:#FFF"> [ [ <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF"> ], [ <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">4<span style="color:#FFF"> ], [ <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF"> ], [ <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">4<span style="color:#FFF"> ], [ <span style="color:#A50">4<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF"> ] ]
(truster) [ <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF"> ]
(trusted) [ <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF">, <span style="color:#A50">2<span style="color:#FFF"> ]
<span style="color:#A50">3<span style="color:#FFF">
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
<span style="color:#ff00ff"> ▷ <span style="color:#00afff"> findJudge
 should NOT find judge among 3 people </span></span> 

<span style="color:#A50">3<span style="color:#FFF"> [ [ <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">2<span style="color:#FFF"> ], [ <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF"> ] ]
(truster) [ <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF"> ]
(trusted) [ <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF"> ]
<span style="color:#A50">-1<span style="color:#FFF">
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
<span style="color:#ff00ff"> ▷ <span style="color:#00afff"> findJudge
 should find judge among 1 people </span></span> 

<span style="color:#A50">1<span style="color:#FFF"> []
(truster) [ <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF"> ]
(trusted) [ <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF"> ]
<span style="color:#A50">1<span style="color:#FFF">
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span></span></span></span></span></span></span>
<span style="color:#ff00ff"> ▷ <span style="color:#00afff"> findJudge
 should NOT find judge among 4 people </span></span> 

<span style="color:#A50">4<span style="color:#FFF"> [ [ <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF"> ], [ <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">4<span style="color:#FFF"> ], [ <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF"> ] ]
(truster) [ <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF"> ]
(trusted) [ <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF"> ]
<span style="color:#A50">-1<span style="color:#FFF">
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> sortedArrayToBST should convert array to height-balanced BST </span> 

[ <span style="color:#A50">-10<span style="color:#FFF">, <span style="color:#A50">-3<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">5<span style="color:#FFF">, <span style="color:#A50">9<span style="color:#FFF"> ] -> [ <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">-3<span style="color:#FFF">, <span style="color:#A50">9<span style="color:#FFF">, <span style="color:#A50">-10<span style="color:#FFF">, <b>null<span style="font-weight:normal;text-decoration:none;font-style:normal">, <span style="color:#A50">5<span style="color:#FFF"> ]
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></b></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> sortedArrayToBST should convert two-item array to height-balanced BST </span> 

[ <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF"> ] -> [ <span style="color:#A50">3<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF"> ]
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> sortedArrayToBST should convert three-item array to height-balanced BST </span> 

[ <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF">, <span style="color:#A50">4<span style="color:#FFF"> ] -> [ <span style="color:#A50">3<span style="color:#FFF">, <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">4<span style="color:#FFF"> ]
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span></span></span></span></span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> sortedArrayToBST should convert five-item array to height-balanced BST </span> 

[ <span style="color:#A50">-12<span style="color:#FFF">, <span style="color:#A50">-1<span style="color:#FFF">, <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">4<span style="color:#FFF">, <span style="color:#A50">998<span style="color:#FFF"> ] -> [ <span style="color:#A50">0<span style="color:#FFF">, <span style="color:#A50">-1<span style="color:#FFF">, <span style="color:#A50">998<span style="color:#FFF">, <span style="color:#A50">-12<span style="color:#FFF">, <b>null<span style="font-weight:normal;text-decoration:none;font-style:normal">, <span style="color:#A50">4<span style="color:#FFF"> ]
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></b></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> MaxHeap should create a maxheap </span> 

<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> MaxHeap should remove and return the max value </span> 

MaxHeap { heap: [ <b>null<span style="font-weight:normal;text-decoration:none;font-style:normal">, <span style="color:#A50">4<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF">, <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF"> ], size: <span style="color:#A50">4<span style="color:#FFF"> }
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span></span></span></span></span></span></b>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> MaxHeap should have parents > children </span> 

MaxHeap {
  heap: [
    <b>null<span style="font-weight:normal;text-decoration:none;font-style:normal">, <span style="color:#A50">90<span style="color:#FFF">, <span style="color:#A50">47<span style="color:#FFF">, <span style="color:#A50">58<span style="color:#FFF">,
    <span style="color:#A50">30<span style="color:#FFF">,   <span style="color:#A50">42<span style="color:#FFF">, <span style="color:#A50">54<span style="color:#FFF">, <span style="color:#A50">13<span style="color:#FFF">,
    <span style="color:#A50">7<span style="color:#FFF">,    <span style="color:#A50">9<span style="color:#FFF">,  <span style="color:#A50">24<span style="color:#FFF">, <span style="color:#A50">35<span style="color:#FFF">
  ],
  size: <span style="color:#A50">11<span style="color:#FFF">
}
p:  <b>null<span style="font-weight:normal;text-decoration:none;font-style:normal"> < c:  <span style="color:#A50">90<span style="color:#FFF">
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></b></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></b>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> MaxHeap should return the first item </span> 

<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span>
Data is equal
Missing data: element(s) do not exist
MinHeap { heap: [ <b>null<span style="font-weight:normal;text-decoration:none;font-style:normal">, <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF">, <span style="color:#A50">4<span style="color:#FFF"> ], size: <span style="color:#A50">4<span style="color:#FFF"> }
<span style="color:#ff00ff"> ▷ </span></span></span></span></span></span></span></span></span></span></span></span></b> <span style="color:#00afff"> getX should return Xth number in order </span> 

<span style="color:#A50">-3<span style="color:#FFF">
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> getX should return 0 from an x value of 0 </span> 

<span style="color:#A50">0<span style="color:#FFF">
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> getX should return 0 from an x value of 1 </span> 

<span style="color:#A50">-3<span style="color:#FFF">
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> getX should return 0 from an x value larger than array </span> 

<span style="color:#A50">0<span style="color:#FFF">
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> getX should return undefined from an empty array arg </span> 

<span style="color:#555">undefined<span style="color:#FFF">
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Reverse nodes in list should reverse all nodes in the list </span> 

<b><head> A B C D <tail></b>
═══════════════════════════════════════════════════════════════════════════════^
PREV	<span style="color:#A00">n	</span>CURR	<b>A</b>→B→C→D→<span style="color:#A00">n	</span>NEXT	<b>B</b>→C→D→<span style="color:#A00">n	</span>
─────────────────────────────────────────────────────────────────────────────↑0
PREV	<b>A</b>→<span style="color:#A00">n	</span>CURR	<b>B</b>→C→D→<span style="color:#A00">n	</span>NEXT	<b>C</b>→D→<span style="color:#A00">n	</span>
─────────────────────────────────────────────────────────────────────────────↑1
PREV	<b>B</b>→A→<span style="color:#A00">n	</span>CURR	<b>C</b>→D→<span style="color:#A00">n	</span>NEXT	<b>D</b>→<span style="color:#A00">n	</span>
─────────────────────────────────────────────────────────────────────────────↑2
PREV	<b>C</b>→B→A→<span style="color:#A00">n	</span>CURR	<b>D</b>→C→B→A→<span style="color:#A00">n	</span>NEXT	<span style="color:#A00">n	</span>
═══════════════════════════════════════════════════════════════════════════════$
<b><head> D C B A <tail></b>
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Linked list reference value should return reference-equal list </span> 

<b><head> A B C D <tail></b>
═══════════════════════════════════════════════════════════════════════════════^
PREV	<span style="color:#A00">n	</span>CURR	<b>A</b>→B→C→D→<span style="color:#A00">n	</span>NEXT	<b>B</b>→C→D→<span style="color:#A00">n	</span>
─────────────────────────────────────────────────────────────────────────────↑0
PREV	<b>A</b>→<span style="color:#A00">n	</span>CURR	<b>B</b>→C→D→<span style="color:#A00">n	</span>NEXT	<b>C</b>→D→<span style="color:#A00">n	</span>
─────────────────────────────────────────────────────────────────────────────↑1
PREV	<b>B</b>→A→<span style="color:#A00">n	</span>CURR	<b>C</b>→D→<span style="color:#A00">n	</span>NEXT	<b>D</b>→<span style="color:#A00">n	</span>
─────────────────────────────────────────────────────────────────────────────↑2
PREV	<b>C</b>→B→A→<span style="color:#A00">n	</span>CURR	<b>D</b>→C→B→A→<span style="color:#A00">n	</span>NEXT	<span style="color:#A00">n	</span>
═══════════════════════════════════════════════════════════════════════════════$
list === reversed ? <span style="color:#A50">true<span style="color:#FFF">
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> quickSort should sort an array incrementally </span> 

[ <span style="color:#A50">3<span style="color:#FFF">, <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">7<span style="color:#FFF">, <span style="color:#A50">9<span style="color:#FFF"> ]
[ <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF">, <span style="color:#A50">7<span style="color:#FFF">, <span style="color:#A50">9<span style="color:#FFF"> ]
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> quickSort should sort a sub-array incrementally </span> 

[ <span style="color:#A50">3<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">4<span style="color:#FFF">, <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">8<span style="color:#FFF">, <span style="color:#A50">9<span style="color:#FFF"> ]
[ <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF">, <span style="color:#A50">4<span style="color:#FFF">, <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">8<span style="color:#FFF">, <span style="color:#A50">9<span style="color:#FFF"> ]
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> quickSort should sort a one-item-array incrementally </span> 

[ <span style="color:#A50">1<span style="color:#FFF"> ]
[ <span style="color:#A50">1<span style="color:#FFF"> ]
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> mergeSort should sort incrementally </span> 

[ <span style="color:#A50">-3<span style="color:#FFF"> ] [ <span style="color:#A50">10<span style="color:#FFF"> ] []
[ <span style="color:#A50">-3<span style="color:#FFF">, <span style="color:#A50">5<span style="color:#FFF"> ] [] [ <span style="color:#A50">10<span style="color:#FFF"> ]
[ <span style="color:#A50">7<span style="color:#FFF"> ] [] [ <span style="color:#A50">9<span style="color:#FFF"> ]
[ <span style="color:#A50">-3<span style="color:#FFF"> ] [] [ <span style="color:#A50">7<span style="color:#FFF">, <span style="color:#A50">9<span style="color:#FFF"> ]
[ <span style="color:#A50">-3<span style="color:#FFF">, <span style="color:#A50">-3<span style="color:#FFF">, <span style="color:#A50">5<span style="color:#FFF">, <span style="color:#A50">7<span style="color:#FFF">, <span style="color:#A50">9<span style="color:#FFF"> ] [ <span style="color:#A50">10<span style="color:#FFF"> ] []
[ <span style="color:#A50">-3<span style="color:#FFF">, <span style="color:#A50">-3<span style="color:#FFF">, <span style="color:#A50">5<span style="color:#FFF">, <span style="color:#A50">7<span style="color:#FFF">, <span style="color:#A50">9<span style="color:#FFF">, <span style="color:#A50">10<span style="color:#FFF"> ]
[ <span style="color:#A50">-3<span style="color:#FFF"> ] [ <span style="color:#A50">10<span style="color:#FFF"> ] []
[ <span style="color:#A50">-3<span style="color:#FFF">, <span style="color:#A50">5<span style="color:#FFF"> ] [] [ <span style="color:#A50">10<span style="color:#FFF"> ]
[ <span style="color:#A50">7<span style="color:#FFF"> ] [] [ <span style="color:#A50">9<span style="color:#FFF"> ]
[ <span style="color:#A50">-3<span style="color:#FFF"> ] [] [ <span style="color:#A50">7<span style="color:#FFF">, <span style="color:#A50">9<span style="color:#FFF"> ]
[ <span style="color:#A50">-3<span style="color:#FFF">, <span style="color:#A50">-3<span style="color:#FFF">, <span style="color:#A50">5<span style="color:#FFF">, <span style="color:#A50">7<span style="color:#FFF">, <span style="color:#A50">9<span style="color:#FFF"> ] [ <span style="color:#A50">10<span style="color:#FFF"> ] []
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
Map should filter inventory using `Map.groupBy()`
[
  { name: <span style="color:#0A0">'asparagus'<span style="color:#FFF">, type: <span style="color:#0A0">'vegetables'<span style="color:#FFF">, quantity: <span style="color:#A50">9<span style="color:#FFF"> },
  { name: <span style="color:#0A0">'bananas'<span style="color:#FFF">, type: <span style="color:#0A0">'fruit'<span style="color:#FFF">, quantity: <span style="color:#A50">5<span style="color:#FFF"> }
]
result Map(2) {
  { restock: <span style="color:#A50">true<span style="color:#FFF"> } => [
    { name: <span style="color:#0A0">'asparagus'<span style="color:#FFF">, type: <span style="color:#0A0">'vegetables'<span style="color:#FFF">, quantity: <span style="color:#A50">9<span style="color:#FFF"> },
    { name: <span style="color:#0A0">'bananas'<span style="color:#FFF">, type: <span style="color:#0A0">'fruit'<span style="color:#FFF">, quantity: <span style="color:#A50">5<span style="color:#FFF"> }
  ],
  { restock: <span style="color:#A50">false<span style="color:#FFF"> } => [
    { name: <span style="color:#0A0">'goat'<span style="color:#FFF">, type: <span style="color:#0A0">'meat'<span style="color:#FFF">, quantity: <span style="color:#A50">23<span style="color:#FFF"> },
    { name: <span style="color:#0A0">'cherries'<span style="color:#FFF">, type: <span style="color:#0A0">'fruit'<span style="color:#FFF">, quantity: <span style="color:#A50">12<span style="color:#FFF"> },
    { name: <span style="color:#0A0">'fish'<span style="color:#FFF">, type: <span style="color:#0A0">'meat'<span style="color:#FFF">, quantity: <span style="color:#A50">22<span style="color:#FFF"> }
  ]
}
Map should filter inventory using `Map.groupBy()`
result Map(2) { <span style="color:#A50">1<span style="color:#FFF"> => [ [ <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF"> ] ], <span style="color:#A50">2<span style="color:#FFF"> => [ [ <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF"> ] ] }
<span style="color:#ff00ff"> ▷ </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> <span style="color:#00afff"> starGraph should find center from 3 edges </span> 

[ [ <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">2<span style="color:#FFF"> ], [ <span style="color:#A50">2<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF"> ], [ <span style="color:#A50">4<span style="color:#FFF">, <span style="color:#A50">2<span style="color:#FFF"> ] ] -> <span style="color:#A50">2<span style="color:#FFF">
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> starGraph should find center from 4 edges </span> 

[ [ <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">2<span style="color:#FFF"> ], [ <span style="color:#A50">5<span style="color:#FFF">, <span style="color:#A50">1<span style="color:#FFF"> ], [ <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">3<span style="color:#FFF"> ], [ <span style="color:#A50">1<span style="color:#FFF">, <span style="color:#A50">4<span style="color:#FFF"> ] ] -> <span style="color:#A50">1<span style="color:#FFF">
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> Creates queue should create a 4 item queue </span> 

A→B→C→D→n	
<b><head> A B C D <tail></b>
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span>
<span style="color:#ff00ff"> ▷ </span> <span style="color:#00afff"> binaryTree should create a binary tree </span> 

BinaryTree {
  value: <span style="color:#A50">0<span style="color:#FFF">,
  depth: <span style="color:#A50">1<span style="color:#FFF">,
  left: <b>null<span style="font-weight:normal;text-decoration:none;font-style:normal">,
  right: BinaryTree {
    value: <span style="color:#A50">1<span style="color:#FFF">,
    depth: <span style="color:#A50">2<span style="color:#FFF">,
    left: <b>null<span style="font-weight:normal;text-decoration:none;font-style:normal">,
    right: BinaryTree {
      value: <span style="color:#A50">2<span style="color:#FFF">,
      depth: <span style="color:#A50">3<span style="color:#FFF">,
      left: <b>null<span style="font-weight:normal;text-decoration:none;font-style:normal">,
      right: BinaryTree {
        value: <span style="color:#A50">3<span style="color:#FFF">,
        depth: <span style="color:#A50">4<span style="color:#FFF">,
        left: <b>null<span style="font-weight:normal;text-decoration:none;font-style:normal">,
        right: <b>null<span style="font-weight:normal;text-decoration:none;font-style:normal">
      }
    }
  }
}
<span style="color:#875fff"> ═══════════════════════════════════════════════════════════════════════════════ </span></span></b></span></b></span></span></span></span></span></b></span></span></span></span></span></b></span></span></span></span></span></b></span></span></span></span>
A→B→C→D→n	
</div>
