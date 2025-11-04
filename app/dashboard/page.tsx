import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { DashboardStats } from "../components/dashboard/DashboardStats";
// import { RecentSales } from "../components/dashboard/RecentSales";
import { Chart } from "../components/dashboard/Chart";
import prisma from "../lib/db";
import { addDays, formatISO, parseISO } from "date-fns";
import { revalidatePath } from "next/cache";
import { RefreshWrapper } from "../components/dashboard/RefreshWrapper";

// export const revalidate = 0;

async function getData() {
  const now = new Date();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1); // e.g. 2025-11-01

  const logs = await prisma.log.groupBy({
    by: ["createdAt"],
    where: {
      createdAt: {
        gte: firstDayOfMonth, // start of current month
        lte: now,             // up to today
      },
    },
    _count: { id: true },
    orderBy: {
      createdAt: "asc",
    },
  });

//   const result = logs.map((item) => ({
//     date: item.createdAt.toISOString().split("T")[0], // YYYY-MM-DD
//     count: item._count.id,
//   }));

  // Reduce into aggregated counts per day
  const grouped: Record<string, number> = {};

  logs.forEach((log) => {
    const date = log.createdAt.toISOString().split("T")[0]; // YYYY-MM-DD
    grouped[date] = (grouped[date] || 0) + 1;
  });

  // Convert back to array for Recharts
  const result = Object.entries(grouped).map(([date, count]) => ({
    date,
    count,
  }));
  
//   console.log("Final Result:", result);

  return result;
}

export default async function Dashboard() {
    const data = await getData();

    return (
        <>
        <RefreshWrapper>
        <div className="grid gap-4 md:gp-8 lg:grid-row-2 xl:grid-row-3 mt-10">
        <Card className="">
          <CardHeader>
            <CardTitle>User Request</CardTitle>
            <CardDescription>
              Recent request last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Chart data={data} />
          </CardContent>
        </Card>
        
        {/* Can create for more insights */}
        {/* <Card className="">
          <CardHeader>
            <CardTitle>Request</CardTitle>
            <CardDescription>
              Recent Request
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Chart data={data} />
          </CardContent>
        </Card>

        <Card className="">
          <CardHeader>
            <CardTitle>Request</CardTitle>
            <CardDescription>
              Recent Request
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Chart data={data} />
          </CardContent>
        </Card> */}
      </div>
      </RefreshWrapper>
        </>
    )
}