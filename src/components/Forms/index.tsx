import { useState } from "react";
import Button from "../ui/Button";
import useUserStore from "../../store/UserStore";
import { useNavigate } from "react-router";
import maleAvatar from "../../assets/avatars/male-avatar.png";
import femaleAvatar from "../../assets/avatars/female-avatar.png";

const users = [
  {
    avatar: femaleAvatar,
    firstname: "دینا",
    lastname: "فرشادی",
    username: "d.farshadi",
    password: "123456",
    role: "توسعه دهنده فرانت",
  },
  {
    avatar: femaleAvatar,
    firstname: "فاطمه",
    lastname: "شرافتی",
    username: "f.sherafati",
    password: "abcdef",
    role: "توسعه دهنده فرانت",
  },
  {
    avatar: maleAvatar,
    firstname: "محمد",
    lastname: "نادرخانی",
    username: "m.naderkhani",
    password: "123abc",
    role: "کارشناس نرم افزار",
  },
];

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      login({
        user: `${user.firstname} ${user.lastname}`,
        role: user.role,
        avatar: user.avatar,
      });
      navigate("/dashboard");
    } else {
      alert("کاربر پیدا نشد");
    }
  };
  return (
    <div className="flex flex-col p-4 w-xs m-auto rounded-2xl shadow-lg">
      <div className="flex flex-col justify-center text-center gap-3 p-5">
        <svg
          className="self-center"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19C19.276 12 19.525 12.111 19.707 12.293C19.889 12.475 20 12.724 20 13V20C20 20.276 19.889 20.525 19.707 20.707C19.525 20.889 19.276 21 19 21H5C4.724 21 4.475 20.889 4.293 20.707C4.111 20.525 4 20.276 4 20V13C4 12.724 4.111 12.475 4.293 12.293C4.475 12.111 4.724 12 5 12ZM18 10V7C18 5.343 17.327 3.842 16.243 2.757C15.159 1.672 13.657 1 12 1C10.343 1 8.842 1.673 7.757 2.757C6.672 3.841 6 5.343 6 7V10H5C4.172 10 3.42 10.337 2.879 10.879C2.338 11.421 2 12.172 2 13V20C2 20.828 2.337 21.58 2.879 22.121C3.421 22.662 4.172 23 5 23H19C19.828 23 20.58 22.663 21.121 22.121C21.662 21.579 22 20.828 22 20V13C22 12.172 21.663 11.42 21.121 10.879C20.579 10.338 19.828 10 19 10H18ZM8 10V7C8 5.895 8.447 4.897 9.172 4.172C9.897 3.447 10.895 3 12 3C13.105 3 14.103 3.447 14.828 4.172C15.553 4.897 16 5.895 16 7V10H8Z"
            fill="black"
          />
        </svg>
        <p>ورود به سیستم</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="outline-0 border border-[#E8E8E8] rounded-md py-1 px-2"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="نام کاربری..."
        />
        <input
          className="outline-0 border border-[#E8E8E8] rounded-md py-1 px-2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="رمز عبور..."
        />
        <Button children="ورود" size="sm" type="submit" />
      </form>
    </div>
  );
}
export default LoginForm;
