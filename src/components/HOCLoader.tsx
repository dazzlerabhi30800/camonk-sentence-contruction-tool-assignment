import { ComponentType } from "react";
import { useStoreContext } from "../lib/Store";
import Spinner from "./Spinner";

export default function HOCLoader<P extends object>(
  Component: ComponentType<P>,
) {
  const Wrapper = (props: P) => {
    const { loading } = useStoreContext();
    if (loading) return <Spinner />;
    return <Component {...props} />;
  };

  return Wrapper;
}
