import { Link } from "react-router-dom";
import { BookOpen, Phone, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">camelDarasa</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Elimu ya Tech kwa Kiswahili. Jifunze, Tengeneza, Weka Online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Viungo vya Haraka</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/masomo" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Masomo
                </Link>
              </li>
              <li>
                <Link to="/pakua" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pakua Nyaraka
                </Link>
              </li>
              <li>
                <Link to="/ratiba" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Ratiba ya Masomo
                </Link>
              </li>
              <li>
                <Link to="/muundo" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Muundo wa Kozi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Wasiliana Nasi</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0628587749"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  0628 587 749
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/255628587749"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@cameldarasa.co.tz"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@cameldarasa.co.tz
                </a>
              </li>
            </ul>
          </div>

          {/* Offer */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kozi ya HTML</h4>
            <div className="bg-accent rounded-lg p-4 space-y-2">
              <p className="text-sm text-accent-foreground">
                <span className="font-semibold">Ada:</span> 30,000 TZS
              </p>
              <p className="text-sm text-accent-foreground">
                <span className="font-semibold">Muda:</span> Wiki 2
              </p>
              <p className="text-sm text-accent-foreground">
                <span className="font-semibold">Nafasi:</span> 5 tu
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} camelDarasa. Haki zote zimehifadhiwa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
