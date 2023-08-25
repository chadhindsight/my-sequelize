export async function action({ params }) {
  const response = await fetch(`/api/baddies/${params.noteId}`, {
    method: "DELETE",
  });
  console.log(response)
  return null;
}