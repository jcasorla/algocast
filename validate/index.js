// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) { 

    if(max!==null && node.data> max){
        return false;
    }
    if(min!==null && node.data< min){
        return false;
    }
    if(node.left && !validate(node.left,min,node.data)){
        return false;
    }
    if(node.right && !validate(node.right,node.data,max)){
        return false;
    }

    return true;   
    
}

function findMin(node){
    if(node===null){
        return;        
    }
    var min =node;
    if(min.left===null){
        return min.data;
    }

    return findMin(min.left);
}

function traversePreOrder(node=this.root){
    if(!node) return this;
    console.log(node.data);

    this.traversePreOrder(node.left);
    this.traversePreOrder(node.right);
    return this;
}

function traverseInOrder(node=this.root){
    if(!node) return this;    

    this.traversePreOrder(node.left);
    console.log(node.data);
    this.traversePreOrder(node.right);
    return this;
}

function traversePostOrder(node=this.root){
    if(!node) return this;    

    this.traversePreOrder(node.left);    
    this.traversePreOrder(node.right);
    console.log(node.data);
    return this;
}



module.exports = validate;
