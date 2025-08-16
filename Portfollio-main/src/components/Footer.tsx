const Footer = () => {
  return (
    <footer className="py-8 px-4 text-center text-sm text-slate border-t border-slate-dark/30">
      <div className="max-w-md mx-auto">
        <p className="mb-2 text-highlight font-mono">
          Designed & Built by Harsh Doshi
        </p>
        <p className="mb-4">
          {new Date().getFullYear()} All Rights Reserved
        </p>
        <div className="flex justify-center items-center space-x-4 text-xs text-slate-dark">
          <a href="#" className="hover:text-highlight transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-highlight transition-colors">Terms of Service</a>
          <span>•</span>
          <a href="#" className="hover:text-highlight transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
