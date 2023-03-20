export default function Navbaritems({ title, Icon, iconHeight, active }) {
  return (
    <div className="flex items-center cursor-pointer  hover:bg-slate-200 rounded-full">
      <div className="flex items-center space-x-1 p-2">
        <Icon className={`${active && "text-[#a40b74]"}`} />
        <span
          className={`${
            active && "font-mono text-yellow-100"
          } hidden lg:inline text-slate-900 font-mono`}
        >
          {title}
        </span>
      </div>
    </div>
  );
}
