/** @typedef {{label: string, url: string}} NavLink */

/**
 * Create the navbar with dynamic links.
 * @param {NavLink[]} links -  (TODO) Links to add to Navbar
 * @param {boolean} useDefault - Whether to include default links
 */
export default function Navbar(links = [], useDefault = true) {
  const navLinks = [];
  /** @type {NavLink[]} defaultLinks */
  const defaultLinks = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Dataset A",
      url: "/datasetA",
    },
  ];
  if (useDefault) {
    navLinks.push(...defaultLinks);
  }

  /* if (links) {
    navLinks.push(links);
  } */

  return (
    <nav className="flex flex-row w-full justify-center items-center p-5">
      <ul>
        <li>
          {navLinks.map((link) => (
            <a className="m-6" href={link.url}>
              {link.label}
            </a>
          ))}
        </li>
      </ul>
    </nav>
  );
}
