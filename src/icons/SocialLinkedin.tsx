import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSocialLinkedin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path fill="currentColor" d="M4.5 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3zm4.85 10.393v-7.224H6.934v7.224zM8.142 9.182c.842 0 1.367-.554 1.367-1.248-.016-.709-.525-1.248-1.351-1.248-.827 0-1.367.539-1.367 1.248 0 .694.524 1.248 1.335 1.248zm4.962 8.211v-4.034c0-.216.016-.431.079-.586.175-.431.573-.878 1.24-.878.875 0 1.225.662 1.225 1.634v3.864h2.416v-4.142c0-2.219-1.192-3.252-2.782-3.252-1.282 0-1.857.7-2.178 1.193v-1.023h-2.417c.032.675.001 7.183 0 7.225z" /></svg>;
const ForwardRef = forwardRef(SvgSocialLinkedin);
export default ForwardRef;