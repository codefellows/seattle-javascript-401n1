![cf](https://i.imgur.com/7v5ASc8.png) lab 03 js-runtime buffers
====

# Topics
* binary 
 * to decimal
 * to hex
 * to ascii
* javascript
 * heap
 * call stack
 * Node APIs
 * event loop
 * callback queue
* buffers
* fs module

# Binary
Binary working with numbers in base2. Decimal is working with numbers in base 10. Base two means that each digit may only have two possible values, zero or one. People have created standardized rules for encoding and decoding binary numbers into different types of data. Common data conversions are to translate bindary to decimal, hex, or alphanumeric characters (letters). the letter '1' and the number one are stored differently because they have different processes of encoding and decoding to and from binary. 

To look at an ascii table  
**run** `man ascii`  

 * [binary to decimal, hex, and octal](https://www.youtube.com/watch?v=2UwxdCLFW70)
 * [binary to ascii and utf8 characters](https://www.youtube.com/watch?v=kW_vetzPU_I)
 * [big endian vs little endian](https://www.youtube.com/watch?v=JrNF0KRAlyo)

# javascript

## V8 runtime

V8 is the part of node that actualy runs your javascript. it is single threaded, which means that your javascript can only do one thing at a time.

#### heap

the part of v8 that manages all of the memory for each of your data (aka. the values you store in variables and pass from function to function)

#### call stack

the part of v8 that keeps track of what part of the program is running at a time. every time a function gets invoked it gets pushed onto the call stack. and everytime a function returns it get poped from the call stack.

## Node APIs

Librarys written in C++ that do al of the I/O for node. They are not writeen in javascript and are able to run I/O opperations concurrently. Everytime the node javascript makes a call to a Node API, it passes it the data it need for it to complete a task. For ASYNC jobs this includes a callback. whenever the Node API has finnsed its tack, it passes the callback to the callback queue.

## callback queue

The callback queue is a queue where callbacks from completed Node APIs wait until the event loop puts them on to the call stack where they actualy get to run.

## event loop

The event loop puts the next callback on the call stack whenever there is nothing running on the casll stack.

# Buffers
* buffers are a datatype in node that represent an Array of Bytes
* buffers have methods from turrning those bytes into integers, floting point numbers, characters, ect.
* Most of the data that gets passed into a callback from I/O opperations from the Node APIs is of the type Buffer

# fs module

the `fs` module is the built-in node module for accesing the file system. 
