const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} TubeSearch-app. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
