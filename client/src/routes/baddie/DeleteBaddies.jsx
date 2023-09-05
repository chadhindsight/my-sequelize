export async function action({ params }) {
  const response = await fetch(`/api/baddies/${params.baddieId}`, {
    method: "DELETE",
  });
  console.log(response)
  return null;
}