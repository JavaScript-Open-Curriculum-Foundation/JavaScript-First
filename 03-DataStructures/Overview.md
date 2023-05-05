## Array:
Access: O(1)
Search: O(n)
Insertion: O(n) (worst-case)
Deletion: O(n) (worst-case)

## Linked List:
Access: O(n)
Search: O(n)
Insertion: O(1) (head/tail insertion)
Deletion: O(1) (head/tail deletion)

## Stack:
Access: O(n)
Search: O(n)
Push: O(1)
Pop: O(1)

## Queue:
Access: O(n)
Search: O(n)
Enqueue: O(1)
Dequeue: O(1)

## Tree:
Access: O(n) (worst-case), O(log n) (balanced)
Search: O(n) (worst-case), O(log n) (balanced)
Insertion: O(n) (worst-case), O(log n) (balanced)
Deletion: O(n) (worst-case), O(log n) (balanced)

## Graph:
Access: O(|V| + |E|)
Search: O(|V| + |E|)
Insertion: O(1)
Deletion: O(1)

## Hash Table / Hash Map / Hash Set:
Access: O(1) (average), O(n) (worst-case)
Search: O(1) (average), O(n) (worst-case)
Insertion: O(1) (average), O(n) (worst-case)
Deletion: O(1) (average), O(n) (worst-case)

## Set:
Access: N/A (sets do not support indexed access)
Search: O(n) (worst-case)
Insertion: O(1) (average), O(n) (worst-case)
Deletion: O(1) (average), O(n) (worst-case)

## Bit Set:
Access: O(1)
Search: O(n) (worst-case)
Insertion: O(1)
Deletion: O(1)


Primitive Data Structures: These are the basic building blocks of data structures and are supported by most programming languages natively. Primitive data structures include:

a. Integer
b. Float
c. Double
d. Character
e. Boolean

Non-Primitive Data Structures: These are more complex and are typically built using primitive data structures. Non-primitive data structures can be further classified into several categories:

a. Linear Data Structures: Elements are arranged sequentially, and each element is connected to its previous and next elements. Examples include:

Arrays
Linked Lists
Stacks
Queues
b. Non-Linear Data Structures: Elements are connected in a hierarchical manner, and there is no specific sequence to their arrangement. Examples include:

Trees
Graphs
c. Hash-based Data Structures: These use a hash function to map keys to their respective values, allowing for efficient access and manipulation. Examples include:

Hash Tables
Hash Maps
Hash Sets
d. Set-based Data Structures: These store a collection of distinct elements without any specific order. Examples include:

Sets
Bit Sets
There are also specialized data structures designed for specific use cases, such as Trie, Heap, Bloom Filter, and Disjoint Set. The choice of data structure depends on the requirements of the problem you are solving, the operations you need to perform, and the efficiency and complexity constraints.
