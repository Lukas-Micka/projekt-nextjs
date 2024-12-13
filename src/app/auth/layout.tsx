import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const metadata = { title: "Public | SnapZoska" };

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400, // Limit the box width
          padding: 3, // Add some padding inside the box
          border: "1px solid #ccc", // Optional border for visual clarity
          borderRadius: 2, // Rounded corners
          boxShadow: 3, // Box shadow for some elevation
          bgcolor: "background.paper", // Background color
        }}
      >
        {children}
      </Box>
    </Container>
  );
}