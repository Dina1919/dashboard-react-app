import { Link, NavLink } from "react-router";
import Button from "../ui/Button";
import { useState } from "react";
import UserProfile from "../UserProfile";
import useUserStore from "../../store/UserStore";

type PropTypes = {};

function Sidebar(props: PropTypes) {
  const {} = props;
  const [collapsed, setCollapsed] = useState(false);
  const user = useUserStore((state) => state.user);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-4 p-3 relative transition-colors
   ${collapsed ? "justify-center w-full py-3" : "justify-start"}
   ${
     isActive
       ? "text-[#00A3FF] bg-[#3333331A] after:content-[''] after:absolute after:top-3/10 after:right-0 after:h-2/5 after:w-1 after:bg-[#00A3FF] after:rounded-l-md"
       : "text-black hover:bg-[#3333331A]"
   }`;

  return (
    <>
      <div
        className={`flex flex-col h-screen ${
          collapsed ? "w-16" : "w-64"
        } bg-white text-black shadow transition-all duration-300`}
      >
        <div
          className={`flex items-center min-h-24 ${
            collapsed ? "justify-center" : "justify-start"
          } py-5 px-0 border-b border-b-[#3333331A]`}
        >
          <Button
            children={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 13H21C21.552 13 22 12.552 22 12C22 11.448 21.552 11 21 11H3C2.448 11 2 11.448 2 12C2 12.552 2.448 13 3 13ZM3 7H21C21.552 7 22 6.552 22 6C22 5.448 21.552 5 21 5H3C2.448 5 2 5.448 2 6C2 6.552 2.448 7 3 7ZM3 19H21C21.552 19 22 18.552 22 18C22 17.448 21.552 17 21 17H3C2.448 17 2 17.448 2 18C2 18.552 2.448 19 3 19Z"
                  fill="black"
                />
              </svg>
            }
            onClick={toggleSidebar}
            size="sm"
            variant="transparent"
          />
          <div
            className={`flex flex-col gap-2 ${collapsed ? "hidden" : "flex"}`}
          >
            <p className="font-bold">بوتکمپ فرانت</p>
            <span>2025</span>
          </div>
        </div>
        <ul
          className={`flex flex-col h-screen  ${
            collapsed ? "" : "justify-start px-0"
          } py-5 text-center gap-4`}
        >
          <li>
            <NavLink className={linkClasses} to={"/dashboard"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 2C2.448 2 2 2.448 2 3V10C2 10.552 2.448 11 3 11H10C10.552 11 11 10.552 11 10V3C11 2.448 10.552 2 10 2H3ZM4 4H9V9H4V4ZM14 2C13.448 2 13 2.448 13 3V10C13 10.552 13.448 11 14 11H21C21.552 11 22 10.552 22 10V3C22 2.448 21.552 2 21 2H14ZM15 4H20V9H15V4ZM14 13C13.448 13 13 13.448 13 14V21C13 21.552 13.448 22 14 22H21C21.552 22 22 21.552 22 21V14C22 13.448 21.552 13 21 13H14ZM15 15H20V20H15V15ZM3 13C2.448 13 2 13.448 2 14V21C2 21.552 2.448 22 3 22H10C10.552 22 11 21.552 11 21V14C11 13.448 10.552 13 10 13H3ZM4 15H9V20H4V15Z"
                  fill="currentColor"
                />
              </svg>
              {!collapsed && "داشبورد"}
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClasses} to={"/users"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 21V19C18 17.62 17.439 16.368 16.536 15.464C15.633 14.56 14.38 14 13 14H5C3.62 14 2.368 14.561 1.464 15.464C0.56 16.367 0 17.62 0 19V21C0 21.552 0.448 22 1 22C1.552 22 2 21.552 2 21V19C2 18.171 2.335 17.423 2.879 16.879C3.423 16.335 4.171 16 5 16H13C13.829 16 14.577 16.335 15.121 16.879C15.665 17.423 16 18.171 16 19V21C16 21.552 16.448 22 17 22C17.552 22 18 21.552 18 21ZM14 7C14 5.62 13.439 4.368 12.536 3.464C11.633 2.56 10.38 2 9 2C7.62 2 6.368 2.561 5.464 3.464C4.56 4.367 4 5.62 4 7C4 8.38 4.561 9.632 5.464 10.536C6.367 11.44 7.62 12 9 12C10.38 12 11.632 11.439 12.536 10.536C13.44 9.633 14 8.38 14 7ZM12 7C12 7.829 11.665 8.577 11.121 9.121C10.577 9.665 9.829 10 9 10C8.171 10 7.423 9.665 6.879 9.121C6.335 8.577 6 7.829 6 7C6 6.171 6.335 5.423 6.879 4.879C7.423 4.335 8.171 4 9 4C9.829 4 10.577 4.335 11.121 4.879C11.665 5.423 12 6.171 12 7ZM24 21V19C23.999 17.755 23.543 16.615 22.785 15.739C22.133 14.986 21.257 14.428 20.256 14.163C19.722 14.022 19.175 14.34 19.034 14.874C18.893 15.408 19.211 15.955 19.745 16.096C20.352 16.257 20.881 16.594 21.273 17.048C21.727 17.574 21.999 18.254 22 19V21C22 21.552 22.448 22 23 22C23.552 22 24 21.552 24 21ZM15.752 4.099C16.555 4.305 17.197 4.814 17.589 5.476C17.981 6.138 18.12 6.946 17.914 7.749C17.738 8.437 17.339 9.005 16.809 9.401C16.495 9.636 16.134 9.81 15.746 9.912C15.212 10.052 14.892 10.599 15.033 11.133C15.174 11.667 15.72 11.987 16.254 11.846C16.891 11.679 17.486 11.391 18.006 11.002C18.89 10.342 19.558 9.389 19.851 8.244C20.193 6.907 19.961 5.555 19.309 4.456C18.657 3.357 17.584 2.503 16.247 2.16C15.712 2.023 15.167 2.346 15.03 2.881C14.893 3.416 15.216 3.961 15.751 4.098L15.752 4.099Z"
                  fill="currentColor"
                />
              </svg>
              {!collapsed && "کاربران"}
            </NavLink>
          </li>
          {!user && (
            <li>
              <NavLink className={linkClasses} to={"/login"}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19C19.276 12 19.525 12.111 19.707 12.293C19.889 12.475 20 12.724 20 13V20C20 20.276 19.889 20.525 19.707 20.707C19.525 20.889 19.276 21 19 21H5C4.724 21 4.475 20.889 4.293 20.707C4.111 20.525 4 20.276 4 20V13C4 12.724 4.111 12.475 4.293 12.293C4.475 12.111 4.724 12 5 12ZM18 10V7C18 5.343 17.327 3.842 16.243 2.757C15.159 1.672 13.657 1 12 1C10.343 1 8.842 1.673 7.757 2.757C6.672 3.841 6 5.343 6 7V10H5C4.172 10 3.42 10.337 2.879 10.879C2.338 11.421 2 12.172 2 13V20C2 20.828 2.337 21.58 2.879 22.121C3.421 22.662 4.172 23 5 23H19C19.828 23 20.58 22.663 21.121 22.121C21.662 21.579 22 20.828 22 20V13C22 12.172 21.663 11.42 21.121 10.879C20.579 10.338 19.828 10 19 10H18ZM8 10V7C8 5.895 8.447 4.897 9.172 4.172C9.897 3.447 10.895 3 12 3C13.105 3 14.103 3.447 14.828 4.172C15.553 4.897 16 5.895 16 7V10H8Z"
                    fill="currentColor"
                  />
                </svg>
                {!collapsed && "ورود"}
              </NavLink>
            </li>
          )}
        </ul>
        <UserProfile collapsed={collapsed} />
      </div>
    </>
  );
}
export default Sidebar;