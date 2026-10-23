export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-6 py-24 max-w-4xl text-neutral-800 dark:text-neutral-200">
      <h1 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">
        Privacy Policy
      </h1>

      <section className="mb-8">
        <p className="mb-4">
          We collect necessary customer information, including names, contact
          details, delivery addresses and order specifications, to process
          orders, arrange deliveries and provide customer support.
        </p>
        <p>
          We do not sell customers’ personal information. Information may be
          shared with payment processors and delivery providers where necessary
          to complete transactions. We take reasonable steps to protect personal
          information and handle it in accordance with applicable Nigerian
          data-protection laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">
          Customer Support
        </h2>
        <p className="mb-4">
          For orders, enquiries, complaints or other assistance, please contact
          Luxzy through the official contact details published on our website:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Website: https://www.luxzybespoke.com</li>
          <li>Email: williamsluzy@gmail.com</li>
          <li>Phone: 08029092392</li>
        </ul>
        <p>
          Luxzy is committed to quality craftsmanship, transparency and customer
          satisfaction.
        </p>
      </section>
    </main>
  );
}
