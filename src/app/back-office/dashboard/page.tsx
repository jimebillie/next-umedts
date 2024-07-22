import DashLayout from "./layout/DashLayout";
import DashboardClient from "./pageClient";
export default function Dashboard() {
    return (
        <>
            <DashLayout>
                <DashboardClient/>
            </DashLayout>
        </>
    )
}