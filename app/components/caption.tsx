import Balancer from "react-wrap-balancer";
import type { ReactNode } from "react";

export function CaptionComponent({ children }: { children: ReactNode }) {
  return (
    <span className="block w-full my-3 font-mono text-xs leading-normal text-center text-gray-500">
      <Balancer>
        <span className="[&>a]:post-link">{children}</span>
      </Balancer>
    </span>
  );
}
