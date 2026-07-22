import { toolkit } from '../data/projects';

const SkillsBand = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">Toolkit</h2>
        <div className="flex flex-wrap gap-2">
          {toolkit.map((skill) => (
            <span
              key={skill}
              className="text-sm text-gray-800 bg-white border border-gray-200 px-4 py-1.5 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsBand;
