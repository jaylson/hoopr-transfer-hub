
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-hoopr-dark to-black flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-hoopr flex items-center justify-center">
          <img src="/hoopr-logo-icon.png" alt="Hoopr Logo" className="w-12 h-12" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-8">
          Oops! Parece que você está fora de campo. Esta página não existe.
        </p>
        <Button asChild className="bg-gradient-hoopr hover:bg-hoopr-blue text-white">
          <Link to="/">Voltar para o início</Link>
        </Button>
      </div>
      <div className="absolute top-10 left-10">
        <Link to="/" className="flex items-center">
          <img src="/hoopr-logo.png" alt="Hoopr Logo" className="h-10" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
