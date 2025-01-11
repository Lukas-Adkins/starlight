import React from "react";

const ContentRenderer = ({ sectionData }) => {
  const renderTable = (tableData) => {
    if (!tableData?.columns || !tableData?.rows) {
      return (
        <p className="text-dark-textSecondary italic">Invalid table data.</p>
      );
    }
    return (
      <div className="overflow-x-auto border rounded-md bg-dark-surface">
        {/* Table for larger screens */}
        <table
          className="hidden sm:table w-full text-left text-sm border-collapse text-dark-textPrimary"
          aria-label="Data Table"
        >
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
                  className={
                    rowIdx % 2 === 0 ? "bg-dark-field" : "bg-dark-highlight"
                  }
                >
                  {tableData.columns.map((col, colIdx) => (
                    <td
                      key={colIdx}
                      className="px-1 sm:px-2 py-1 border-b border-dark-border"
                    >
                      <div
                        className="max-h-[7.5rem] overflow-y-auto break-words"
                        title={
                          row[col] !== undefined
                            ? row[col]
                            : row[col.toLowerCase()] ||
                              row[col.replace(/\s+/g, "").toLowerCase()] ||
                              Object.values(row)[colIdx] ||
                              "Missing"
                        }
                      >
                        {
                          row[col] !== undefined
                            ? row[col]
                            : row[col.toLowerCase()] ||
                              row[col.replace(/\s+/g, "").toLowerCase()] ||
                              Object.values(row)[colIdx] ||
                              "—"
                        }
                      </div>
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Stacked layout for mobile */}
        <div className="sm:hidden space-y-4">
          {tableData.rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className={`border rounded-md p-4 ${
                rowIdx % 2 === 0 ? "bg-dark-field" : "bg-dark-highlight"
              }`}
            >
              {tableData.columns.map((col) => (
                <div key={col} className="flex justify-between border-b py-2">
                  <span className="font-semibold text-dark-textPrimary">{col}:</span>
                  <span className="text-dark-textSecondary max-w-[70%] break-words">
                    {
                      row[col] !== undefined
                        ? row[col]
                        : row[col.toLowerCase()] ||
                          row[col.replace(/\s+/g, "").toLowerCase()] ||
                          Object.values(row)[tableData.columns.indexOf(col)] ||
                          "—"
                    }
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (!sectionData) {
    return (
      <p className="text-center text-dark-textSecondary italic">
        Section not found.
      </p>
    );
  }

  if (Array.isArray(sectionData.sections)) {
    return (
      <div className="w-full max-w-screen-lg mx-auto space-y-4 px-4 sm:px-6 py-6 bg-dark-background">
        {sectionData.sections.map((sec, idx) => (
          <section
            key={idx}
            id={`section-${idx}`}
            className="space-y-2 sm:space-y-4"
          >
            {sec.heading && (
              <h3 className="text-lg sm:text-xl font-bold text-dark-textPrimary">
                {sec.heading}
              </h3>
            )}
            {sec.content && (
              <p className="text-dark-textSecondary text-sm sm:text-base">
                {sec.content}
              </p>
            )}
            {sec.table && renderTable(sec.table)}
          </section>
        ))}
      </div>
    );
  }

  if (typeof sectionData === "string") {
    return (
      <p className="text-dark-textSecondary text-sm sm:text-base">
        {sectionData}
      </p>
    );
  }

  return (
    <p className="text-center text-dark-textSecondary italic">
      Invalid section format.
    </p>
  );
};

export default ContentRenderer;
