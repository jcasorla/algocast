// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data){
        this.data=data;
        this.children=[];
    }
    add(data){
        const node = new Node(data);
        this.children.push(node);
    }
    remove(data){
        this.children=this.children.filter(node=>{
            return node.data !=data;
        });
        
    }
}

class Tree {
    constructor(){
        this.root=null;
    }
    traverseBF(fn){
        const arr=[this.root];
        while(arr.length){
            const node = arr.shift();
            
            //ES2015 solution
            arr.push(...node.children);

            //this instead
            // for(let child of node.children){
            //     arr.push(child);
            // }

            //or this
            // for(let i=0; i<node.children.length; i++){
            //     arr.push(node.children[i]);
            // }

            //iterator function which is passed as argument
            fn(node);           
        }

    }

    //another way
    breadthFirstSearch(array) {
        const queue=[this];

        while(queue.length>0){
            const current=queue.shift();
            array.push(current.data);

            for(const child of current.children){
                queue.push(child);
            }
        }
        return array;
    }

    // traverseDF(fn){
    //     const arr=[this.root];
    //     while(arr.length){
    //         const node = arr.shift();
            
    //         //ES2015 solution
    //         arr.unshift(...node.children);
                    
    //         //iterator function which is passed as argument
    //         fn(node);           
    //     }

    // }

    //another way
    traverseDF(callback) {
        (function recurse(currentNode) {
            callback(currentNode); 
            for (var i = 0, length = currentNode.children.length; i < length; i++) {
                recurse(currentNode.children[i]);
            }
        })(this.root);
    }

    //another way
    depthFirstSearch(array) {
        array.push(this.name);
        for(const child of this.children){
            child.depthFirstSearch(array);
        }
        return array;
    }
}

const node = new Node(1);
const tree = new Tree();
tree.root=node;
tree.root.add(2);
tree.root.add(3);
tree.root.children[0].add(4);
// tree.traverseBF(node=>{
//     console.log(node.data);
// });

tree.traverseDF(node=>{
    console.log(node.data);
})


module.exports = { Tree, Node };
