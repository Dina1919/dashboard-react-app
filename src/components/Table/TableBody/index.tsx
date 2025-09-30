type PropTypes = {
  key: number;
  avatar: string;
  firstname: string;
  lastname: string;
  username: string;
  role: string;
  status: boolean;
  date: Date;
};

type Props = {
  tableData: PropTypes[];
};

function TableBody({ tableData }: Props) {
  return (
    <tbody className="bg-white">
      {tableData.map((data) => (
        <tr key={data.key} className="border-b border-b-[#E8E8E8] hover:bg-[#3333331A]">
          <td>
            <img
              src={data.avatar}
              alt={`${data.firstname} ${data.lastname}`}
              className="w-10 h-10 rounded-full mx-auto"
            />
          </td>
          <td className="p-4">
            {data.firstname} {data.lastname}
          </td>
          <td className="p-4">{data.username}</td>
          <td>{data.role}</td>
          <td className="p-4 w-32">
            <div
              className={`w-full text-center px-2 py-1 rounded-full ${
                data.status
                  ? "border border-[#0088FF] text-[#0088FF] bg-[#0088FF33]"
                  : "border border-[#FF9D00] text-[#FF9D00] bg-[#FF9D0033]"
              }`}
            >
              {data.status ? "فعال" : "غیرفعال"}
            </div>
          </td>
          <td>{data.date.toLocaleDateString("fa-IR")}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
