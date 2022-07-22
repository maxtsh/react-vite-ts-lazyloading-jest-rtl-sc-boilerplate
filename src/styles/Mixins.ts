import { css, FlattenInterpolation } from "styled-components";

export const Responsive = {
  mobile: {
    standard: (args: TemplateStringsArray) => css`
      @media (max-width: 480px) {
        ${css(args)}
      }
    `,
  },
  tablet: {
    standard: (args: TemplateStringsArray): FlattenInterpolation<any> => css`
      @media (max-width: 768px) {
        ${css(args)}
      }
    `,
  },
  laptop: {
    standard: (args: TemplateStringsArray): FlattenInterpolation<any> => css`
      @media (max-width: 1024px) {
        ${css(args)}
      }
    `,
  },
  desktop: {
    standard: (args: TemplateStringsArray): FlattenInterpolation<any> => css`
      @media (min-width: 1025px) and (max-width: 1200px) {
        ${css(args)}
      }
    `,
  },
  tv: {
    standard: (args: TemplateStringsArray): FlattenInterpolation<any> => css`
      @media (min-width: 1200px) {
        ${css(args)}
      }
    `,
  },
};
