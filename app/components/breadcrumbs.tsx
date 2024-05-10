"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumbs() {

  const paths = usePathname();
  const pathNames = paths.split('/').filter(path => path);

  function removeDashFromLink(link : string) {
    return link.replace(/-/g, " ");
  }

  function capitalizeLinkWords(link : string) {
    return link.toUpperCase();
  }

  return (
    <ul className="list-group list-group-horizontal list-unstyled d-flex mb-0">
      <li className="text-decoration-none list-group-item">
        <Link href={'/'} className="text-decoration-none custom-link-secondary fw-bold">HOME</Link>
      </li>
      {pathNames.map((link, index) => (
        <li className="text-decoration-none list-group-item" key={index}>
          <span className="ms-1">/</span>
          <Link href={'/' + link} className="text-decoration-none ms-1 custom-link-secondary fw-bold">{capitalizeLinkWords(removeDashFromLink(link))}</Link>
        </li>
      ))}
    </ul>
  );
}