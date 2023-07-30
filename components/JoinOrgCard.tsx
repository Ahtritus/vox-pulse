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

const JoinOrgCard = () => {
  return (
    <Card className="mx-10 w-80">
      <CardHeader>
        <CardTitle>Join Organization</CardTitle>
        <CardDescription>
          Join your organization and start collecting feedback for your property
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Organization ID</Label>
              <Input id="name" placeholder="ID of your organization" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className='w-24'>Join</Button>
      </CardFooter>
    </Card>
  );
};

export default JoinOrgCard;
