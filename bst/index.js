// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
    insert(data) {
              
        const n = new Node(data);
       
        if(data<this.data){
            if(this.left){
                this.left.insert(data);                
               
            }else{
                this.left=n;
            }
        }
        else if(data>this.data){
            if(this.right){
                this.right.insert(data);
                               
            }else{
                this.right=n; 
            }
        }
    }
    constains(data){
        if(data===this.data){
            return this;
        }
        if(this.data<data && this.right){
            return this.right.constains(data);
        }
        else if(this.data>data && this.left){
            return this.left.constains(data);
        }
        return null;
       
    }
}


module.exports = Node;
