import Container from "@mui/material/Container";

export const metadata = { title : "Public | SnapZoska"};

export default function PublicLayout({children}:{children: React.ReactNode}){
    return(
        <Container>
            {children}{}
        </Container>
    );
}