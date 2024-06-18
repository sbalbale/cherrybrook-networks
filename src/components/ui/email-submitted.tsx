"use client";
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react";

export function EmailSubmitted() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
        <CircleCheckIcon className="h-12 w-12 text-secondary" />
        <div className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Email Submitted</CardTitle>
          <CardDescription>Thank you for submitting your email. We&apos;ll be in touch soon.</CardDescription>
        </div>
      </CardContent>
    </Card>
  )
}

function CircleCheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
