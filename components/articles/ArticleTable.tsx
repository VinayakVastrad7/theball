type ArticleTableProps = {
  headers?: string[];
  rows?: string[][];
};
 
export default function ArticleTable({
  headers = [],
  rows = [],
}: ArticleTableProps) {
  if (!headers.length || !rows.length) {
    return null;
  }
 
  return (
    // On large screens the table breaks out slightly wider than the text column.
    <div className="my-12 md:my-14 lg:-mx-12">
      <div className="overflow-x-auto rounded-sm border border-zinc-800 bg-zinc-900/40">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-red-500/70 bg-zinc-900">
              {headers.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="whitespace-nowrap px-4 py-4 text-xs font-semibold uppercase tracking-widest text-zinc-200 md:px-5"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
 
          <tbody className="divide-y divide-zinc-800">
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="transition-colors even:bg-white/[0.02] hover:bg-zinc-800/60"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-4 leading-6 md:px-5 ${
                      cellIndex === 0
                        ? "font-semibold text-white"
                        : "text-zinc-400"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 