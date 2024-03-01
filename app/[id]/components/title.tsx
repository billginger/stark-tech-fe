'use client';

interface Props {
  children: React.ReactNode
}

const Title = ({ children }: Props) => (
  <div className="inline-block px-3 py-2 text-sm text-white bg-[#0386f4] rounded-[3px]">
    {children}
  </div>
);

export default Title;
