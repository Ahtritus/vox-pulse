import React from "react";
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
import Link from "next/link";

const CreateOrgCard = () => {
  return (
    <Card className="mx-10 w-80">
      <CardHeader>
        <CardTitle>Create Organization</CardTitle>
        <CardDescription>
          Create your organization and add properties for feedback management
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your organization" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link href={`/create-org/`}>
          <Button className="w-24">Create</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CreateOrgCard;
