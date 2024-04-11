class Node{
    constructor(val){
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const a = new Node('a')
  const b = new Node('b')
  const c = new Node('c')
  const d = new Node('d')
  const e = new Node('e')
  const f = new Node('f')
  
  
  a.left = b;        //      a
  a.right = c;       //     / \
  b.left = d;        //    b  c
  b.right = e;       //   / \   \
  c.right= f;        //  d   e   f

const depthFirstValues = ( root ) => {
  if( root === null ) return []
  
  const leftValues = depthFirstValues(root.left)
  const rightValues = depthFirstValues(root.right)
  
  return [ root.val, ...leftValues, ...rightValues]
  
}


depthFirstValues(a)