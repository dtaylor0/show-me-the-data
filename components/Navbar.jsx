/** @typedef {{label: string, url: string}} NavLink */

/**
 * Create the navbar with dynamic links.
 * @param {NavLink[]} links - Links to add to Navbar
 * @param {boolean} useDefault - Whether to include default links
 */
export default function Navbar(links = [], useDefault = true) {
  const navLinks = [];
  if (useDefault) {
    navLinks.push(
      ...[
        {
          label: "Home",
          url: "/",
        },
        {
          label: "Dataset A",
          url: "/datasetA",
        },
      ],
    );
  }

  if (links) {
    navLinks.push(...links);
  }

  return (
    <nav className="flex flex-row w-full">
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
