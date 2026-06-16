import DashboardContent from "./DashboardContent"
import DashboardSidebar from "./DashboardSidebar"

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
        <DashboardSidebar />
        <DashboardContent />
    </div>
  )
}

export default Dashboard