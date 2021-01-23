# Flux
Pattern for managing data flow in my application. 
! Data flows in one direction

# Flux Parts
1. Dispatcher
2. Store
3. Action
4. View

## Dispatcher
Receives actions and dispatches them to stores that have registered with the dispatcher.
Every store will receive every action. There should only be one singleton dispatcher in each application.

## Store
Holds data to an application.

# Flux solves conceptual problems
Unidirectional data-flow, traceability, consistency, component layering and loosely coupled components.
