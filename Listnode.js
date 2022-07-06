class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class ListNodeAry {
    constructor() {
        this.head = null;
    }

    append(val) {
        let node = new ListNode(val);
        let p = this.head;
        if (p) {
            while (p.next) {
                p = p.next;
            }
            p.next = node;
        } else {
            this.head = node;
        }
    }

    print(num) {
        if (!this.head) return null;
        let p = this.head;
        let result = '';
        if (p.next) {
            while (p.next) {
                result += (p.val + '=>');
                p = p.next;
            }

            return result += p.val
        } else { return p }
    }
}


// var node = new ListNodeAry();
// node.append(1);
// node.append(2);
// node.append(3);
// node.append(4);
// console.log('.', node.head); 
// console.log('>', node.print());
window.ListNodeAry = ListNodeAry

export default ListNodeAry