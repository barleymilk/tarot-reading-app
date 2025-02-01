import styles from './Table.module.css';

const Table = ({ headers, data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          {headers.map((header, index) => (
            <th key={index} className={styles.th}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className={styles.tr}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className={styles.td}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
