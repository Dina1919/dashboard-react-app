import TableBody from "../TableBody";
import TableHead from "../TableHead";

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

function UserDataTable({ tableData }: Props) {
  return (
    <table className="w-full text-center">
      <TableHead
        titles={[
          "#",
          "نام و نام خانوادگی",
          "نام کاربری",
          "سمت فرد",
          "وضعیت",
          "تاریخ ایجاد",
        ]}
      />

      <TableBody tableData={tableData}/>
    </table>
  );
}

export default UserDataTable;
