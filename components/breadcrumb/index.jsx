import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function BreadCrumbs() {
  const router = useRouter();
  const pathNames = router.asPath.split("/");
  return (
    <>
      <ul className="flex gap-2">
        {pathNames.map(
          (path, index) =>
            path !== "profile" && (
              <li
                className={`text-center  text-base font-medium font-['Inter'] leading-tight ${
                  path ? "text-cyan-900" : (path = "" ? "text-zinc-600" : "")
                }`}
              >
                <Link
                  key={index}
                  href={`/${
                    path === "" ? "" : pathNames.slice(0, index + 1).join("/")
                  }`}
                  className="capitalize"
                >
                  {path === "" ? "Home" : path.replaceAll("-", " ")}
                </Link>
                {index + 1 < pathNames.length && (
                  <span className="ml-2">{">"}</span>
                )}
              </li>
            )
        )}
      </ul>
    </>
  );
}

export default BreadCrumbs;
