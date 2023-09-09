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

const CreateOrgCard = () => {
  const { setName } = useContext(OrgNameContext);
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleClick = (e: any) => {
    e.preventDefault();
    setName(e.target.elements.name.value);
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
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
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
