
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Layout({children}: any) {
  return (
    <div className="flex max-w-7xl h-screen mx-auto items-center justify-center">{children}</div>
  )
}

export default Layout