class OrderedLinkedList extends LinkedList {
    constructor(){
      super()
    }
  
    insertOrdered(element) {
      if (super.isEmpty()) {
        super.append(element)
      } else {
        let index = 0
        while(index < super.size()) {
          if (super.getElement(index) > element) {
            super.insert(index, element)
            return
          } else if(index == super.size() - 1) {
            super.append(element)
            return
          }
          index++
        }
      }
    }
  
    append(element) {
      this.insertOrdered(element)
    }
  }