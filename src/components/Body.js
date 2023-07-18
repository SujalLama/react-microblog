import { Container, Stack } from "react-bootstrap";
import Sidebar from "./Sidebar";
import FlashMessage from "./FlashMessage";

export default function Body ({sidebar, children}) {
    return (
        <Container>
            <Stack direction="horizontal">
                {sidebar && <Sidebar />}
                <Container>
                    <FlashMessage />
                    {children}
                </Container>
            </Stack>
        </Container>
    )
}