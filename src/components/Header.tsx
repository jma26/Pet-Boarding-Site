import Companylogo from '../assets/paws-and-plays-logo.png';

export default function Header() {
  return (
    <div className="drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col shadow-sm">
        <div className="navbar p-4 w-full">
          {/* Company Logo */}
          <div className="mr-auto">
            <a className="flex gap-4" href="" tabIndex={0}>
              <img className="max-w-48" src={Companylogo} alt="" />
            </a>
          </div>
          {/* Mobile Hamburger */}
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="hidden flex-none lg:block">
            <details
              className="dropdown"
              onMouseEnter={(e) => (e.currentTarget.open = true)}
              onMouseLeave={(e) => (e.currentTarget.open = false)}
            >
              <summary className="cursor-pointer font-medium text-base py-2 px-4">Services & Pricing</summary>
              <ul className="menu bg-base-100 dropdown-content gap-2 text-base z-10 w-40 p-2 shadow-sm">
                <li className="font-medium text-base"><a>Dog Daycare</a></li>
                <li className="font-medium text-base"><a>Dog Boarding</a></li>
                <li className="font-medium text-base"><a>Cat Boarding</a></li>
                <li className="font-medium text-base"><a>Grooming</a></li>
              </ul>
            </details>
            <ul className="menu menu-horizontal p-4">
              <li className="font-medium text-base"><a href="" className="py-2 px-4">About us</a></li>
              <li className="font-medium text-base"><a href="" className="py-2 px-4">FAQs</a></li>
              <li className="font-medium text-base"><a href="" className="py-2 px-4">Contact us</a></li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <a className="btn btn-primary btn-wide">Make a Reservation</a>
          </div>
        </div>
      </div>
      {/* Mobile Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="bg-base-100 menu max-w-[80%] min-h-full p-4 w-full">
          {/* Sidebar content here */}
          <li>
            <details>
              <summary>Services & Pricing</summary>
              <ul className="text-primary-content rounded-t-none p-2 w-max">
                <li><a>Dog Daycare</a></li>
                <li><a>Dog Boarding</a></li>
                <li><a>Cat Boarding</a></li>
                <li><a>Grooming</a></li>
              </ul>
            </details>
          </li>
          <li><a>About us</a></li>
          <li><a>FAQs</a></li>
          <li><a>Contact us</a></li>
        </ul>
      </div>
    </div>
  )
}