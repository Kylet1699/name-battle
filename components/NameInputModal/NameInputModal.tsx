import React, { useContext, useState } from 'react';

// context
import { NameInputContext } from '../../contexts/NameInputContext/NameInputContext';
import NameCard from '../NameCard/NameCard';

// mantine
import { Textarea, TextInput, Button, ScrollArea } from '@mantine/core'

function NameInputModal() {
  const { names, setNames } = useContext(NameInputContext)
  const [ newName, setNewName ] = useState<string>("");

  return (
    <div className="max-w-2xl flex justify-center m-auto flex-col">
      <div className="m-auto w-full">
        <TextInput 
          value={newName}
          onChange={(event: React.FormEvent<HTMLInputElement>) => setNewName(event.currentTarget.value)}
          placeholder="Hello World"
          label="Input Name"
          styles={(theme) => ({
            label: {
              color: '#cacaca',
            }
          })}
        />
      </div>
      <div className="mt-5">
        <Button onClick={() => setNames([...names, newName])}>
          Add Name
        </Button>
        <Button onClick={() => setNames([])}>Clear Names</Button>
      </div>
      <ScrollArea style={{ height: 700 }} className="mt-10">
        { names.map((name, index) => <NameCard key={index} name={name} />)}
      </ScrollArea>
      <Button>Start</Button>
    </div>
  )
}

export default NameInputModal;