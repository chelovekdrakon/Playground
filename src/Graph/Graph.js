
export default class Graph {
    constructor(vert) {
        this.vertices = vert;
        this.edges = 0;
        this.edgeTo = [];

        this.adjacency = []; // смежность
        for (let i = this.vertices - 1; i >= 0; i--) {
            this.adjacency[i] = [];
        }

        this.marked = [];
        for (let i = this.vertices - 1; i >= 0; i--) {
            this.marked[i] = false;
        }

        this.vertexList = [];
    }

    addEdge(vertexA, vertexB) {
        this.adjacency[vertexA].push(vertexB);
        this.adjacency[vertexB].push(vertexA);
        this.edges++;
    }

    showGraph() {
        this.adjacency.forEach( (vertex, index) => {
            window.console.log(`Vertex ${index} has edges to vertices: `);
            vertex.forEach( edge => {
                window.console.log(`${edge}`);
            });
        });
    }

    showGraphWithNames() {
        const visited = [];

        this.adjacency.forEach( (vertex, index) => {
            window.console.log(`${this.vertexList[index]} -> `);
            visited.push(this.vertexList[index]);

            // this.adjacency.forEach( (vertex, jindex) => {
            //     if (this.adjacency[index][jindex]) {
            //         if (visited.indexOf(this.vertexList[jindex]) < 0) {
            //              window.console.log(`${this.vertexList[jindex]} `);
            //         }
            //     }
            // });
            visited.pop();
        });
    }

    depthFirst(vertex) {
        this.marked[vertex] = true;

        if (this.adjacency[vertex]) {
            window.console.log(`Visited vertex: ${vertex}`);

            this.adjacency[vertex].forEach( edge => {
                if (!this.marked[edge]) {
                    this.depthFirst(edge);
                }
            });
        }
    }

    breadthFirst(start) {
        const queue = [];
        this.marked[start] = true;
        queue.push(start);

        while (queue.length > 0) {
            const vertex = queue.shift();
            window.console.log(`Visited vertex: ${vertex}`);

            this.adjacency[vertex].forEach( edge => {
                if (!this.marked[edge]) {
                    this.edgeTo[edge] = vertex;
                    this.marked[edge] = true;
                    queue.push(edge);
                }
            });
        }
    }

    pathTo(vertex) {
        window.console.log(`Shortest path to vertex ${vertex}: `);
        const source = 0;

        if (!this.hasPathTo(vertex)) {
            return undefined;
        }

        const path = [];

        for (let i = vertex; i >= source; i = this.edgeTo[i]) {
            path.push(i);
        }
        return path;
    }

    hasPathTo(vertex) {
        return this.marked[vertex];
    }

    topSort() {
        const stack = [];
        const visited = [];

        this.adjacency.forEach( (vertex, index) => {
            visited[index] = false;
        });

        this.adjacency.forEach( (vertex, index) => {
            if (visited[index] === false) {
                this.topSortHelper(index, visited, stack);
            }
        });

        stack.forEach( (element, index) => {
            if (stack[index]) {
                window.console.log(this.vertexList[stack[index]]);
            }
        });
    }

    topSortHelper(vertex, visited, stack) {
        visited[vertex] = true;

        this.adjacency[vertex].forEach( edge => {
            if (!visited[edge]) {
                this.topSortHelper(edge, visited, stack);
            }
        });
        stack.push[vertex];
    }
}
