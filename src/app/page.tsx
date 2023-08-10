import HomeName from "@/components/HomeName";
import { Suspense } from "react";

export default async function Home() {

  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <HomeName />
      </Suspense>
    </div>
  )
}
