import { Table } from "@chakra-ui/react";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";


const LisTable = ({ columns,data }) => {


    const table = useReactTable({
        columns: columns,
        data : data,
        getCoreRowModel: getCoreRowModel()
        

    })

    return(
        <Table.Root backgroundColor={'#181A1B'}>
            <Table.Header>
                {
                    table.getHeaderGroups().map(headerGroup=>(
                        <Table.Row key={headerGroup.id}>
                            {
                                headerGroup.headers.map(header=>(
                                    <Table.ColumnHeader key={header.id} colSpan={header.colSpan}>{
                                        flexRender(header.column.columnDef.header,header.getContext())
                                    }</Table.ColumnHeader>
                                ))
                            }
                        </Table.Row>
                    ))
                }
            </Table.Header>
            <Table.Body>
                {
                    table.getRowModel().rows.map((row)=>{
                        return(
                            <Table.Row key={row.id}>
                                {
                                    row.getVisibleCells().map((cell)=>{
                                        return(
                                            <Table.Cell key={cell.id}>
                                                {
                                                    flexRender(cell.column.columnDef.cell,cell.getContext())
                                                }
                                            </Table.Cell>
                                        )
                                    })
                                }
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        </Table.Root>

    );
};

export default LisTable;