import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
          </div>

          {/* Ready to Start */}
          <div className="mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life. Get in touch with our team today.
            </p>
            <Button variant="hero" size="xl">
              Get In Touch
            </Button>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/40">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © 2025 Premium Agency. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <div className="flex items-center gap-4 ml-6">
                <a href="#" className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center hover:bg-secondary/30 transition-colors">
                  <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center hover:bg-secondary/30 transition-colors">
                  <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;