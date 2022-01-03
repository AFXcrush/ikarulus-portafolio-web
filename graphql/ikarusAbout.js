import { gql } from "@apollo/client";

const IKARUS_ABOUT = gql`
  query GetIkarusAbout {
    ikarusFeedBackground {
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

export { IKARUS_ABOUT };
