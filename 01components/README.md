# Components

1. Components are like function that return JSX code, JSX is very similar to html code but this is not html code, this code convert JavaScript.
2. Components is nothing , it is section of your entire webpage, created a component by created a function that return a JSX code, similar to html, but not html code.
3. A piece of code that can reuse(independent).
4. Component Name must start with an Capital letter.

SYNTAX:

    function Component_Name(){
        return (
            <h1> </h1>
            <div> </div>
        )
    }
    export default Components_Name


5. Mainly Two types of Component
    1. Functional Component: These are plain JavaScript functions that return React elements (usually JSX).No <strong>this</strong> keyword is used.
    2. class Component: These are ES6 classes that extend React.Component.Can maintain internal state and lifecycle methods.Use <strong>this</strong> to refer to the component instance.

