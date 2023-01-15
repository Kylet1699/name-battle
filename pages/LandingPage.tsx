import React, { useState, useContext } from 'react';
import { Textarea, Button } from '@mantine/core';

import TestContext from '../components/TestContext';

// Context
import { NameInputContextProvider } from '../contexts/NameInputContext/NameInputContext';

function LandingPage() {

  return (
    <div className="bg-black h-screen w-auto">
      <Textarea
        placeholder="hello world"
        label="Name"
        styles={(theme) => ({
          label: {
            color: '#cacaca',
          },
        })}
      />
      <TestContext />
    </div>
  )
}

export default LandingPage
