function SmallButton({func, children}) {
  return (
    <button onClick={ func } class="bg-green-500 hover:bg-green-600 text-white w-2/3 my-auto py-3">
      { children }
    </button>
  )
}

export default SmallButton;