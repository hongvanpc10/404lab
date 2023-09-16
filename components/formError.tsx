export default function FormError({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={`text-red-400 mt-1 ml-4 ${className}`}>{children}</div>
  );
}
