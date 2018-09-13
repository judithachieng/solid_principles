## SOLID PRINCIPLES
SOLID Principles with Javascript examples.

SOLID principles are the five principles that are essential for building software. These principles when applied enable developers to write better quality code, achieve scalability and avoid code breaking everytime a change isintroduced. The sytems created based on this principles are easy to maintain , reuse and extend over time.

## Single Responsibility Principle

>A class should have one, and only one, reason to change.

One class should only serve one purpose. A responsibility here could be considered to be a reason  to change. This does not imply that each class should have only one method but they should all relate directly to the responsibility of the class. All the methods and properties should all work towards the same goal. When a class serves multiple purposes or responsibility then 

[example code here](single-responsibility/index.js)

## Open-closed Principle :

>Entities should be open for extension, but closed for modification.

Software entities (classes, modules, functions, etc.) be extendable without actually changing the contents of the class you're extending. This principle reduces the risk of getting new errors by limiting changes to existing code. If we could follow this principle strongly enough, it is possible to then modify the behavior of our code without ever touching a piece of original code.

[example code here](open-closed/index.js)

## Liskov Substitution Principle :

>Liskov Substitution Principle states that "Objects in a program should be replaceable with instances of their subtypes without altering the correctness of the program" 

The Liskov Substitution principle was introduced by Barbara Liskov in her conference 
keynote "Data abstraction" in 1987.Barbara Liskov and Jeannette Wing formulated 
the principle succinctly in a 1994 paper as follows:

>Let φ(x) be a property provable about objects x of type T. Then φ(y) should be true for objects y of type S where S is a subtype of T.


The human-readable version repeats pretty much everything that Bertrand Meyer 
already has said, but it relies totally on a type-system:

>1. Preconditions cannot be strengthened in a subtype.
>2. Postconditions cannot be weakened in a subtype.
>3. Invariants of the supertype must be preserved in a subtype.

Robert Martin made the definition sound more smoothly and concisely in 1996 :

>Functions that use pointers of references to base classes must be able to use objects of derived classes without knowing it.

Or simply : Subclass/derived class should be substitutable for their base/parent class.

It states that any implementation of an abstraction (interface) should be substitutable in any place that the abstraction is accepted. Basically, it takes care that while coding using interfaces in our code, we not only have a contract of input that the interface receives but also the output returned by different Classes implementing that interface; they should be of the same type.

[example code here](liskov-substitution/index.js)

## Interface Segregation Principle
>Classes that interface, should not be forced to implement methods they do not use.
This rule means that  we should break our interfaces in many smaller ones, so they better satisfy the exact needs of our clients.

Similar to the Single Responsibility Principle, the goal of the Interface Segregation Principle is to minimize the side consequences and repetition by dividing the software into multiple, independent parts.

[example code here](interface-segregation/index.js)

## Dependency Inversion
>High level modules should not depend on low level modules ,but rather both should depend on abstraction.  

Abstractions should not depend upon details . Details should depend upon abstractions.By applying the Dependency Inversion the modules can be easily changed by other modules just by changing the dependency module and High-level module will not be affected by any changes to the Low-level module.

[example code here](depedency-inversion/index.js)
