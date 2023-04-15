import * as React from "react"
import Svg, {
  G,
  Circle,
  Mask,
  Rect,
  Defs,
  Pattern,
  Use,
  Image
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */ function SvgComponent(
  props
) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <G filter="url(#filter0_i_2_43)">
        <Circle cx={24} cy={24} r={24} fill="#fff" />
      </G>
      <Mask
        id="mask0_2_43"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={48}
        height={48}
      >
        <Circle cx={24} cy={24} r={24} fill="#fff" />
      </Mask>
      <G mask="url(#mask0_2_43)">
        <Rect x={9} y={3} width={30} height={41} fill="url(#pattern0)" />
      </G>
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_2_43"
            transform="matrix(.0004 0 0 .0003 -.066 0)"
          />
        </Pattern>
        <Image
          id="image0_2_43"
          width={2809}
          height={3394}
        />
      </Defs>
    </Svg>
  )
}
export default SvgComponent