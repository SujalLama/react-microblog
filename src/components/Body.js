import { Container, Stack } from "react-bootstrap";
import Sidebar from "./Sidebar";

export default function Body ({sidebar, children}) {
    return (
        <Container>
            <Stack direction="horizontal">
                {sidebar && <Sidebar />}
                <Container>
                {children}
                </Container>
            </Stack>
        </Container>
    )
}