import { Button } from "@/components/ui/button";
import Link from "next/link";

const jobs = [
  { title: "Frontend Engineer", department: "Engineering", location: "Remote" },
  {
    title: "Data Scientist, Visitor Analytics",
    department: "Data",
    location: "Remote",
  },
  {
    title: "Product Manager, Analytics Hub",
    department: "Product",
    location: "Remote",
  },
  {
    title: "Solutions Engineer",
    department: "Engineering",
    location: "Remote",
  },
  {
    title: "Customer Success Manager",
    department: "Customer",
    location: "Remote",
  },
];

export function JobsSection() {
  return (
    <section className="py-20 px-4 w-full bg-background" id="careers">
      <div className="max-w-6xl   mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
          Open Roles
        </h2>

        <div className="space-y-1 mb-12 w-full ">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_auto] gap-4 items-center py-6 border-b border-border hover:bg-muted/30 transition-colors px-4"
            >
              <div className="font-normal text-base">{job.title}</div>
              <div className="text-muted-foreground text-sm md:text-base">
                {job.department}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {job.location}
              </div>
              <Button
                variant="ghost"
                className="text-sm hover:underline justify-start md:justify-end p-0 h-auto font-normal"
              >
                Apply
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href={"/careers"}>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-base hover:bg-black hover:text-white bg-transparent"
            >
              View all openings
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
