import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

interface TypeScriptComponentProps {

}

function handleClick() {
  console.log('Hello, World!');
}

class App extends React.Component<TypeScriptComponentProps, {}> {
    render() {
        return (<Button onClick={handleClick} bsClass="glyphicon glyphicon-new-window">Click Me!</Button>)
    }
}


ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
