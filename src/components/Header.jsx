
// Some things will need to be replaced with react-router-dom
export default function Header() {
  return (
    <nav className="flex justify-between items-center h-1/5 bg-slate-200">
      <div className="ml-20 h-12 p-3 bg-slate-300 rounded">Logo Placeholder</div>
      <div className="ml-auto w-32 h-12 mr-6 p-3 text-center bg-slate-300 rounded">
        About Me
      </div>
      <div className="w-32 h-12 mr-6 p-3 text-center bg-slate-300 rounded">
        Services
      </div>
      <div className="w-36 h-12 mr-6 p-3 text-center bg-slate-300 rounded">
        Contact Us
      </div>
      <div className="mr-12 w-32 h-12 p-3 text-center bg-slate-300 rounded">
        Support
      </div>
    </nav>
  )
}