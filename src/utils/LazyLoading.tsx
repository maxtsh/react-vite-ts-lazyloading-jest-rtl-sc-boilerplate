import { lazy, Suspense, ComponentType } from "react";

const LazyLoading = (
  Component: () => Promise<{ default: ComponentType<any> }>,
  Fallback: React.FC
) => {
  const LazyComponent = lazy(Component);
  const Lazied = (props: any) => (
    <Suspense fallback={<Fallback />}>
      <LazyComponent {...props} />
    </Suspense>
  );
  return Lazied;
};
export default LazyLoading;
