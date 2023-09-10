"use client";
import { useUser } from "@clerk/nextjs";
import React from 'react'

const OrgList = () => {
    const { isSignedIn, user, isLoaded } = useUser();
    if (!isLoaded) {
        return null;
      }
     
      if (isSignedIn) {
        console.log(user);
        return <div>Hello {user.fullName}!</div>;
      }
     
      return <div>Not signed in</div>;
}

export default OrgList

 