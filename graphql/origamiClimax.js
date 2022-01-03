import { gql } from "@apollo/client";

const ORIGAMI_CLIMAX = gql`
  query GetOrigamiClimax {
    origamiClimaxes {
      id
      background {
        url
      }
      titulo
      descripcion
    }
  }
`;

export { ORIGAMI_CLIMAX };
