var deleteDuplicates = function (head) {
    if (!head) return head;
    var obj = { [head.val]: true };
    var pre = head;
    var cur = head.next;
    while (cur) {
        if (obj[cur.val]) {
            pre.next = cur.next;
            cur = cur.next;
        } else {
            obj[cur.val] = true;
            pre = cur;
            cur = cur.next;
        }
    }
    return head
};

var deleteDuplicates = function (head) {
    if (!head) return head;
    head.next = deleteDuplicates(head.next);
    return (head.next && head.next.value === head.value) ? head.next : head
};