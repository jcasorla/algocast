// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList {
    contructor(){
        this.head=null;
    }

    insertFirst(data){
        if(this.head==null){
            this.head = new Node(data);
        }else{
            var temp=this.head;
            this.head = new Node(data);
            this.head.next=temp;
        }

        //shortcut way
        //this.head = new Node(data, this.head);
    }
    size(){
        let runner=this.head;
        let count=0;
        
        while(runner){
            count++
            runner=runner.next;
        }
        return count;
    }
    print(){
        let runner=this.head;
        
        while(runner){
            console.log(runner.data);
            runner=runner.next;
        }
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        if(!this.head){
            return null;
        }
        let runner=this.head;
               
        while(runner.next!=null){
            runner=runner.next;
        }
        return runner;

    }
    clear(){
        this.head=null;
    }
    removeFirst(){
        if(!this.head){
            return;
        }
        let tmp=this.head;
        this.head=this.head.next;
        tmp=null; 
    }
    removeLast(){
        let runner=this.head;
        let temp = runner;

        if(!this.head){
            return;
        }

        if(this.head.next==null){
            this.head=null;
            return;
        }
               
        while(runner){
            if(runner.next==null){
                temp.next=null;
            }
            temp=runner;            
            runner=runner.next;
        }

        // another way
        // let previous = this.head;
        // let node = this.head.next;
        // while(node.next){
        //     previous=node;
        //     node=node.next;
        // }
        // previous.next=null;
    }
    insertLast(data){
        const node = new Node(data);
        if(!this.head){
            this.head=node;
        }
        let runner=this.head;
               
        while(runner.next!=null){
            runner=runner.next;
        }
        runner.next=node;

        //another way
        // const last = this.getLast();

        // if(last){
        //     last.next=node;
        // }else{
        //     this.head=node;
        // }
    }

    getAt(n){
        
        let runner=this.head;
        let count=0;
               
        while(runner){
            
            if(count===n){
                return runner;
            }
            count++;
            runner=runner.next;
            
        }
        return null;

    }
    // removeAt(n){
    //     if(!this.head){
    //         return;
    //     }
    //     if(n===0){
    //         this.head=this.head.next;
    //         return;
    //     }
    //     const previous=this.getAt(n-1);
    //     if(!previous || !previous.next){
    //         return;
    //     }
    //     previous.next=previous.next.next;
        
    // }
    removeAt(n){
        if(!this.head){
            return;
        }
        if(n===0){
            this.head=this.head.next;
            return;
        }
        
        
        let runner=this.head.next;
        let prev=this.head;
        let count=1;
               
        while(runner){
            
            if(count===n){
                break;
            }
            count++;
            runner=runner.next;
            prev.prev.next;
            
        }
        prev.next=prev.next.next;
        runner=null;

    }

    // insertAt(data,n){
        

    //     if(!this.head){
    //         this.head=new Node(data);
    //         return;
    //     }
    //     if(n===0){
    //         this.head=new Node(data,this.head);
    //         return;
    //     }
    //     const previous = this.getAt(n-1) || this.getLast();;
    //     const node = new Node(data,previous.next);
    //     previous.next=node;

    // }

    //another way
    InsertAt(data,n){
        if(!this.head){
            return;
        }
        if(n===0){
            this.head=this.head.next;
            return;
        }
        
        
        let runner=this.head.next;
        let prev=this.head;
        let count=1;
               
        while(runner){
            
            if(count===n){
                break;
            }
            count++;
            runner=runner.next;
            prev.prev.next;
            
        }
        let newNode = new Node(data);
        prev.next=newNode;
        newNode.next=runner;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
          fn(node, counter);
          node = node.next;
          counter++;
        }
      }
    
    *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
        yield node;
        node = node.next;
        }
    }
    reverseNode(){
       let prev=null;
       let next;
       current=this.head;
       while(current){
           next=current.next;
           current.next=prev;
           prev=current;
           current=next;
       }
       this.head=prev;

    }
    //remove neg
    //remove value
    //loop
    //remove k from last

   
}

// const list = new LinkedList();
// list.head = new Node(10);


module.exports = { Node, LinkedList };
