import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path fill="currentColor" d="m20.337 8.437-9.6 9.6a.9.9 0 0 1-1.275 0l-4.2-4.2a.901.901 0 1 1 1.275-1.275l3.563 3.563 8.963-8.962a.902.902 0 0 1 1.275 1.275z" /></svg>;
const ForwardRef = forwardRef(SvgCheck);
export default ForwardRef;