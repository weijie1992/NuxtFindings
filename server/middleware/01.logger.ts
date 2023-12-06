export default defineEventHandler((event) => {
  console.log('Inside logger' + event.node.req.url);
});
