import { Button } from "@nextui-org/react";
import { cn } from "./lib/cn";

const Buttons = ({ children, className, variant }) => {
  return (
    <Button
      className={cn(
        "text-jungleGreen bg-primary md:py-4 py-2 md:px-[18px] px-[14px] font-workSans font-semibold -tracking-[1%] leading-4 text-base",
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
