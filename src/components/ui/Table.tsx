import * as React from 'react';

type RefForwardingComponent<T, P> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>;

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={`w-full caption-bottom text-sm ${className || ''}`}
      {...props}
    />
  </div>
)) as RefForwardingComponent<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>;
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={`[&_tr]:border-b ${className || ''}`}
    {...props}
  />
)) as RefForwardingComponent<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>;
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={`[&_tr:last-child]:border-0 ${className || ''}`}
    {...props}
  />
)) as RefForwardingComponent<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>;
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={`border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 ${
      className || ''
    }`}
    {...props}
  />
)) as RefForwardingComponent<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>;
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${
      className || ''
    }`}
    {...props}
  />
)) as RefForwardingComponent<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>;
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={`h-10 px-2 text-left align-middle font-bold text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] ${
      className || ''
    }`}
    {...props}
  />
)) as RefForwardingComponent<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>;
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={`p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] ${
      className || ''
    }`}
    {...props}
  />
)) as RefForwardingComponent<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>;
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={`mt-4 text-sm text-muted-foreground ${className || ''}`}
    {...props}
  />
)) as RefForwardingComponent<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>;
TableCaption.displayName = 'TableCaption';

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
