import { GrNext } from "react-icons/gr"

export const NextButton = ({ page, setPage, totalPages }) => {
  return (
    <button
      onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
      disabled={page === totalPages}
      className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
    >
      <GrNext />
    </button>
  )
}
