import React, { useState, useContext } from 'react';

// component
import NameInputModal from '../components/NameInputModal/NameInputModal';

function LandingPage() {

  return (
    <div className="bg-black h-screen w-auto">
      <NameInputModal />
    </div>
  )
}

export default LandingPage
