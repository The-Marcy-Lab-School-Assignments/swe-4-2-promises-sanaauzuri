# Short Response Questions

## Question 1: Promise States

What are the three states of a Promise? For each state, explain what it represents and which Promise method (`.then()` or `.catch()`) is used to handle it.

**Your Answer:**
The three states of a Promise are pending, resolved, and rejected. The `pending` state is when the asynchronous operation is still in progress (when the Promise has started, but not finished), the Promise is in a sort of ‘waiting’ mode. The `resolved` state is when the function has succeeded and the Promise method `.then()` is used to handle the resolved state of a Promise. The `rejected` state is when the function has failed or presented an error, the Promise method `.catch()` is used to handle the rejected state of a Promise


## Question 2: Callback Hell vs. Promise Chaining

Explain why deeply nested callbacks (callback hell) are problematic, and describe how Promise chaining with `.then()` solves this problem.

**Your Answer:**

Callback hell, which are deeply nested callbacks, are problematic because of poor readability and confusing error handling.  These nested callbacks need error handling for each individual callback, while Promise chaining with `.then()` only needs one `.catch() method` at the end of the chain to handle errors from all `.then()` steps in the chain.


## Question 3: Error Handling with `.catch()`

If you have a chain of three `.then()` calls followed by a single `.catch()`, and the second `.then()` throws an error, what happens? Why is this behavior useful?

**Your Answer:**

If there is a chain of three `.then()` calls followed by a single `.catch()`, and the second `.then()` throws an error, the third `.then()` is skipped and the `.catch()` is executed. This behavior is useful because instead of needing error handling at each step(callback hell), one `.catch()` acts as a `"catch"`, or safety net for the entire chain. This stops the program from crashing.