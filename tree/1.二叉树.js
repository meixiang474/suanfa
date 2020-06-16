class Node {
  constructor(key){
    this.key = key
    this.left = null
    this.right = null
  }
}
class BinarySearchTree {
  constructor(){
    this.root = null
  }
  insert(key){
    const newNode = new Node(key)
    if(!this.root){
      this.root = newNode
    }else{
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(node, newNode){
    if(newNode.key < node.key){
      if(!node.left){
        node.left = newNode
      }else{
        this.insertNode(node.left, newNode)
      }
    }else{
      if(!node.right){
        node.right = newNode
      }else{
        this.insertNode(node.right, newNode)
      }
    }
  }
  // 先序遍历
  preOrderTraversal(handler){
    this.preOrderTraversalNode(this.root, handler)
  }
  preOrderTraversalNode(node, handler){
    if(node){
      handler(node.key)
      this.preOrderTraversalNode(node.left, handler)
      this.preOrderTraversalNode(node.right, handler)
    }
  }
}

let bst = new BinarySearchTree()
bst.insert(11)
bst.insert(5)
bst.insert(15)
bst.insert(6)
bst.insert(3)
bst.insert(30)
bst.preOrderTraversal((key) => {
  console.log(key)
})