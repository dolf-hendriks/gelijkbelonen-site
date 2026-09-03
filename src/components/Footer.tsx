export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            Powered by{" "}
            <a
              href="https://onplia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              Onplia
            </a>{" "}
            — de agentic middle office voor uitzendbureaus
          </p>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} GelijkBelonen.nl. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
