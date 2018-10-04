class DoublyLinkedList extends LinkedList {
    constructor() {
        super();
        this.tail = null;

    }

    append(element) {
        let node = new Node(element);
        if (this.isEmpty()) {
            this.head = node;

        } else {
            this.tail.next = node;
            node.previous = this.tail;

        }
        this.tail = node;
        this.lenght++;
    }

    insert(position, element) {
        if (position >= 0 && position <= this.lenght) {
            let node = new Node(element),
                current = this.head,
                index = 0;
            if (position === 0) {
                if (!this.head) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    this.head.previous = node;
                    this.head = node;
                }
            } else if (position == this.lenght) {
                node.previous = this.tail;
                this.tail.next = node;
                this.tail = node;
            } else {
                while (index < position) {
                    index++
                    current = current.next;
                }
                current.previous.next = node;
                node.previous = current.previous;
                current.previous = node;
                node.next = current;
            }
            this.lenght++;
            return true;
        }
        return false;
    }

    removeAt(position) {
        if (position >= 0 && position < this.lenght) {
            let index = 0,
                current = this.head;
            if (position == 0) {
                if (this.lenght == 1) {
                    this.head = this.tail = null;
                } else {
                    this.head = current.next;
                    this.head.previous = null;
                    current.next = null;
                }
            } else if (position == this.lenght-1) {
                current = this.tail;
                this.tail = current.previous;
                this.tail.next = null;
                current.previous = null;
            } else {
                while (index < position) {
                    index++;
                    current = current.next;
                }
                let x = current.previous,
                    y = current.next;
                x.next = y;
                y.previous = x;
                current.next = current.previous = null;
            }
            this.lenght--;
            return current.element;
        }
        return null;
    }


}