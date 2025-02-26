export function SectionTitle({ children, icon: Icon }) {
  return (
    <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
      {Icon && <Icon className='text-blue-500' />}
      {children}
    </h2>
  );
}
