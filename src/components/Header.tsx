import companyLogo from '../assets/emerald-pet-resort-logo.png';

export default function Header() {
  return (
    <div className="drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-primary p-4 text-primary-content w-full">
          {/* Company Logo */}
          <div className="mr-auto">
            <img src={companyLogo} alt="Emerald Pet Resort" className="h-16" />
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
            <ul className="bg-primary text-primary-content menu menu-horizontal">
              {/* Navbar menu content here */}
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
              <li><a>Events & Community</a></li>
              <li><a>About Us</a></li>
              <li><a>Live Webcams</a></li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <a className="btn btn-secondary btn-wide">Make a Reservation</a>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-full max-w-[80%] p-4">
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
          <li><a>Events & Community</a></li>
          <li><a>About Us</a></li>
          <li><a>Live Webcams</a></li>
        </ul>
      </div>
    </div>
  )
}