import { GrPrevious } from "react-icons/gr"

export const PreviousButton = ({ page, setPage }) => {
  return (
    <button
      onClick={() => setPage((p) => Math.max(p - 1, 1))}
      disabled={page === 1}
      className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
    >
      <GrPrevious />
    </button>
  )
}
