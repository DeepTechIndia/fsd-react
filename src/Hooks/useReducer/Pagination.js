import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useReducer } from "react";

const initialValue = {
  comments: [],
  loading: true,
  currentPage: 1,
};

function commentsReducer(state, action) {
  switch (action.type) {
    case "fetch_comments":
      return {
        ...state,
        comments: action.comments,
        loading: false,
      };

    case "set_loading":
      return { ...state, loading: true };

    case "set_page":
      return { ...state, currentPage: action.page };

    default:
      throw new Error("Unknown action type");
  }
}

function App() {
  const [state, dispatch] = useReducer(commentsReducer, initialValue);
  const commentsPerPage = 50;

  useEffect(() => {
    const fetchComments = async () => {
      dispatch({ type: "set_loading" });
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await response.json();
        dispatch({ type: "fetch_comments", comments: data });
      } catch (error) {
        console.error("Error Fetching comments", error);
      }
    };
    fetchComments();
  }, []);

  //   pagination

  const indexOfLastComment = state.currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = state.comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const handlePageChange = (pageNumber) => {
    dispatch({ type: "set_page", page: pageNumber });
  };

  const totalPages = Math.ceil(state.comments.length / commentsPerPage);
  return (
    <div>
      <h1>Comments</h1>

      {/* loading state */}
      {state.loading ? (
        <p>Loading Comments...</p>
      ) : (
        <ul>
          {currentComments.map((comment) => (
            <li key={comment.is}>
              <strong>{comment.name}</strong>:{comment.body}
            </li>
          ))}
        </ul>
      )}

      {/* pagination Control */}

      <div>
        <button
          onClick={() => handlePageChange(state.currentPage - 1)}
          disabled={state.currentPage === 1}
        >
          Previous
        </button>
        <span>Page{state.currentPage}</span>
        <button
          onClick={() => handlePageChange(state.currentPage + 1)}
          disabled={state.currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
