import type { Client } from "../contexts/ClientContext";

type ChildrenProps = {
  clientData: Client
}

const DashboardTableRow = ({clientData}: ChildrenProps) => {
  return (
    <tr className="text-slate-400 border-b border-b-slate-800 [&_td]:p-3">
      <td>
        <img className="h-8 w-8 rounded-full object-cover" src={clientData.image} alt="client image" />
      </td>
      <td className="text-[14px]">{clientData.name}</td>
      <td className="text-[14px]">{clientData.country}</td>
      <td className="text-[14px]">{clientData.email}</td>
      <td className="text-[14px]">{clientData.projectName}</td>
      <td>
        <div className="relative w-[90%] h-1.5 rounded-full bg-slate-800">
          <span className="absolute -top-4 text-[11px]" style={{left: clientData.progress - 10}}>{clientData.progress}%</span>
          <div className="h-full rounded-full bg-green-500" style={{width: clientData.progress + "%"}}></div>
        </div>
      </td>
      <td className="text-[14px]">{clientData.status == "Completed" ? <div className="bg-green-500 text-slate-950 flex items-center justify-center rounded py-1">{clientData.status}</div> : clientData.status}</td>
      <td className="text-[14px]">{clientData.date}</td>
      <td>
        <button className="cursor-pointer">...</button>
      </td>
    </tr>
  );
};

export default DashboardTableRow;
