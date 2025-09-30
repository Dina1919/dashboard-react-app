import { Link, useLocation } from "react-router";

const routeNameMap: Record<string, string> = {
  dashboard: "داشبورد",
  users: "کاربران",
  login: "ورود",
};

function BreadCrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex text-sm text-gray-600 mb-4">
      <Link to="/" className="hover:text-blue-600 font-medium">
        داشبورد
      </Link>
      {pathnames.map((value, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");
        const label = routeNameMap[value] || value;
        return (
          <span key={to} className="flex items-center">
            <span className="mx-2">/</span>
            {index === pathnames.length - 1 ? (
              <span className="text-gray-900">{label}</span>
            ) : (
              <Link to={to} className="hover:text-blue-600">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export default BreadCrumb;
