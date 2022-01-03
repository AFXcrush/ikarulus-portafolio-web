import { gql } from "@apollo/client";

const IKARUS_GALLERY = gql`
  query GetIkarusIndex {
    ikarusFeeds(sort: "published_at:desc") {
      id
      titulo
      thumbnail {
        url
      }
      contenido {
        __typename
        ... on ComponentDescripcionAgregarImagen {
          imagen {
            url
          }
        }
        __typename
        ... on ComponentDescripcionAgregarLinkDeVideo {
          embed
        }
        __typename
        ... on ComponentDescripcionAgregarTexto {
          descripcion
        }
        __typename
        ... on ComponentDescripcionAgregarLinkExterno {
          texto_hipervinculo
          url
        }
        __typename
        ... on ComponentDescripcionAgregarTextoResaltado {
          texto_resaltado
        }
        __typename
        ... on ComponentDescripcionAgregarSketchfab {
          sketchfab
        }
      }
    }
  }
`;

export { IKARUS_GALLERY };
