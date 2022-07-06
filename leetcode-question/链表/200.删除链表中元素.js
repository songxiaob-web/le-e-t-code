function removeElement(head, val) {
  /**
   * 递归写法
   * */
  // 1 => 2 =>3 => 4 => 2 => 5 
  // 1 . 3   4   5
  // 链表中 不能存在跳过 或者 中间元素 node.next 为null的情况 
  // 所以删除元素最好方式就是 从后向前删
  // 所以 如果要在链表中删除元素, 就需要给链表中 要删除的元素 后续元素 向上 赋值, 
  // 就是找到 想要删除的元素, 然后将前一个 node.next 赋值为 删除元素后面的节点  node.next  =  delete node .next
  // 删除链表中 value 一致的元素 然后返回完成的链表
  if (!head) { return head };
  head.next = removeElement(head.next, val); // 最终 会推到最后一个 节点
  // 如果节点的value = value 删除当前节点 指针指向后续节点 
  // 如果要删除元素, 记住 先要走到最后一个节点, 从后向前删除
  // 最后一个节点如果 head.val === val  向后走 但是 后续没有了 就返回 null;
  // 然后 向上走 到第4个节点
  // 如果 有 返回null  没有 就返回当前的节点 ( 等于是删除了节点以后的链表 )
  return head.val === val ? head.next : head
}


function removeElement(head, val) {
  if (!head) return null
  /**
   * 遍历的写法
   * */
  // 定义一个常规节点, 保留 head的地址, 
  // elm.next 永远指向 遍历中的节点
  const elm = {
    next: head
  }
  let p = elm;
  while (p.next) {
    if (p.val === val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }

  // 最终的 head(头) 节点 代表整个链表
  return elm.next
}

removeListNode();
