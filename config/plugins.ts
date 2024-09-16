export default () => ({
  graphql: {
    enable: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
      federation: true,
      isFederated: true,
    },
  },
  ckeditor: true
});
