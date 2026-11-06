import { Button } from "@heroui/react";

export default function Navbar(){
    return (
      <div className="w-full flex justify-between items-center px-4 py-2 ">
        <img src="icons/luster.png" alt="luster" className="h-8" />
        <div className="flex justify-between gap-2 text-sm text-blue-500">
          <Button variant="tertiary">Home</Button>
          <Button variant="tertiary">Our Story</Button>
          <Button variant="tertiary">FAQ</Button>
          <Button variant="tertiary">About</Button>
        </div>
     
        <img src="icons/luster.png" alt="luster" className="h-8" />
      </div>
    );
}