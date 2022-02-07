import Navigation from "components/Navigation/Navigation";
import { HeaderAppBar } from "./AppBar.styled";

export default function AppBar() {
    return (
        <HeaderAppBar>
            <Navigation />
        </HeaderAppBar>
    );
}