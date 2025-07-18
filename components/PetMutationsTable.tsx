import React from "react"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"

interface PetMutationsTableProps {
  petMutations: {
    title: string
    description?: string
    table: {
      headers: string[]
      rows: string[][]
    }
  }
}

const PetMutationsTable: React.FC<PetMutationsTableProps> = ({ petMutations }) => {
  if (!petMutations?.table?.headers || !petMutations?.table?.rows) return null
  return (
    <div className="mt-8 rounded-2xl shadow-xl border border-gray-700/50 bg-gradient-to-br from-[#232526] via-[#414345] to-[#232526] p-6">
      <h2 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">{petMutations.title}</h2>
      {petMutations.description && <p className="mb-4 text-gray-300">{petMutations.description}</p>}
      <div className="overflow-x-auto">
        <Table className="rounded-xl overflow-hidden">
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-blue-700 via-cyan-600 to-green-500">
              {petMutations.table.headers.map((header, idx) => (
                <TableHead key={idx} className="text-white font-bold text-base py-3 px-4 border-b border-gray-600 first:rounded-tl-xl last:rounded-tr-xl">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {petMutations.table.rows.map((row, i) => (
              <TableRow key={i} className="bg-gray-900/80 even:bg-gray-800/80 hover:bg-blue-900/40 transition-colors border-b border-gray-700 last:border-b-0">
                {row.map((cell, j) => (
                  <TableCell key={j} className="py-3 px-4 text-gray-100 text-sm">
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default PetMutationsTable 