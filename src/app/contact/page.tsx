import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function About() {
  return (
    <div className="max-w-screen-xl m-auto py-[4rem]">
      <div className="max-w-[500px] m-auto contact flex flex-col gap-4 flex-[2]">
        <h4 className="scroll-m-20 text-xl text-center font-semibold tracking-tight">
          Contact Us
        </h4>
        <div className="footer_links flex flex-col gap-4">
          <div className="flex flex-col gap-4 w-full">
            <div className="contact_name flex gap-2">
              <Input
                className="bg-white rounded border-gray-300"
                type="text"
                placeholder="First Name"
              />
              <Input
                className="bg-white rounded border-gray-300"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <Input
              className="bg-white rounded border-gray-300"
              type="email"
              placeholder="Your Email"
            />
            <Textarea
              className="w-full bg-white rounded border-gray-300"
              placeholder="Type your message here."
            />
            <Button className="bg-black text-white rounded">
              Send message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
