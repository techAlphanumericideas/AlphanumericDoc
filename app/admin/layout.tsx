 import AdminSidebar from "./AdminSidebar/SidebarAdmin"

export default function UserLayout({
    children
}:{children:React.ReactNode}){
    return(
        <div className="flex">
            <AdminSidebar />
            <main className="flex-1 p-6">
                {children}
            </main>

        </div>
    )
}