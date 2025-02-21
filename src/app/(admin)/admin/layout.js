import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import Link from "next/link";


export default  function Layout({ children }) {
  // const session = await auth();
  // if (session?.user?.role != "admin") redirect("/");
  return (
    <div>
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="w-full">
          <Link href={`/admin/dashboard`}>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          </Link>
          <Link href={`/admin/courses`}>
            <TabsTrigger value="courses">Courses</TabsTrigger>
          </Link>
          <Link href={`/admin/batches`}>
            <TabsTrigger value="batches">Batches</TabsTrigger>
          </Link>
          <Link href={`/admin/admissions`}>
            <TabsTrigger value="admissions">Admissions</TabsTrigger>
          </Link>
          <Link href={`/admin/trainers`}>
            <TabsTrigger value="trainers">Trainers</TabsTrigger>
          </Link>
          <Link href={`/admin/students`}>
            <TabsTrigger value="students">Students</TabsTrigger>
          </Link>
        </TabsList>
        <TabsContent value="dashboard">{children}</TabsContent>
        <TabsContent value="courses">{children}</TabsContent>
        <TabsContent value="batches">{children}</TabsContent>
        <TabsContent value="admissions">{children}</TabsContent>
        <TabsContent value="trainers">{children}</TabsContent>
        <TabsContent value="students">{children}</TabsContent>
      </Tabs>
    </div>
  );
}