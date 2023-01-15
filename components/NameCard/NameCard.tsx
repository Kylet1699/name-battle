import React, { useContext } from 'react';
import { NameInputContext } from '../../contexts/NameInputContext/NameInputContext';

// mantine
import { Card, Text } from '@mantine/core';

function NameCard({ ...props }) {
  const { name } = props;

  return (
    <div className="py-1">
      <Card>
        <Text> {name} </Text>
      </Card>
    </div>
  )
}

export default NameCard;