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