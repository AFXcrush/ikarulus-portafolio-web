import { gql } from "@apollo/client";

const LANDING_PAGE = gql`
  query GetLandingPage {
    landingPageBackground {
      background {
        url
      }
      id
    }
  }
`;

export { LANDING_PAGE };
