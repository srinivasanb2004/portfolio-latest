export default function SkillCard({ name, icon: Icon, color }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]">
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>

      {/* Icon */}
      <div className="relative flex justify-center mb-4">
        <div className="p-4 rounded-2xl bg-[#0b1120] border border-white/10 group-hover:border-cyan-400/40 transition duration-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]">
          <Icon
            className={`text-5xl ${color} group-hover:scale-110 transition duration-300`}
          />
        </div>
      </div>

      {/* Text */}
      <h3 className="relative text-lg font-semibold text-white group-hover:text-cyan-200 transition duration-300">
        {name}
      </h3>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-3/4"></div>
    </div>
  );
}