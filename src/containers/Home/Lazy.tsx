import LazyLoading from "utils/LazyLoading";
const Fallback: React.FC = () => (
  <div>
    <h1>Loading...</h1>
  </div>
);
export default LazyLoading(
  () => import(/* webpackChunkName: "Home" */ "./index"),
  Fallback
);
