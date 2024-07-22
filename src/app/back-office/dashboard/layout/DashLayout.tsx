import { _getDetailUser } from "@/app/Helpers/jwt";
import DashLayoutClient from "./DashLayoutClient";

export default async function DashLayout({ children }: { children: React.ReactNode }) {
    const _user: any = await _getDetailUser();
    return (
        <DashLayoutClient userDetail={_user.msg}>
            {children}
        </DashLayoutClient>
    );
}