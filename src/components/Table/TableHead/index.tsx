function TableHead({ titles }: { titles: string[] }) {
  return (
    <thead className="bg-[#E4E4E7]">
      <tr className="items-center">
        {titles.map((title) => (
          <th className="p-3" key={title}>{title}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;