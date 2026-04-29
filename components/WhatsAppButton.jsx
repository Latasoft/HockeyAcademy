export default function WhatsAppButton() {
  const phone = "56912345678"; // numero en formato internacional
  const message = "Hola, quiero más información";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="currentColor"
        >
          <path d="M16.001 3C8.821 3 3 8.821 3 16c0 2.817.938 5.548 2.667 7.8L4 29l5.36-1.64A12.95 12.95 0 0 0 16.001 29C23.18 29 29 23.179 29 16S23.18 3 16.001 3zm0 23.5c-2.2 0-4.35-.59-6.23-1.71l-.45-.27-3.18.97.99-3.1-.29-.47A10.45 10.45 0 0 1 5.5 16c0-5.79 4.71-10.5 10.5-10.5S26.5 10.21 26.5 16 21.79 26.5 16 26.5zm5.77-7.83c-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.71.16-.21.32-.81 1.04-.99 1.25-.18.21-.36.24-.68.08-.32-.16-1.34-.49-2.56-1.57-.95-.84-1.6-1.88-1.79-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.36.48-.54.16-.18.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.63-.53-.55-.71-.56h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.67s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.48 4.84.77.33 1.37.52 1.84.67.77.24 1.47.21 2.02.13.62-.09 1.88-.77 2.14-1.52.26-.75.26-1.39.18-1.52-.08-.13-.29-.21-.61-.37z" />
        </svg>
      </div>
    </a>
  );
}