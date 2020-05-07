// delete a node from a specific position

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function deleteNode(head, position) {
    if (position == 0) return head.next;
    let current = head;
    let count = 1;
    while (current) {
        if (count === position ) {
            current.next = current.next ? current.next.next : current.next;
            return head;
        }
        current = current.next;
        count += 1;
    }

}