import { gql } from "@apollo/client";

const ORIGAMI_ABOUT = gql`
  query GetOrigamiAbout {
    origamiAboutBackground {
      background {
        url
      }
      redes {
        __typename
        ... on ComponentAboutContentAgregarRedes {
          red_activa
          red_url
        }
      }
      contenido {
        __typename
        ... on ComponentAboutContentAgregarImagen {
          imagen {
            url
          }
        }
        __typename
        ... on ComponentAboutContentAgregarTexto {
          texto
        }
        __typename
        ... on ComponentAboutContentAgregarTitulo {
          titulo
        }
      }
    }
  }
`;

export { ORIGAMI_ABOUT };
