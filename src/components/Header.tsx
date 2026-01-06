import companyLogo from '../assets/emerald-pet-resort-logo.png';

export default function Header() {
  return (
    <div className="drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-primary p-4 text-primary-content w-full">
          {/* Company Logo */}
          <div className="mr-auto">
            <a href="" tabIndex={0}>
              <img src={companyLogo} alt="Emerald Pet Resort" className="h-16" />
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
              <summary className="bg-primary cursor-pointer py-2 px-4 text-primary-content text-sm">Services & Pricing</summary>
              <ul className="menu dropdown-content bg-primary gap-2 text-primary-content z-10 w-40 p-2 shadow-sm">
                <li><a>Dog Daycare</a></li>
                <li><a>Dog Boarding</a></li>
                <li><a>Cat Boarding</a></li>
                <li><a>Grooming</a></li>
              </ul>
            </details>
            <ul className="bg-primary menu menu-horizontal p-4 text-primary-content text-sm">
              <li><a href="" className="py-2 px-4">About us</a></li>
              <li><a href="" className="py-2 px-4">FAQs</a></li>
              <li><a href="" className="py-2 px-4">Contact us</a></li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <a className="btn btn-secondary btn-wide">Make a Reservation</a>
          </div>
        </div>
      </div>
      {/* Mobile Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-primary max-w-[80%] min-h-full p-4 text-primary-content w-full">
          {/* Sidebar content here */}
          <li>
            <details>
              <summary>Services & Pricing</summary>
              <ul className="bg-primary text-primary-content rounded-t-none p-2 w-max">
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