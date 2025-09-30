import UserDataTable from "../../components/Table/UserDataTable";
import useUserStore from "../../store/UserStore";

type PropTypes = {};

function UsersPage(props: PropTypes) {
  const {} = props;
  const users = [
    {
      avatar: "/src/assets/avatars/female-avatar.png",
      firstname: "دینا",
      lastname: "فرشادی",
      username: "d.farshadi",
      role: "توسعه دهنده فرانت",
      status: true,
      date: new Date(),
      key: 1,
    },
    {
      avatar: "/src/assets/avatars/female-avatar.png",
      firstname: "فاطمه",
      lastname: "شرافتی",
      username: "f.sherafati",
      role: "توسعه دهنده فرانت",
      status: false,
      date: new Date(),
      key: 2,
    },
    {
      avatar: "/src/assets/avatars/male-avatar.png",
      firstname: "محمد",
      lastname: "نادرخانی",
      username: "m.nadekhani",
      role: "کارشناس نرم افزار",
      status: true,
      date: new Date(),
      key: 3,
    },
  ];

  const user = useUserStore((state)=>state.user);

  if(!user) return user;

  return (
    <div className={` ${user ? "flex flex-col p-5 gap-5 w-full" : "hidden"}`}>
      <p className="font-bold text-xl">لیست کاربران</p>
      <UserDataTable tableData={users} />
    </div>
  );
}
export default UsersPage;
