const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <h2>Rating</h2>
        <h2>Description</h2>
        <p>Located in San Diego, Califronia</p>
        <p>serving modern Thai fusion</p>

        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>

        <img src="/images/PadThaiDish.jpg" alt="bowl of Pad Thai"></img>
      </main>
    </Def>
  );
}

module.exports = show;
