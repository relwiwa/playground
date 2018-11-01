import React, { Component } from 'react';

import Button from './Button';
import ButtonGroup from './ButtonGroup';
import ButtonGroup2 from './ButtonGroup2';
import ButtonGroup3 from './ButtonGroup3';
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div>
          <p>Alleinstehender Button in seinem orginärem Style. Dieser wird dann in die ButtonGroups eingebunden:</p>
          <Button>
            A button
          </Button>
        </div>
        <div>
          <p>Erste ButtonGroup, wo über React.Children und React.cloneElement type und style props auf die Button children gesetzt werden:</p>
          <ButtonGroup>
            <Button>One Group</Button>
            <Button>Of Buttons</Button>
          </ButtonGroup>
        </div>
        <div>
          <p>Zweite ButtonGroup, wo Hintergrund der buttons über .buttonGroup button Regel in ButtonGroup geändert wird:</p>
          <ButtonGroup2>
            <Button>Another Group</Button>
            <Button>Of Buttons</Button>
          </ButtonGroup2>
        </div>
        <div>
          <p>Dritte ButtonGroup, wo render props benutzt werden, um den Typ an den Button weiter zugeben:</p>
          <ButtonGroup3 type="tc-cargo">
            {({ type }) => <div>
              <Button type={type}>Yet Another Group</Button>
              <Button type={type}>Of Buttons</Button>
            </div>}
          </ButtonGroup3>
        </div>
      </div>
    );
  }
}

export default App;
