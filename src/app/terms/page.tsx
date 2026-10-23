export default function TermsPage() {
  return (
    <main className="container mx-auto px-6 py-24 max-w-4xl text-neutral-800 dark:text-neutral-200">
      <h1 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">
        Terms of Service
      </h1>

      <section className="mb-8">
        <p className="mb-4">
          Luxzy Bespoke Footwear & General Leather Works provides handcrafted
          and bespoke footwear and leather accessories. By placing an order,
          customers agree to our terms and policies.
        </p>
        <p>
          All orders are subject to confirmation. Product prices are quoted in
          Nigerian naira unless otherwise stated. Handmade products may have
          minor variations in colour, texture and finishing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">
          Orders and Payments
        </h2>
        <p className="mb-4">
          A deposit of 80% of the total order value is required to confirm an
          order and commence production. The outstanding balance must be paid in
          full before delivery or collection.
        </p>
        <p>
          Production timelines will be communicated upon order confirmation.
          Customers are responsible for providing accurate measurements, sizes
          and design specifications.
        </p>
      </section>
    </main>
  );
}
