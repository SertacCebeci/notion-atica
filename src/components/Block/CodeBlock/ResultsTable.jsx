function ResultTable({ results }) {
  if (!results || !results[0]) {
    return <></>;
  }

  const columns = Object.keys(results[0]);

  return (
    <table className="ml-6 w-16/20 self-center">
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c}>
              <div className="text-lg">{c}</div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {results.map((r) => (
          <tr key={r.id + "row"}>
            {Object.values(r).map((v) => (
              <td key={v}>
                <div className="text-sm">{v}</div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultTable;
