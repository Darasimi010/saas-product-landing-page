import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSocialX = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path fill="currentColor" d="M17.141 5h2.454l-5.36 5.93L20.541 19h-4.938l-3.867-4.894L7.311 19H4.856l5.734-6.343L4.541 5h5.062l3.496 4.474z" /></svg>;
const ForwardRef = forwardRef(SvgSocialX);
export default ForwardRef;