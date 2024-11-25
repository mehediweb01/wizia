import { Button } from "@nextui-org/react";
import { cn } from "./lib/cn";

const Buttons = ({ children, className, variant }) => {
  return (
    <Button
      className={cn(
        "text-jungleGreen bg-primary py-4 px-[18px] font-workSans",
        className,
        variant
      )}
      radius="full"
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default Buttons;
