import { useContext, useState } from "react";
import { BiSort } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { ClientContext } from "../contexts/ClientContext";

const SortSelect = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { setClientsData } = useContext(ClientContext)!;

  function sortData(key: string) {
    setIsOpen(false);
    switch (key) {
      case "name":
        return setClientsData((prev) =>
          [...prev].sort((a, b) => a.name.localeCompare(b.name)),
        );
        break;
      case "country":
        return setClientsData((prev) =>
          [...prev].sort((a, b) => a.country.localeCompare(b.country)),
        );
        break;
      case "date":
        function parseDate(dateString: string) {
          const [monthIndex, day, year] = dateString.split("/").map(Number)
          const time = new Date(year, monthIndex - 1, day).getTime()
          return time
        }

        return setClientsData(prev => [...prev].sort((a,b) => parseDate(a.date) - parseDate(b.date)))
      default:
        return "default runs";
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 border border-slate-800 rounded-md py-1 px-2 transition hover:bg-slate-800 select-none"
      >
        <BiSort />
        <span>Sort</span>
        <IoIosArrowDown />
      </button>
      {isOpen && (
        <div className="absolute w-full top-10 left-0">
          <ul className="bg-slate-950 w-full shadow-2xl border border-slate-800 rounded-lg flex flex-col py-1">
            <li
              onClick={() => sortData("name")}
              className="transition hover:bg-slate-800 px-3 cursor-pointer py-1"
            >
              Name
            </li>
            <li
              onClick={() => sortData("country")}
              className="transition hover:bg-slate-800 px-3 cursor-pointer py-1"
            >
              Country
            </li>
            <li
              onClick={() => sortData("date")}
              className="transition hover:bg-slate-800 px-3 cursor-pointer py-1"
            >
              Date
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortSelect;
