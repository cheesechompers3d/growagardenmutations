import React, { useState } from "react"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"

interface MutationsTableProps {
  mutations: {
    title: string
    description?: string
    table: {
      headers: string[]
      rows: string[][]
    }
    details?: Record<string, string>
  }
}

const MutationsTable: React.FC<MutationsTableProps> = ({ mutations }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  if (!mutations?.table?.headers || !mutations?.table?.rows) return null
  return (
    <div className="mt-8 rounded-2xl shadow-xl border border-gray-700/50 bg-gradient-to-br from-[#232526] via-[#414345] to-[#232526] p-6">
      <h2 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">{mutations.title}</h2>
      {mutations.description && <p className="mb-4 text-gray-300">{mutations.description}</p>}
      <div className="overflow-x-auto">
        <Table className="rounded-xl overflow-hidden">
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500">
              <TableHead className="text-white font-bold text-base py-3 px-4 border-b border-gray-600 first:rounded-tl-xl">#</TableHead>
              {mutations.table.headers.map((header, idx) => (
                <TableHead key={idx} className="text-white font-bold text-base py-3 px-4 border-b border-gray-600 first:rounded-tl-xl last:rounded-tr-xl">
                  {header}
                </TableHead>
              ))}
              <TableHead className="text-white font-bold text-base py-3 px-4 border-b border-gray-600 last:rounded-tr-xl text-center" style={{width: 80}}></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mutations.table.rows.map((row, i) => {
              const mutationName = row[0]
              const details = mutations.details?.[mutationName]
              const isOpen = openIndex === i
              return (
                <React.Fragment key={i}>
                  <TableRow
                    className={
                      "bg-gray-900/80 even:bg-gray-800/80 hover:bg-purple-900/40 transition-colors border-b border-gray-700 last:border-b-0"
                    }
                  >
                    <TableCell className="py-3 px-4 text-gray-300 text-sm font-mono font-bold">{i + 1}</TableCell>
                    {row.map((cell, j) => (
                      <TableCell key={j} className="py-3 px-4 text-gray-100 text-sm">
                        {cell}
                      </TableCell>
                    ))}
                    <TableCell className="py-3 px-2 text-center">
                      <button
                        onClick={e => {
                          e.stopPropagation()
                          if (details) setOpenIndex(isOpen ? null : i)
                        }}
                        disabled={!details}
                        aria-label={isOpen ? "Collapse details" : "Expand details"}
                        style={{ cursor: details ? 'pointer' : 'not-allowed', background: 'none', border: 'none', outline: 'none', padding: '4px 8px', display: 'flex', alignItems: 'center', gap: 4 }}
                        className={details ? 'hover:bg-purple-800/40 rounded transition' : ''}
                      >
                        <span style={{
                          display: 'inline-block',
                          transition: 'transform 0.2s',
                          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                          color: details ? '#fff' : '#888',
                          fontSize: 18
                        }}>
                          ▶
                        </span>
                        <span style={{
                          color: details ? '#fff' : '#888',
                          fontSize: 14,
                          fontWeight: 500,
                          marginLeft: 4,
                          minWidth: 90,
                          display: 'inline-block',
                          textAlign: 'left',
                        }}>
                          {details ? (isOpen ? 'Hide Guide' : 'View Guide') : 'No Info'}
                        </span>
                      </button>
                    </TableCell>
                  </TableRow>
                  {isOpen && details && (
                    <TableRow>
                      <TableCell colSpan={row.length + 1} className="bg-purple-950/80 text-gray-200 text-sm p-4 border-b border-purple-700">
                        {details}
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default MutationsTable 