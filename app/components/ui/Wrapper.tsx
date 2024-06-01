interface WrapperProps {
  className?: string;
  children: React.ReactNode;
}
const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={`w-full max-w-screen-xl ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
