/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  var p = null;
  if (list1.val <= list2.val) {
    p = list1;
    p.next = mergeTwoLists(p.next, list2)
  } else {
    p = list2;
    p.next = mergeTwoLists(list1, p.next)
  }

  return p
};