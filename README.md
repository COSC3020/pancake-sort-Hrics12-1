# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

It's looking through the unsorted array linearly so the runtime for comparisons would be $\Theta(n^2)$ because it's doing $n-1$ comparisons for the first iteration, then there is $n-2$ comparisons for the second iteration and so on.. $(n-1)+(n-2)+(n-3)+...+1$. This is an arithmetic series $S = \frac {m*(m+1)}{2}$ and $n-1$ can be subbed in for $m$. $\frac {(n-1)*(n-1+1)}{2}$ = $\frac{(n-1)*n}{2}$ = $\frac {n^2-n}{2}$ = $n^2$. Because the $n^2$ term dominates the $-n$ term. For the flips they're just proportional to the iterations because they will only flip once or worst case twice so the runtime would be $\Theta(n)$  

 certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."

Full disclosure. I think I was writting unessacery flips at the end of my old code, I got pissed and deleted it and it ended up passing the test. I'm now not 100% sure what I was trying to do or why the test would fail after the 8th test.

https://www.geeksforgeeks.org/reverse-an-array-in-groups-of-given-size/
https://algo.monster/liteproblems/969
https://www.geeksforgeeks.org/pancake-sorting/
https://www.geeksforgeeks.org/a-pancake-sorting-question/
