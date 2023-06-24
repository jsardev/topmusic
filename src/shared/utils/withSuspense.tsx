import React from "react";

const withSuspense =
  (Component: React.ComponentType, fallback: React.ReactNode) => () =>
    (
      <React.Suspense fallback={fallback}>
        <Component />
      </React.Suspense>
    );

export default withSuspense;
