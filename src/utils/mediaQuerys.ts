export const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`

export const respondTo = {
  xl: customMediaQuery(1920),
  max: customMediaQuery(1536),
  lg: customMediaQuery(1440),
  preLg: customMediaQuery(1366),
  mdXL: customMediaQuery(1280),
  md: customMediaQuery(1024),
  preMd: customMediaQuery(960),
  sm: customMediaQuery(768),
  preSm: customMediaQuery(640),
  xs: customMediaQuery(480),
  xxs: customMediaQuery(425),
  xxxs: customMediaQuery(375),
  xxxxs: customMediaQuery(320),
}
