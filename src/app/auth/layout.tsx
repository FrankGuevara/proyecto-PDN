import { ReactNode } from "react";
import Header from "./header";
type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return <>
        <Header></Header>
        <div>{children}
            </div>;
    </>


};


export default Layout;
