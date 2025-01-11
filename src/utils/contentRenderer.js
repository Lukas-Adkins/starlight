import React from "react";

const ContentRenderer = ({ sectionData }) => {
  const renderTable = (tableData) => {
    if (!tableData?.columns || !tableData?.rows) {
      return <p className="text-dark-textSecondary italic">Invalid table data.</p>;
    }
    return (
      <div className="overflow-x-auto border rounded-md bg-dark-surface">
        <table className="w-full text-left text-sm border-collapse text-dark-textPrimary" aria-label="Data Table">
          <thead className="bg-dark-highlight border-b border-dark-border">
            <tr>
              {tableData.columns.map((col, idx) => (
                <th
                  key={idx}
                  scope="col"
                  className="px-2 sm:px-4 py-2 font-semibold text-dark-textPrimary"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.length === 0 ? (
              <tr>
                <td
                  colSpan={tableData.columns.length}
                  className="px-2 sm:px-4 py-2 text-center text-dark-textSecondary"
                >
                  No data available.
                </td>
              </tr>
            ) : (
              tableData.rows.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className={rowIdx % 2 === 0 ? "bg-dark-field" : "bg-dark-highlight"}
                >
                  {Object.values(row).map((value, colIdx) => (
                    <td key={colIdx} className="px-2 sm:px-4 py-2 border-b border-dark-border">
                      {value}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  };

  if (!sectionData) {
    return <p className="text-center text-dark-textSecondary italic">Section not found.</p>;
  }

  if (Array.isArray(sectionData.sections)) {
    return (
      <div className="w-full max-w-screen-lg mx-auto space-y-4 px-4 sm:px-6 py-6 bg-dark-background">
        {sectionData.sections.map((sec, idx) => (
          <section key={idx} id={`section-${idx}`} className="space-y-2 sm:space-y-4">
            {sec.heading && <h3 className="text-lg sm:text-xl font-bold text-dark-textPrimary">{sec.heading}</h3>}
            {sec.content && <p className="text-dark-textSecondary text-sm sm:text-base">{sec.content}</p>}
            {sec.table && renderTable(sec.table)}
          </section>
        ))}
      </div>
    );
  }

  if (typeof sectionData === "string") {
    return <p className="text-dark-textSecondary text-sm sm:text-base">{sectionData}</p>;
  }

  return <p className="text-center text-dark-textSecondary italic">Invalid section format.</p>;
};

export default ContentRenderer;
