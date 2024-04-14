import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiSettings, CiBoxList, CiCalendar } from "react-icons/ci";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-5">
        {/* header */}
        <div className="flex justify-between">
          <div className="flex">
            <div className="text-2xl">Emplois du temps</div>
          </div>

          <div className="flex gap-8 justify-center items-center ">
            <Link href="/timetable">
              {/* <div>Timetable</div> */}
              <div className="text-2xl font-bold">
                <CiCalendar />
              </div>
            </Link>

            <Link href="/activities">
              <div className="text-2xl">
                <CiBoxList />
              </div>
              {/* <div>Activities</div> */}
            </Link>

            <Link href="/timetable_elements">
              <div className="text-2xl">
                <CiSettings />
              </div>
              {/* <div>Timetable elements</div> */}
            </Link>
          </div>
        </div>

        {/* main */}
        <main>{children}</main>
      </body>
    </html>
  );
}
