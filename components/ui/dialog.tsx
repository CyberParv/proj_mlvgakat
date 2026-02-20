'use client';

import * as React from "react";
import { cn } from "@/lib/utils";

interface DialogContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DialogContext = React.createContext<DialogContextValue | undefined>(undefined);

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

function Dialog({ open: openProp, onOpenChange, children }: DialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const open = openProp ?? uncontrolledOpen;

  const handleOpenChange = (nextOpen: boolean) => {
    if (openProp === undefined) {
      setUncontrolledOpen(nextOpen);
    }
    if (onOpenChange) {
      onOpenChange(nextOpen);
    }
  };

  return (
    <DialogContext.Provider value={{ open, onOpenChange: handleOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
}

interface DialogTriggerProps {
  asChild?: boolean;
  children: React.ReactElement;
}

function DialogTrigger({ asChild, children }: DialogTriggerProps) {
  const context = React.useContext(DialogContext);
  if (!context) return children;

  const triggerProps = {
    onClick: () => context.onOpenChange(true),
  };

  if (asChild) {
    return React.cloneElement(children, triggerProps);
  }

  return (
    <button type="button" {...triggerProps}>
      {children}
    </button>
  );
}

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
}

function DialogContent({ children, className }: DialogContentProps) {
  const context = React.useContext(DialogContext);
  if (!context || !context.open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
      <div className={cn("relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg", className)}>
        <button
          className="absolute right-4 top-4 text-sm text-white/70"
          onClick={() => context.onOpenChange(false)}
          type="button"
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

export { Dialog, DialogTrigger, DialogContent };
