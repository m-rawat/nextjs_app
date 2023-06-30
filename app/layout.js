import "../styles/globals.css";
import { Roboto } from "next/font/google";
import Provider from "@/components/Provider";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Postopia App",
  description: "Created by Mayank Rawat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Provider>
          <Toaster position="top-center" reverseOrder={true} />
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
