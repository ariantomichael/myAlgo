const a = [
    {
        title: 'Remove Element',

        problem: `
Given an array and a value, remove all instances of that value in place and return the new length.
        
Do not allocate extra space for another array, you must do this in place with constant memory.
        
The order of elements can be changed. It doesn't matter what you leave beyond the new length.`,

        example: 'Given input array nums = [3,2,2,3] and val=3, Your function should return length 2, with the first two elements of nums being 2.',
        
        structure:
`public class Solution {
    public int removeElement(int[] nums, int val) {
                
    }
}`,
        
        explanation: `
We need to have two indices(fast and slow) and Iterate through the array elements to check if the elements pointed by the fast index is same as the given value. If different, replace the slow index value with the fast index value. If the values are same, skip it and move to the fast index to the next element. When the fast element reaches the end, return the slow value as the number of elements in the resulting array.`,
        
        solution:
`public class Solution {
    public int removeElement(int[] A, int num) {
           
        /* handle empty list */
        if (A.length == 0) return 0;
              
        int slow = 0;
        for (int fast = 0; fast < A.length; fast++) {
            if (A[fast] != num) A[slow++] = A[fast];
        }
        return slow;
    }
}`
    },
    {
        title: 'Remove Duplicates',

        problem: `
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
        
Do not allocate extra space for another array, you must do this in place with constant memory.`,

        example: 'Given input array nums = [1,1,2,2,3],  Your function should return length 3, which is [1,2,3].',
        
        structure: 
`public class Solution{
    public int removeDuplicates(int[] nums) {
        
    }
}`,

        explanation: `
Since we have a sorted array in hand we can solve this problem by iterating through the array elements in one pass. We need to have two indices(fast and slow) and Iterate through the array elements to check if the elements pointed by the indices are same. If different, replace the slow index value with the fast index value. If the values are same, skip it and move to the fast index to the next element. When the fast element reaches the end, return the slow + 1 value as the number of elements in the resulting array.`,
        
        solution: 
`public class Solution {
    public int removeDuplicates(int[] A) {
           
        /* handle empty list */
        if (A.length == 0) return 0;
              
        int j = 0;
        for (int i = 1; i < A.length; i++) {
            if (A[i] != A[j]) A[++j] = A[i];
        }
        return ++j;
    }
}`
    },
    {
        title: 'Same Tree',

        problem: `
Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.`,

        structure:
`/**
* Definition for a binary tree node.
* public class TreeNode {
*     int val;
*     TreeNode left;
*     TreeNode right;
*     TreeNode(int x) { val = x; }
* }
*/
public class Solution {
   public boolean isSameTree(TreeNode p, TreeNode q) {
       
   }
}`,

        explanation: `
Start from the root element of the trees and check if the avaiability of left node and right node are consistent. If the values are same, continue the same process for each subtree.`,

        solution:
`/**
* Definition for a binary tree node.
* public class TreeNode {
*     int val;
*     TreeNode left;
*     TreeNode right;
*     TreeNode(int x) { val = x; }
* }
*/

public class Solution {

 public boolean isSameTree(TreeNode p,
     TreeNode q) {

   /* If both nodes are null, the trees are same */
   if (p == null && q == null)
     return true;

   /* If one of the node is null, but the other
    * node is not null, then the trees are not
    * same */
   if (p == null || q == null)
     return false;

   /* values are different, return false */
   if (p.val != q.val)
     return false;

   /* if values are same execute recursively */
   return isSameTree(p.left, q.left)
       && isSameTree(p.right, q.right);
 }
}`
    },
    {
        title: 'Binary Tree Max Depth',
        problem:`
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 `,
        structure:
`/**
* Definition for a binary tree node.
* public class TreeNode {
*     int val;
*     TreeNode left;
*     TreeNode right;
*     TreeNode(int x) { val = x; }
* }
*/
public class Solution {
   public int maxDepth(TreeNode root) {
       
   }
}
`, 
        explanation: `
The height of a node is defined as the maximum number of steps from the node to any of its leaf nodes. This can be defined recursively as h = max(h_l, h_r) + 1h=max(h?l?? ,h?r?? )+1, with the base case being a h = 0h=0 for a leaf node.
This is not to be confused with the depth of a node which is the number of steps from the tree's root.`, 
        solution:
`/**
* Definition for a binary tree node.
* public class TreeNode {
*     int val;
*     TreeNode left;
*     TreeNode right;
*     TreeNode(int x) { val = x; }
* }
*/
public class Solution {
 public int maxDepth(TreeNode root) {
   if (root == null)
     return 0;
   return Math.max(
       maxDepth(root.left),
       maxDepth(root.right)) + 1;
 }`
    },
    {
        title: 'Merge Sorted Linked Lists',
        problem: `
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.`,
        structure:
`/**
* Definition for singly-linked list.
* public class ListNode {
*     int val;
*     ListNode next;
*     ListNode(int x) { val = x; }
* }
*/
public class Solution {
   public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
       
   }
}`,
        explanation: `
This problem can be solved by following the recursive approach. The lists are traversed from their heads and the values are compared to choose the smallest element (remember that the lists are already sorted in ascending order). Then the smallest element's next is set to the next smallest element by calling the method recursively.`,
        solution:
`
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
  public ListNode mergeTwoLists(
      ListNode l1, ListNode l2) {

    /* if any of the lists is empty, return the
     * other list as output */
    /* this will also serve as the exit condition
     * for recursion */
    if (l1 == null)
      return l2;
    if (l2 == null)
      return l1;

    /* compare the values and merge */
    if (l1.val <= l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoLists(l2.next, l1);
      return l2;
    }
  }
}`        
    }

];

export default a;
