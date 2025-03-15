import Link from "next/link"
import { ScrollLink } from "@/components/scroll-link"

const navItems = [
  { href: "/#features", label: "Features", isScroll: true },
  { href: "/#templates", label: "Templates", isScroll: true },
  { href: "/blog", label: "Blog", isScroll: false },
  { href: "/#pricing", label: "Pricing", isScroll: true },
]

export function MainNav() {
  return (
    <nav className="flex items-center gap-6">
      {navItems.map((item) =>
        item.isScroll ? (
          <ScrollLink
            key={item.href}
            href={item.href}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {item.label}
          </ScrollLink>
        ) : (
          <Link key={item.href} href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
            {item.label}
          </Link>
        ),
      )}
    </nav>
  )
}

