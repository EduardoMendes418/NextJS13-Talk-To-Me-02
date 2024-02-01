import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogo = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 177 44"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#fff"
      d="M80.986 27.352h-3.097v-1.404h-1.151v8.1h1.26V37h-7.56v-2.952h1.26v-8.1h-1.152v1.404h-3.097v-4.356h13.537zm10.793 6.696V37h-4.752v-1.224q-.396.576-1.116 1.026-.702.45-1.728.45-1.35 0-2.124-.72t-.774-2.034q0-3.402 5.778-3.492-.054-.612-.468-.828-.414-.234-1.404-.234-.81 0-1.746.18a9.7 9.7 0 0 0-1.692.45v-3.312a19 19 0 0 1 2.07-.378q1.116-.144 2.178-.144 2.682 0 3.834.972t1.152 3.006v3.33zm-4.752-1.26q-.81 0-1.26.216-.432.216-.432.72 0 .306.18.504.198.18.54.18a.8.8 0 0 0 .72-.396q.252-.396.252-1.116zm5.332 4.23v-2.97h.792v-8.1h-.792v-2.952h4.932v11.052h.792v2.97zm17.147-2.97h.774V37h-4.41l-1.854-3.456h-.432V37h-4.932v-2.952h.792v-8.1h-.792v-2.952h4.932v7.308h.432l2.232-3.312h3.798v2.952h-.738l-1.53 1.71zm11.188 3.204q-1.908 0-2.88-.918-.954-.936-.954-3.132v-3.258h-.792v-2.952q.684 0 1.026-.342.342-.36.342-.972v-.81h3.816v2.124h2.43v2.952h-2.43v2.952q0 .594.252.882.27.27.792.27.684 0 1.494-.162v2.826q-.504.198-1.368.36a8.3 8.3 0 0 1-1.728.18m9.039 0q-2.556 0-3.996-1.332-1.44-1.35-1.44-3.924t1.44-3.906q1.44-1.35 3.996-1.35 2.592 0 4.014 1.368 1.422 1.35 1.422 3.888 0 2.574-1.44 3.924-1.44 1.332-3.996 1.332m0-3.204q.522 0 .774-.27.27-.288.27-.882v-1.8q0-.594-.27-.864-.252-.288-.774-.288t-.792.288q-.252.27-.252.864v1.8q0 .594.252.882.27.27.792.27m29.586 0V37h-5.688v-2.952h.756v-2.952q0-.594-.252-.864-.252-.288-.756-.288-1.08 0-1.08 1.152v2.952h.756V37h-5.652v-2.952h.756v-2.952q0-.594-.252-.864-.252-.288-.756-.288-1.08 0-1.08 1.152v2.952h.756V37h-5.688v-2.952h.792v-4.104h-.792v-2.952h4.932v1.404q1.296-1.656 3.24-1.656 1.098 0 1.782.522.702.504.99 1.44.648-.936 1.476-1.44.846-.504 1.98-.504 1.494 0 2.232.936.756.936.756 2.574v3.78zm5.94 3.204q-2.556 0-3.996-1.332-1.44-1.35-1.44-3.924t1.44-3.906q1.44-1.35 3.996-1.35 2.538 0 3.654 1.332 1.134 1.314 1.134 3.276v1.296h-5.832v.108q0 .666.396.99.396.306 1.314.306 1.098 0 2.088-.162t1.728-.414v2.88q-.63.342-1.854.63-1.206.27-2.628.27m1.044-6.588v-.216q0-.612-.27-.882-.252-.27-.774-.27t-.792.288q-.252.27-.252.864v.216zm5.143 2.394-.828-9.162v-.9H176v.9l-.846 9.162zm-.18 3.942v-2.952h4.068V37z"
    />
    <path
      stroke="#81E6D9"
      strokeWidth={4.062}
      d="M19.637 30.435h-1.512v6.862q-.369-.124-.791-.283a25.4 25.4 0 0 1-5.885-3.142C7.222 30.816 3 25.593 3 16.718 3 9.141 9.141 3 16.717 3h11.89c7.576 0 13.717 6.141 13.717 13.717s-6.141 13.718-13.717 13.718z"
    />
    <mask
      id="logo_svg__a"
      width={33}
      height={31}
      x={29}
      y={13}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M29.445 29.94c1.702 4.676 6.187 8.015 11.451 8.015h4.454v5.882s16.637-2.941 16.637-18.066c0-6.729-5.455-12.184-12.184-12.184h-8.907q-.084 0-.169.002.084.796.085 1.616c0 7.076-4.827 13.026-11.367 14.735"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#logo_svg__a)">
      <path
        fill="#81E6D9"
        d="m29.445 29.94-.765-2.926-3.215.84 1.137 3.122zm15.905 8.015h3.025V34.93H45.35zm0 5.882h-3.025v3.606l3.551-.628zm-4.623-30.249-.041-3.024-3.315.045.348 3.297zM26.602 30.977c2.124 5.831 7.718 10.004 14.294 10.004v-6.05a9.16 9.16 0 0 1-8.61-6.025zM40.896 40.98h4.454v-6.05h-4.454zm1.429-3.025v5.882h6.05v-5.882zm3.025 5.882c.526 2.978.527 2.978.529 2.978h.003l.008-.002.019-.004.057-.01.184-.037c.152-.032.363-.078.625-.141a28 28 0 0 0 2.118-.606c1.722-.566 4.044-1.5 6.39-2.982 4.739-2.991 9.729-8.352 9.729-17.262h-6.05c0 6.215-3.329 9.887-6.909 12.147-1.813 1.144-3.65 1.89-5.047 2.349-.694.227-1.265.38-1.652.473-.193.047-.34.079-.43.098l-.095.019-.015.002h.007s.002-.001.529 2.978M65.012 25.77c0-8.4-6.81-15.209-15.209-15.209v6.05c5.058 0 9.159 4.1 9.159 9.16zM49.803 10.562h-8.907v6.05h8.907zm-8.907 0q-.105 0-.21.002l.082 6.05q.064-.002.128-.002zm-3.177 3.344q.068.639.068 1.299h6.05q0-.979-.102-1.934zm.068 1.299c0 5.667-3.865 10.438-9.107 11.809l1.53 5.853c7.839-2.05 13.627-9.176 13.627-17.662z"
      />
    </g>
  </svg>
);
export default SvgLogo;
