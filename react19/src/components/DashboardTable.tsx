import { useContext } from "react"
import DashboardTableRow from "./DashboardTableRow"
import { ClientContext, type Client } from "../contexts/ClientContext"

const DashboardTable = () => {
  const {clientsData} = useContext(ClientContext)!

  return (
    <div className="rounded overflow-hidden border border-slate-700 w-full my-4">
        <table className="w-full">
            <thead className="border-b border-b-slate-800 [&_th]:p-3">
                <th className="text-left text-[15px]">Image</th>
                <th className="text-left text-[15px]">Name</th>
                <th className="text-left text-[15px]">Country</th>
                <th className="text-left text-[15px]">Email</th>
                <th className="text-left text-[15px]">Project Name</th>
                <th className="text-left text-[15px]">Task Progress</th>
                <th className="text-left text-[15px]">Status</th>
                <th className="text-left text-[15px]">Date</th>
                <th className="text-left text-[15px]">Actions</th>
            </thead>
            <tbody>
                {
                    clientsData.map((clientData: Client) => <DashboardTableRow clientData={clientData} />)
                }
            </tbody>
        </table>
    </div>
  )
}

export default DashboardTable