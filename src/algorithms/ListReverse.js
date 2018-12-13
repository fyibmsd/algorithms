'use strict';

/**
 * 打印链表
 * @param list {LinkedList}
 * */
export const listToString = list => {
    let str = '';

    let current = list.head;

    while (current) {
        str += current.value;
        current = current.next;
    }

    return str;
};

/**
 * 交换链表头尾
 * @param list {LinkedList}
 * */
export const swapHeadAndTail = list => {
    const { head, tail } = list;

    list.head = tail;
    list.tail = head;
};

/**
 * 单链表就地反转 (递归方式)
 * @param list {LinkedList}
 * */
export const reverseRecursion = list => {
    const reverse = head => {
        if (!head || !head.next)
            return false;

        reverse(head.next);

        head.next.next = head;

        head.next = null;
    };

    reverse(list.head);

    swapHeadAndTail(list);
};

/**
 * 单链表就地反转 (非递归)
 * @param list {LinkedList}
 * */
export const reverseNonRecursion = list => {
    let current = list.head;
    let next    = current.next;
    let prev    = null;

    while (next) {
        current.next = prev;

        prev    = current;
        current = next;
        next    = current.next;
    }

    current.next = prev;

    swapHeadAndTail(list);
};
