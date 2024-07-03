import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { DataTableColumnHeader } from "@/components/data-column-header"
// import { DataTableRowActions } from "./data-table-row-actions"

export const addressCols: ColumnDef<any>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//         className="translate-y-[2px]"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//         className="translate-y-[2px]"
//       />
//     ),
//     enableSorting: true,
//     enableHiding: false,
//   },
  {
    accessorKey: "address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address" />
    ),
    cell: ({ row }) => <div className="w-[100px]">{row.getValue("address")}</div>,
    enableSorting: true,
    enableHiding: false,
  },

  {
    accessorKey: "state_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="State" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("state_name")}</div>,
    enableSorting: true,
    enableHiding: false,
  },

  {
    accessorKey: "city_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="City" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("city_name")}</div>,
    enableSorting: true,
    enableHiding: false,
  },

  {
    accessorKey: "address_type_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address Type" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("address_type_name")}</div>,
    enableSorting: true,
    enableHiding: false,
  },

  {
    accessorKey: "zipcode",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Zip Code" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("zipcode")}</div>,
    enableSorting: true,
    enableHiding: false,
  },

  {
    accessorKey: "created_by_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created By" />
    ),
    cell: ({ row }) => <div className="w-[100px]">{row.getValue("created_by_name")}</div>,
    enableSorting: true,
    enableHiding: false,
  },

  {
    accessorKey: "updated_by_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Updated By" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("updated_by_name")}</div>,
    enableSorting: true,
    enableHiding: false,
  },

  
//   {
//     id: "actions",
//     cell: ({ row }) => <DataTableRowActions row={row} />,
//   },
]