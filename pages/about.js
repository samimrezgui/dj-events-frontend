import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout title="About DJ Events">
      <h1>About Page</h1>
      <p>this is an app to find the lates DJ and other musical events </p>
      <p>Version: 1.0.0</p>
      <Link href="/">Home</Link>
    </Layout>
  );
}
