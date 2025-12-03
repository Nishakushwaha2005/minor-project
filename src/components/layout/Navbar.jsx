import { NavLink, Link } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/importance', label: 'Importance' },
  { to: '/team', label: 'Team' },
  { to: '/features', label: 'Features' },
  { to: '/uniqueness', label: 'Uniqueness' },
  { to: '/comparison', label: 'Comparison' },
  { to: '/tools-tech', label: 'Tools & Tech' },
  { to: '/system-requirements', label: 'Requirements' },
  { to: '/architecture', label: 'Architecture' },
  { to: '/snapshots', label: 'Snapshots' },
  { to: '/conclusion', label: 'Conclusion' },
  { to: '/future-work', label: 'Future Work' },
];

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="container-responsive flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-sm font-semibold">
            SC
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">SecureChat</span>
            <span className="text-[11px] text-slate-400">Encrypted Real-Time Messaging</span>
          </div>
        </Link>

        <div className="hidden items-center gap-4 text-xs md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'rounded-full px-3 py-1 transition-colors',
                  isActive
                    ? 'bg-primary-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
