"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useContext, useState } from "react";
import { OrgNameContext } from "../app/contexts/OrgNameContext";
import { useRouter } from "next/navigation";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const CreateOrgCard = () => {
  const { setName } = useContext(OrgNameContext);
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleClick = async (e: any) => {
    e.preventDefault();

    const orgName = e.target.elements.name.value;
    try {
      const response = await fetch("/api/create", {
        method: "POST",
        body: JSON.stringify({ orgName })
      });
      
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      
      const data = await response.json();
      console.log(data.orgName);
    } catch (error) {
      console.log(error);
    }
    router.push(`/create-org`);
  };

  return (
    <form onSubmit={handleClick}>
      <Card className="mx-10 w-80">
        <CardHeader>
          <CardTitle>Create Organization</CardTitle>
          <CardDescription>
            Create your organization and add properties for feedback management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="orgName">Name</Label>
              <Input
                id="orgName"
                placeholder="Name of your organization"
                required
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="w-24" disabled={!inputValue}>
            Create
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default CreateOrgCard;
