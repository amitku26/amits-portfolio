export default function Experience() {
  return (
    <section className="py-12">
      <h2 className="section-title">Experience</h2>

      <div className="space-y-6">
        <div className="bg-gray p-5 rounded-lg">
          <h3 className="font-semibold">
            ShaheelByteCrafters-LLC – Frontend Developer Intern
          </h3>
          <p className="text-sm text-gray-light">Aug 2024 – Oct 2024</p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-light space-y-1">
            <li>
              Built a food-ordering UI with React, Material-UI, Redux Toolkit,
              and Axios.
            </li>
            <li>
              Implemented restaurant browsing, cart, authentication, and
              checkout flow.
            </li>
            <li>
              Optimized performance (lazy loading, memoization) and ensured
              responsive design.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
