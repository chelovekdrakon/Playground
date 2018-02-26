import Graph from './Graph';

export function testGraph () {

    const myGraph = new Graph(5);

    myGraph.addEdge(0, 1);
    myGraph.addEdge(0, 2);
    myGraph.addEdge(1, 3);
    myGraph.addEdge(2, 4);

    myGraph.showGraph();
    // myGraph.depthFirst(0);
    myGraph.breadthFirst(0);

    const vertex = 4;
    const path = myGraph.pathTo(vertex);

    while (path.length > 0) {
        if (path.length > 1) {
            window.console.log(path.pop() + ' -> ');
        } else {
            window.console.log(path.pop());
        }
    }


    const newGraph = new Graph(6);
    newGraph.addEdge(1, 2);
    newGraph.addEdge(2, 5);
    newGraph.addEdge(1, 3);
    newGraph.addEdge(1, 4);
    newGraph.addEdge(0, 1);

    newGraph.vertexList = ['CS1', 'CS2', 'Data Structures', 'Assembly Language', 'Operating Systems', 'Algorithms'];
    newGraph.showGraphWithNames();
    newGraph.topSort();

}
