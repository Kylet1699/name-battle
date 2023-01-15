import React, { useState, useContext } from 'react';
import { Textarea, Button } from '@mantine/core';

import TestContext from '../components/TestContext';

// Context
import { NameInputContextProvider } from '../contexts/NameInputContext/NameInputContext';

function LandingPage() {

  return (
    <NameInputContextProvider>
      <div className="bg-black h-screen w-auto">
        <Textarea
          placeholder="hello world"
          label="Name"
          styles={(theme) => ({
            description: {
              color: '#FFFFFF',
            },
          })}
        />
        <TestContext />
      </div>
    </NameInputContextProvider>
  )
}

export default LandingPage
