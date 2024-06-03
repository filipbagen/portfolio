import * as React from 'react';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className="flex flex-col p-10 items-start gap-4 self-stretch rounded-3xl bg-white/80 shadow-custom"
    {...props}
  />
));
Card.displayName = 'Card';

// const CardHeader = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div ref={ref} className="flex flex-col" {...props} />
// ));
// CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className="text-lg font-semibold tracking-tight mb-2"
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className="text-sm text-muted-foreground" {...props} />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => <div ref={ref} className="" {...props} />);
CardContent.displayName = 'CardContent';

// const CardFooter = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div ref={ref} className="flex items-center" {...props} />
// ));
// CardFooter.displayName = 'CardFooter';

const CardContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col items-start p-3 gap-4 self-stretch rounded-3xl border border-[#89236C] border-opacity-10 bg-[#89236C] bg-opacity-5 ${className}`}
    {...props}
  />
));
CardContainer.displayName = 'CardContainer';

export {
  Card,
  //   CardHeader,
  //   CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardContainer,
};
