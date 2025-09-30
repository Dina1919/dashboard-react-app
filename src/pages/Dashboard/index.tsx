import useUserStore from "../../store/UserStore";

type PropTypes = {};

function DashboardPage(props: PropTypes) {
  const {} = props;
  const user = useUserStore((state) => state.user);
  return (
    <div className="p-5">
      {user ? (
        <h1 className="text-xl font-bold">{user.user} خوش آمدید</h1>
      ) : (
        <h1 className="text-xl font-bold">لطفا وارد شوید</h1>
      )}
    </div>
  );
}
export default DashboardPage;
