import Header from "~/layouts/LayoutElements/Header";
import Footer from "~/layouts/LayoutElements/Footer";
import MainMenu from "~/components/MainMenu";
import {noiboMenu as menuItems} from "~/data";

function NoiboLayout({children}) {
    
    return ( <div>
        <Header/>               
        <MainMenu menuItems={menuItems} color={"#288b6c"}/>          
        <div id="containter" style={{minHeight:"500px"}}>{children}</div>
        <Footer/>
    </div> );
}

export default NoiboLayout;