function findLinkHasCircle(head) {
  // 创建 set 集合 保留曾经有过的节点
  let nodeSet = new Set();
  let p = head;
  if (!p.next) return false;
  while (p.next) {
    if (!nodeSet.has(head)) {
      nodeSet.add(head);
      p = p.next;
    } else {
      return true
    }
  }
}

function hasCircle(head) {
  let slow = head;
  let fast = head;
  while (!slow.next || !fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow.val === fast.val) {
      return true;
    }
  }

  return false
}