"use client";

import React, { useContext } from 'react';
import { OrgNameContext } from '../contexts/OrgNameContext';


export default function Page() {
  const { name } = useContext(OrgNameContext);
  console.log("hello ", name);
    return (
      <div className="mt-24 flex items-start justify-center h-max">
        Org Created {name}
      </div>
    );
  }
  