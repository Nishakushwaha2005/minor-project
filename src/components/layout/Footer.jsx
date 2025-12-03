import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="container-responsive flex flex-col gap-4 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} SecureChat. All rights reserved.</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/importance" className="hover:text-primary-400">
            Problem Statement
          </Link>
          <Link to="/features" className="hover:text-primary-400">
            Features
          </Link>
          <Link to="/architecture" className="hover:text-primary-400">
            Architecture
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
