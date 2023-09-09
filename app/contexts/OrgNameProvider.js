"use client"
import React, { useState } from 'react';
import { OrgNameContext } from './OrgNameContext';

export const OrgNameProvider = ({ children }) => {
  const [name, setName] = useState('');

  return (
    <OrgNameContext.Provider value={{ name, setName }}>
      {children}
    </OrgNameContext.Provider>
  );
};