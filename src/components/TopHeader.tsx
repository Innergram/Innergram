import { Link } from "react-router-dom";

import { ModeToggle } from "@/components/ModeToggle";

export default function TopHeader() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div>
        <Link to="/">
          <h1 className="text-4xl font-bold font-marker text-primary">
            Innergram
          </h1>
        </Link>
      </div>

      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
