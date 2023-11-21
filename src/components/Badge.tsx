import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Badge({ icon, tooltip: tooltip }: {icon: React.ReactNode, tooltip: React.ReactNode}) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {icon}
          </TooltipTrigger>
          <TooltipContent>
            {tooltip}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }