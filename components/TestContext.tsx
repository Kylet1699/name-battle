import React, { useContext } from 'react';
import { NameInputContext } from '../contexts/NameInputContext/NameInputContext';
import { Button } from '@mantine/core'

function TestContext() {
  const { names, setNames } = useContext(NameInputContext);

  return (
    <div>
      hello this is testcontext
      <Button onClick={() => {setNames([...names, "bussy", "slayer"]); console.log(names)}}>Settings</Button>

    </div>
  )
}

export default TestContext;