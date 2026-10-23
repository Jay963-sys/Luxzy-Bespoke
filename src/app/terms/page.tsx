export default function TermsPage() {
  return (
    <main className="container mx-auto px-6 py-24 max-w-4xl text-neutral-800">
      <h1 className="text-3xl font-bold mb-8">
        Terms of Service & Customer Policies
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Terms of Service</h2>
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
        <h2 className="text-xl font-semibold mb-4">Orders and Payments</h2>
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

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Delivery Policy</h2>
        <p className="mb-4">
          Our products are primarily made to order. Standard production
          typically takes 14 working days, subject to order complexity, material
          availability and confirmation.
        </p>
        <p>
          Delivery timelines and charges depend on the destination and will be
          communicated to customers. Delays caused by unforeseen circumstances
          will be communicated as soon as reasonably possible.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Refund, Return and Cancellation Policy
        </h2>
        <p className="mb-4">
          Customers may request cancellation before production begins. Once
          production has started, cancellation may not be possible because
          materials and labour may already have been committed.
        </p>
        <p className="mb-4">
          Change-of-mind returns are generally not accepted for bespoke products
          once production has started. However, customers who receive defective,
          damaged or incorrect products should contact us promptly with their
          order details and supporting photographs.
        </p>
        <p>
          Where an issue attributable to Luxzy is confirmed, an appropriate
          remedy, including repair, replacement or refund, will be provided as
          applicable. These policies do not limit customers’ rights under
          applicable law.
        </p>
      </section>
    </main>
  );
}
