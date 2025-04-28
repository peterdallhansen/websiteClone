"use client";
import { useEffect, useState } from "react";

export default function ClientOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Nothing is rendered on the server,
  // and until the browser tells us it’s mounted.
  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
}
