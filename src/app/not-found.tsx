"use client";
import Link from "next/link";

export default function Page404() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-6 px-4 md:px-6">
      <div className="space-y-4 text-center">
        <h1 className="text-8xl font-bold tracking-tighter md:text-9xl">404</h1>
        <p className="max-w-md text-muted-foreground md:text-xl/relaxed ">
          Oops! It looks like the page you&apos;re looking for doesn&apos;t exist. Please
          check the URL and try again
        </p>
      </div>
      <Link
        href="#"
        onClick={() => window.history.back()}
        className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background shadow transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground disabled:pointer-events-none disabled:opacity-50 "
        prefetch={false}
      >
        Go Back
      </Link>
    </div>
  );
}
