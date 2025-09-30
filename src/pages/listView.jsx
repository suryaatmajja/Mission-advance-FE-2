import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, removeUser } from "../store/redux/dataSlice";
import Navbar from "../components/navBar";
import { Link } from "react-router-dom";

const ListView = () => {
  const menuItems = [
    { name: "Series", path: "/series" },
    { name: "Film", path: "/film" },
    { name: "Daftar Saya", path: "/daftar-saya" },
  ];

  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.dataAPI);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <>
      <Navbar menuItems={menuItems} />

      <h1 className="absolute z-5 text-white text-center font-lato w-full text-xl mx-auto my-4 md:text-3xl md:my-10 ">
        List View
      </h1>

      <div className="relative bg-[rgba(24,26,28,1)] font-lato min-h-screen bg-cover bg-center">
        <Link to="/register">
          <button className="bg-[rgba(47,48,50,1)] hover:text-black hover:bg-[rgba(109,110,111,1)] text-white cursor-pointer px-11 py-2 rounded-xl mt-15 ml-25 md:ml-158 md:mt-25">
            Add User
          </button>
        </Link>

        {items.map((user) => (
          <div
            key={user.id}
            className="relative w-auto h-full bg-[rgba(225,226,226,1)] rounded-xl mt-5 py-4 mx-3 md:mx-95"
          >
            <div className="flex justify-between items-center px-4">
              <div>
                <h2 className="text-xs underline md:text-sm">Username</h2>
                <h3 className="text-sm mt-1 md:text-lg md:mt-0">
                  {user.username}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <Link to={`/profil/${user.id}`}>
                  <button className="hover:font-semibold bg-[rgba(255,209,70,1)] hover:bg-[rgba(255,195,20,1)] cursor-pointer px-2 py-1 rounded-lg text-sm md:text-lg">
                    Edit
                  </button>
                </Link>

                <button
                  onClick={() => dispatch(removeUser(user.id))}
                  className="hover:font-semibold bg-[rgba(227,61,49,1)] hover:bg-[rgba(204,54,44,1)] cursor-pointer px-2 py-1 rounded-lg text-sm md:text-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListView;
