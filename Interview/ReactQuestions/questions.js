// ? How can you pass data between components in React?
// ? How can you fetch data from an API in React?
// ? Benefits of using Axios
// ? What are the two ways of using useState setState and what's the difference
// ? What's the use of useCallback
// ? When should you use useCallback?
/* You should use useCallback when you need to pass a function as a prop to a child component,
 and that function is defined within the parent component. By using useCallback,
 you ensure that the function is not recreated every time the parent component renders,
 which can prevent unnecessary re-renders of the child component.
 */
// ? useEffect vs useLayoutEffect
/* the main difference between useEffect and useLayoutEffect is the timing of when
 the side effect code is executed. useEffect runs asynchronously after the render phase,
 while useLayoutEffect runs synchronously before the browser visually updates the screen.
 In most cases, you will use useEffect, but if you have specific DOM measurement or
 manipulation needs that require synchronous execution before the screen update,
 you might consider using useLayoutEffect.
 */

/*
Render Phase: During this phase, React calculates the changes required to update the virtual DOM based on the new state or props of the component.

Pre-commit Phase: In this phase, React prepares to apply the changes from the virtual DOM to the actual DOM. However, the visual updates are not yet applied to the screen.

Commit Phase: During the commit phase, React applies the changes to the actual DOM, making them visible on the screen.
*/

// ? angular forms
// ? angular subscribe destroy
// ? angular communication
// ? ViewChild?
// ? DI
// ? lazy loading and preloading
