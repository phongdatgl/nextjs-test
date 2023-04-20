export async function getServerSideProps(context) {
  console.log(context.req.headers.referer)
  return {props:  { message: "Welcome to the About Page" }, }
}
console.log(getServerSideProps())
export default () => {
 <div>
   <p>This is the about page</p>
 </div>
}
